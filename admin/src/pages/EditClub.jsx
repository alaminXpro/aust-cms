import { Link, useParams, useNavigate } from 'react-router-dom'; // Updated import
import { useEffect, useState } from 'react';
import { setPageTitle } from '../redux/themeConfigSlice';
import ImageUploading from 'react-images-uploading';
import { useDispatch, useSelector } from 'react-redux';
import IconX from '../components/Icon/IconX';
import { axiosInstance } from '../utils/axiosInstance';
import { storage } from '../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import Swal from 'sweetalert2';

const EditClub = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Updated to useNavigate
  const { clubId } = useParams(); // Assuming you have set up React Router to provide clubId
  const { currentUser } = useSelector((state) => state.user);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [clubLogo, setClubLogo] = useState([]);
  const [clubLogoUrl, setClubLogoUrl] = useState('');
  const [clubImages, setClubImages] = useState([]);
  const [clubImageUrls, setClubImageUrls] = useState([]);
  const maxNumber = 69;

  useEffect(() => {
    dispatch(setPageTitle('Edit Club'));
    fetchClubDetails(); // Fetch club details when component mounts
  }, []);

  // Fetch club details based on clubId
  const fetchClubDetails = async () => {
    try {
      const response = await axiosInstance.get(`/api/admin/clubs/${clubId}`, { withCredentials: true });
      const club = response.data; // Adjust according to your API response structure
        console.log('Club:', club);
      setName(club.name);
      setDescription(club.description);
      setClubLogoUrl(club.clubLogo); // Assuming clubLogo is a single URL
      setClubImageUrls(club.clubImages); // Assuming clubImages is an array of URLs
    } catch (error) {
      console.error('Error fetching club details:', error);
      // Handle error or show notification
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description || (!clubLogo.length && !clubLogoUrl) || (!clubImages.length && !clubImageUrls.length)) {
      Swal.fire('Error', 'Please fill all fields and upload images or provide image URLs.', 'error');
      return;
    }

    try {
      const logoUrl = clubLogoUrl || await uploadImage(clubLogo[0].file);
      const imagesUrls = [
        ...clubImageUrls,
        ...(await Promise.all(clubImages.map(image => uploadImage(image.file))))
      ];

      const response = await axiosInstance.put(`/api/admin/clubs/${clubId}`, {
        name,
        description,
        clubLogo: logoUrl,
        clubImages: imagesUrls,
      },{ withCredentials: true });
      console.log('Club updated:', response.data);

      Swal.fire('Success', 'Club updated successfully', 'success');
      navigate('/clubs'); // Navigate to clubs page after successful update
    } catch (error) {
      console.error('Error updating club:', error);
      Swal.fire('Error', 'Failed to update club', 'error');
    }
  };

  const uploadImage = (file) => {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, `clubs/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const onChangeLogo = (imageList) => {
    setClubLogo(imageList);
    setClubLogoUrl('');
  };

  const onChangeImages = (imageList) => {
    setClubImages(imageList);
    setClubImageUrls([]);
  };

  return (
    <div>
      <ul className="flex space-x-2 rtl:space-x-reverse">
        <li>
          <Link to="#" className="text-primary hover:underline">
            Club
          </Link>
        </li>
        <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
          <span>Edit Club</span>
        </li>
      </ul>

      <div className="pt-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="panel">
          <div className="flex items-center justify-between mb-5">
            <h5 className="font-semibold text-lg dark:text-white-light">Club Information</h5>
          </div>
          <div className="mb-5">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Club Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  className="form-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  rows={3}
                  className="form-textarea"
                  placeholder="Enter Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary !mt-6">
                Update
              </button>
            </form>
          </div>
        </div>

        <div className="panel" id="single_file">
          <div className="flex items-center justify-between mb-5">
            <h5 className="font-semibold text-lg dark:text-white-light">Club Logo</h5>
          </div>
          <div className="mb-5">
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Or enter image URL"
                className="form-input"
                value={clubLogoUrl}
                onChange={(e) => {
                  setClubLogoUrl(e.target.value);
                  setClubLogo([]);
                }}
              />
              <div className="custom-file-container" data-upload-id="myFirstImage">
                <div className="label-container">
                  <label>Upload </label>
                  <button
                    type="button"
                    className="custom-file-container__image-clear"
                    title="Clear Image"
                    onClick={() => {
                      setClubLogo([]);
                    }}
                  >
                    ×
                  </button>
                </div>
                <label className="custom-file-container__custom-file"></label>
                <input type="file" className="custom-file-container__custom-file__custom-file-input" accept="image/*" />
                <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                <ImageUploading value={clubLogo} onChange={onChangeLogo} maxNumber={maxNumber}>
                  {({ imageList, onImageUpload }) => (
                    <div className="upload__image-wrapper">
                      <button className="custom-file-container__custom-file__custom-file-control" onClick={onImageUpload}>
                        Choose File...
                      </button>
                      &nbsp;
                      {imageList.map((image, index) => (
                        <div key={index} className="custom-file-container__image-preview relative">
                          <img src={image.dataURL} alt="img" className="m-auto" />
                        </div>
                      ))}
                    </div>
                  )}
                </ImageUploading>
                {clubLogo.length === 0 ? <img src="/assets/images/file-preview.svg" className="max-w-md w-full m-auto" alt="" /> : ''}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5 space-y-8">
        <div className="grid lg:grid-cols-1 grid-cols-1 gap-6">
          <div className="multiple-file-upload panel">
            <div className="flex items-center justify-between mb-5">
              <h5 className="font-semibold text-lg dark:text-white-light">Club Images</h5>
            </div>
            <div className="mb-5">
              <div className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Or enter image URLs (comma-separated)"
                  className="form-input"
                  value={clubImageUrls ? clubImageUrls.join(',') : ''}
                  onChange={(e) => {
                    setClubImageUrls(e.target.value.split(',').map(url => url.trim()));
                    setClubImages([]);
                  }}
                />
                <div className="custom-file-container" data-upload-id="mySecondImage">
                  <div className="label-container">
                    <label>Upload </label>
                    <button
                      type="button"
                      className="custom-file-container__image-clear"
                      title="Clear Image"
                      onClick={() => {
                        setClubImages([]);
                      }}
                    >
                      ×
                    </button>
                  </div>
                  <label className="custom-file-container__custom-file"></label>
                  <input type="file" className="custom-file-container__custom-file__custom-file-input" accept="image/*" />
                  <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                  <ImageUploading multiple value={clubImages} onChange={onChangeImages} maxNumber={maxNumber}>
                    {({ imageList, onImageUpload, onImageRemove }) => (
                      <div className="upload__image-wrapper">
                        <button className="custom-file-container__custom-file__custom-file-control" onClick={onImageUpload}>
                          Choose File...
                        </button>
                        &nbsp;
                        <div className="grid gap-4 sm:grid-cols-3 grid-cols-1">
                          {imageList.map((image, index) => (
                            <div key={index} className="custom-file-container__image-preview relative">
                              <button
                                type="button"
                                className="custom-file-container__image-clear bg-dark-light dark:bg-dark dark:text-white-dark rounded-full block w-fit p-0.5 absolute top-0 left-0"
                                title="Clear Image"
                                onClick={() => onImageRemove(index)}
                              >
                                <IconX className="w-3 h-3" />
                              </button>
                              <img src={image.dataURL} alt="img" className="object-cover shadow rounded w-full !max-h-48" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </ImageUploading>
                  {clubImages.length === 0 ? <img src="/assets/images/file-preview.svg" className="max-w-md w-full m-auto" alt="" /> : ''}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditClub;
