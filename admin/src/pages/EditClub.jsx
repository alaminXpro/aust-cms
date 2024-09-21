import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setPageTitle } from '../redux/themeConfigSlice';
import ImageUploading from 'react-images-uploading';
import { useDispatch } from 'react-redux';
import api from '../utils/axiosInstance';
import Swal from 'sweetalert2';
import IconSearch from '../components/Icon/IconSearch';
import { MantineProvider } from '@mantine/core';
import { DataTable } from 'mantine-datatable';
import '@mantine/core/styles.css';
import 'mantine-datatable/styles.css';

const EditClub = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { clubId } = useParams();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [clubLogo, setClubLogo] = useState([]);
  const [website, setWebsite] = useState('');
  const maxNumber = 69;

  const [members, setMembers] = useState([]);
  const [moderators, setModerators] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [page, setPage] = useState(1);
  const PAGE_SIZES = [10, 20, 30, 50, 100];
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
  const [initialRecords, setInitialRecords] = useState([]);
  const [records, setRecords] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    dispatch(setPageTitle('Edit Club'));

    const fetchClubDetails = async () => {
      try {
        const response = await api.get(`/clubs/${clubId}`);
        const club = response.data;
        setName(club.name);
        setDescription(club.description);
        setClubLogo(club.logo ? [{ url: club.logo }] : []);
        setWebsite(club.website);
        setModerators(club.moderators);
      } catch (error) {
        console.error('Error fetching club details:', error);
      }
    };

    const fetchMembers = async () => {
      try {
        const response = await api.get('/users/');
        const membersWithModeratorStatus = response.data.results.map((member) => ({
          ...member,
          isModerator: moderators.some((mod) => mod.id === member.id),
        }));
        setMembers(membersWithModeratorStatus);
        setFilteredMembers(membersWithModeratorStatus);
        setInitialRecords(membersWithModeratorStatus);
      } catch (error) {
        setError('Failed to load members');
      } finally {
        setLoading(false);
      }
    };

    fetchClubDetails();
    fetchMembers();
  }, [clubId, dispatch]);

  useEffect(() => {
    const filtered = members.filter((member) => member.name.toLowerCase().includes(search.toLowerCase()) || member.email.toLowerCase().includes(search.toLowerCase()));
    setFilteredMembers(filtered);
    setInitialRecords(filtered);
  }, [search, members]);

  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecords([...initialRecords.slice(from, to)]);
  }, [page, pageSize, initialRecords]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description || !clubLogo.length || !website) {
      Swal.fire('Error', 'Please fill all fields and upload logo.', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      let logoUrl = clubLogo[0].url || clubLogo[0].data_url;

      // If a new logo has been uploaded (it will have a 'file' property)
      if (clubLogo[0].file) {
        const formData = new FormData();
        formData.append('file', clubLogo[0].file);
        formData.append('folder', 'club_logos');
        formData.append('filename', `club_logo_${clubId}_${Date.now()}`);

        const uploadResponse = await api.post('/upload/upload-single', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        if (!uploadResponse.data.url) {
          throw new Error('Failed to upload logo');
        }

        logoUrl = uploadResponse.data.url;
      }

      const res = await api.patch(`/clubs/${clubId}`, {
        name,
        description,
        logo: logoUrl,
        website,
      });

      Swal.fire('Success', 'Club updated successfully', 'success');
      navigate('/clubs'); // Redirect to clubs list after successful update
    } catch (error) {
      console.error('Error updating club:', error);
      Swal.fire('Error', 'Failed to update club', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const onChangeLogo = (imageList) => {
    // If a new image is uploaded, it will have a file property
    if (imageList.length > 0 && imageList[0].file) {
      setClubLogo(imageList);
    } else if (imageList.length === 0) {
      // If the image is removed
      setClubLogo([]);
    }
    // If no new image is uploaded, keep the existing image
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const addModerator = async (userId) => {
    try {
      const response = await api.patch(`/clubs/${clubId}/moderators`, {
        moderatorId: userId,
      });
      Swal.fire('Success', 'Moderator added successfully', 'success');

      // Update the local state
      setModerators((prevModerators) => [...prevModerators, { id: userId }]);

      // Update the members list to reflect the change
      setMembers((prevMembers) => prevMembers.map((member) => (member.id === userId ? { ...member, isModerator: true } : member)));

      // Update filtered members and initial records
      setFilteredMembers((prevFiltered) => prevFiltered.map((member) => (member.id === userId ? { ...member, isModerator: true } : member)));
      setInitialRecords((prevRecords) => prevRecords.map((record) => (record.id === userId ? { ...record, isModerator: true } : record)));
    } catch (error) {
      Swal.fire('Error', 'Failed to add moderator', 'error');
    }
  };
  const moderatorIds = moderators.map((moderator) => moderator.id);

  return (
    <div>
      <div className="space-y-6">
        <ol className="flex text-primary font-semibold dark:text-white-dark">
          <li className="bg-[#ebedf2] ltr:rounded-l-md rtl:rounded-r-md dark:bg-[#1b2e4b]">
            <Link
              to="/"
              className="p-1.5 ltr:pl-3 rtl:pr-3 ltr:pr-2 rtl:pl-2 relative  h-full flex items-center before:absolute ltr:before:-right-[15px] rtl:before:-left-[15px] rtl:before:rotate-180 before:inset-y-0 before:m-auto before:w-0 before:h-0 before:border-[16px] before:border-l-[15px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-[#ebedf2] before:z-[1] dark:before:border-l-[#1b2e4b] hover:text-primary/70 dark:hover:text-white-dark/70"
            >
              Home
            </Link>
          </li>
          <li className="bg-[#ebedf2] dark:bg-[#1b2e4b]">
            <Link
              to="/clubs"
              className="bg-primary text-white-light p-1.5 ltr:pl-6 rtl:pr-6 ltr:pr-2 rtl:pl-2 relative  h-full flex items-center before:absolute ltr:before:-right-[15px] rtl:before:-left-[15px] rtl:before:rotate-180 before:inset-y-0 before:m-auto before:w-0 before:h-0 before:border-[16px] before:border-l-[15px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-primary before:z-[1]"
            >
              Clubs
            </Link>
          </li>
          <li className="bg-[#ebedf2] dark:bg-[#1b2e4b]">
            <button className="p-1.5 px-3 ltr:pl-6 rtl:pr-6 relative  h-full flex items-center before:absolute ltr:before:-right-[15px] rtl:before:-left-[15px] rtl:before:rotate-180 before:inset-y-0 before:m-auto before:w-0 before:h-0 before:border-[16px] before:border-l-[15px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-[#ebedf2] before:z-[1] dark:before:border-l-[#1b2e4b] hover:text-primary/70 dark:hover:text-white-dark/70">
              Edit Club
            </button>
          </li>
        </ol>
      </div>

      <div className="pt-5">
        <div className="panel">
          <div className="flex items-center justify-between mb-5">
            <h5 className="font-semibold text-lg dark:text-white-light">Edit Club</h5>
          </div>
          <div className="mb-5">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Club Name</label>
                <input id="name" type="text" placeholder="Name" className="form-input" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="website">Website</label>
                <input id="website" type="text" placeholder="Website" className="form-input" value={website} onChange={(e) => setWebsite(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="description">Description</label>
                <textarea id="description" rows={3} className="form-textarea" placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
              </div>

              <div>
                <label>Club Logo</label>
                <div className="custom-file-container" data-upload-id="myFirstImage">
                  <div className="label-container">
                    <label>Upload </label>
                    <button
                      type="button"
                      className="custom-file-container__image-clear"
                      title="Clear Image"
                      onClick={() => setClubLogo([])}
                    >
                      ×
                    </button>
                  </div>
                  <label className="custom-file-container__custom-file"></label>
                  <input type="file" className="custom-file-container__custom-file__custom-file-input" accept="image/*" />
                  <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                  <ImageUploading value={clubLogo} onChange={onChangeLogo} maxNumber={maxNumber}>
                    {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
                      <div className="upload__image-wrapper">
                        <button
                          type="button"
                          className="custom-file-container__custom-file__custom-file-control"
                          onClick={onImageUpload}
                        >
                          Choose File...
                        </button>
                        &nbsp;
                        {imageList.map((image, index) => (
                          <div key={index} className="custom-file-container__image-preview relative">
                            <img src={image.data_url || image.url} alt="club logo" className="m-auto" />
                            {image.file && (
                              <button
                                type="button"
                                onClick={() => onImageRemove(index)}
                                className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-bl-md"
                              >
                                Remove
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </ImageUploading>
                </div>
              </div>
              <button type="submit" className="btn btn-primary !mt-6" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <svg aria-hidden="true" className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    Updating...
                  </>
                ) : 'Update Club'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="panel lg:col-span-2">
          <div className="flex items-center justify-between mb-5">
            <h5 className="font-semibold text-lg dark:text-white-light">Add Moderator</h5>
          </div>
          <div className="mb-5 space-y-5">
            <form className="mx-auto w-full sm:w-1/2 mb-5">
              <div className="relative">
                <input
                  type="text"
                  value={search}
                  placeholder="Search Members..."
                  className="form-input shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] bg-white rounded-full h-11 placeholder:tracking-wider ltr:pr-11 rtl:pl-11"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button type="button" className="btn btn-primary absolute ltr:right-1 rtl:left-1 inset-y-0 m-auto rounded-full w-9 h-9 p-0 flex items-center justify-center">
                  <IconSearch />
                </button>
              </div>
            </form>
            <div className="datatables">
              <MantineProvider>
                <DataTable
                  className="whitespace-nowrap table-hover"
                  records={records}
                  columns={[
                    {
                      accessor: 'user',
                      sortable: true,
                      render: ({ name, avatar }) => (
                        <div className="flex items-center">
                          <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full mr-2" />
                          <div className="font-semibold">{name}</div>
                        </div>
                      ),
                    },
                    {
                      accessor: 'email',
                      sortable: true,
                    },
                    {
                      accessor: 'moderator',
                      sortable: true,
                      render: ({ id, isModerator }) => (
                        <span className={`badge ${isModerator || moderatorIds.includes(id) ? 'badge-outline-success' : 'badge-outline-warning'}`}>
                          {isModerator || moderatorIds.includes(id) ? 'True' : 'False'}
                        </span>
                      ),
                    },
                    {
                      accessor: 'action',
                      title: 'Actions',
                      sortable: false,
                      textAlignment: 'center',
                      render: ({ id }) => (
                        <div className="flex gap-4 items-center w-max mx-auto">
                          <button onClick={() => addModerator(id)} type="button" className="btn btn-outline-primary">
                            Add
                          </button>
                        </div>
                      ),
                    },
                  ]}
                  totalRecords={initialRecords.length}
                  recordsPerPage={pageSize}
                  page={page}
                  onPageChange={(p) => setPage(p)}
                  recordsPerPageOptions={PAGE_SIZES}
                  onRecordsPerPageChange={setPageSize}
                  paginationText={({ from, to, totalRecords }) => `Showing ${from} to ${to} of ${totalRecords} entries`}
                />
              </MantineProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditClub;
