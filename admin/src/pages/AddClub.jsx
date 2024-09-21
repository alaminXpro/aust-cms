import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setPageTitle } from '../redux/themeConfigSlice';
import ImageUploading from 'react-images-uploading';
import { useDispatch } from 'react-redux';
import api from '../utils/axiosInstance';
import Swal from 'sweetalert2';
import { decodeHtmlEntities } from '../utils/helpers';

const AddClub = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('Add New Club'));
  });

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [website, setWebsite] = useState('');
  const [clubLogo, setClubLogo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const maxNumber = 1;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description || !clubLogo.length || !website) {
      Swal.fire('Error', 'Please fill all fields and upload logo.', 'error');
      return;
    }

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('file', clubLogo[0].file);
      formData.append('folder', 'club_logos');
      formData.append('filename', `club_logo_${Date.now()}`);

      const uploadResponse = await api.post('/uploads/upload-single', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (!uploadResponse.data.url) {
        throw new Error('Failed to upload logo');
      }

      const logoUrl = decodeHtmlEntities(uploadResponse.data.url);

      const res = await api.post('/clubs/', {
        name,
        description,
        logo: logoUrl,
        website,
      });

      Swal.fire('Success', 'Club added successfully', 'success');
      setName('');
      setDescription('');
      setWebsite('');
      setClubLogo([]);
    } catch (error) {
      console.error('Error adding club:', error);
      Swal.fire('Error', 'Failed to add club', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const onChangeLogo = (imageList) => {
    setClubLogo(imageList);
  };

  return (
    <div>
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
            Add Club
          </button>
        </li>
      </ol>

      <div className="pt-5">
        <div className="panel">
          <div className="flex items-center justify-between mb-5">
            <h5 className="font-semibold text-lg dark:text-white-light">Club Information</h5>
          </div>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block mb-2 font-semibold">Club Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter club name"
                  className="form-input w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="website" className="block mb-2 font-semibold">Club Website</label>
                <input
                  id="website"
                  type="url"
                  placeholder="Enter club website"
                  className="form-input w-full"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="clubLogo" className="block mb-2 font-semibold">Club Logo</label>
              <ImageUploading
                value={clubLogo}
                onChange={onChangeLogo}
                maxNumber={maxNumber}
                dataURLKey="data_url"
                acceptType={['jpg', 'png', 'jpeg']}
              >
                {({ imageList, onImageUpload, onImageRemove, isDragging, dragProps }) => (
                  <div className="space-y-2">
                    <button
                      type="button"
                      className={`w-full px-4 py-2 border border-gray-300 rounded-md ${
                        isDragging ? 'bg-primary text-white' : 'bg-white text-gray-700'
                      } hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      Choose Logo
                    </button>
                    {imageList.map((image, index) => (
                      <div key={index} className="relative">
                        <img src={image.data_url} alt="club logo" className="w-full h-32 object-cover rounded-md" />
                        <button
                          type="button"
                          onClick={() => onImageRemove(index)}
                          className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-bl-md rounded-tr-md hover:bg-red-600 focus:outline-none"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </ImageUploading>
            </div>
            <div>
              <label htmlFor="description" className="block mb-2 font-semibold">Description</label>
              <textarea
                id="description"
                rows={4}
                className="form-textarea w-full"
                placeholder="Enter club description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClub;