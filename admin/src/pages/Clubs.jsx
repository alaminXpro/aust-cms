// client/src/pages/Clubs.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPageTitle } from '../redux/themeConfigSlice';
import { axiosInstance } from '../utils/axiosInstance';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import Swal from 'sweetalert2';
import IconMenuUsers from '/src/components/Icon/Menu/IconMenuUsers';

const Clubs = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [clubs, setClubs] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    dispatch(setPageTitle('Clubs'));
    fetchClubs();
  }, []);

  useEffect(() => {
    window.global = window;
  }, []);

  const fetchClubs = async () => {
    try {
      const response = await axiosInstance.get('/api/admin/clubs', {withCredentials: true});
      if (response.data.length === 0) {
        Swal.fire('No Clubs Found', 'There are no clubs associated with this admin.', 'info');
      } else {
        setClubs(response.data);
      }
    } catch (error) {
      console.error('Error fetching clubs:', error);
      Swal.fire('Error', 'Failed to fetch clubs.', 'error');
    }
  };

  const handleImageClick = (images) => {
    setLightboxImages(images);
    setPhotoIndex(0); // Reset the photo index
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
    setLightboxImages([]); // Clear images when closing
  };

  return (
    <div>
      <ul className="flex space-x-2 rtl:space-x-reverse">
        <li>
          <Link to="#" className="text-primary hover:underline">
            Clubs
          </Link>
        </li>
        <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
          <span>All</span>
        </li>
      </ul>

      <div className="mb-5 flex items-start justify gap-3">
        {clubs.map((club) => (
          <div key={club._id} className="relative max-w-[19rem] w-full bg-white shadow-md rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
            <Link to={`/edit/club/${club._id}`} type="button" className="absolute top-2 right-2 btn btn-secondary">
              Edit
            </Link>
            <div className="py-7 px-6">
              <div className="-mt-7 mb-7 -mx-6 rounded-tl rounded-tr h-[215px] overflow-hidden">
                <img src={club.clubLogo || "/assets/images/file-preview.svg"} alt="cover" className="w-full h-full object-cover" />
              </div>
              <h5 className="text-[#3b3f5c] text-xl font-semibold mb-4 dark:text-white-light">{club.name}</h5>
              <p className="text-white-dark">{club.description}</p>
              <div className="flex justify-between items-center mt-6">
                <button type="button" className="btn btn-primary" onClick={() => handleImageClick(club.clubImages)}>
                  Club Images
                </button>
                <span className="text-white-dark"><IconMenuUsers /> {club.members.length}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && lightboxImages.length > 0 && (
        <Lightbox
          mainSrc={lightboxImages[photoIndex]}
          nextSrc={lightboxImages[(photoIndex + 1) % lightboxImages.length]}
          prevSrc={lightboxImages[(photoIndex + lightboxImages.length - 1) % lightboxImages.length]}
          onCloseRequest={handleCloseLightbox}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + lightboxImages.length - 1) % lightboxImages.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % lightboxImages.length)}
        />
      )}
    </div>
  );
};

export default Clubs;
