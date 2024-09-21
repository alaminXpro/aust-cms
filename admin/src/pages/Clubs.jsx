import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import api from '../utils/axiosInstance';
import 'react-18-image-lightbox/style.css';
import Swal from 'sweetalert2';
import { setPageTitle } from '../redux/themeConfigSlice';
import IconSettings from '../components/Icon/IconSettings';
import IconLoader from '../components/Icon/IconLoader';
import IconUsersGroup from '../components/Icon/IconUsersGroup';
import Dropdown from '../components/Dropdown';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import IconDollarSign from '../components/Icon/IconDollarSign';
const Clubs = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const isRtl = useSelector((state) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
  const [clubs, setClubs] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(setPageTitle('Clubs'));
    setIsLoading(true);
    fetchClubs();
  }, [limit, page]);

  const fetchClubs = async () => {
    try {
      let apiEndpoint;
      if (currentUser.role === 'admin') {
        apiEndpoint = `/clubs?limit=${limit}&page=${page}`;
      } else {
        apiEndpoint = `/clubs?limit=${limit}&page=${page}&userId=${currentUser.id}`;
      }
      const response = await api.get(`${apiEndpoint}`);
      if (response.data.results.length === 0) {
        Swal.fire('No Clubs Found', 'There are no clubs associated with this admin.', 'info');
      } else {
        setClubs(response.data.results);
      }
    } catch (error) {
      console.error('Error fetching clubs:', error);
      Swal.fire('Error', 'Failed to fetch clubs.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteClub = async (clubId) => {
    try {
      await api.delete(`/clubs/${clubId}`);
      fetchClubs(); // Refresh the clubs list after deletion
    } catch (error) {
      console.error('Error deleting club:', error);
      Swal.fire('Error', 'Failed to delete club.', 'error');
    }
  };

  const showAlert = async (type, clubId) => {
    if (type === 10) {
      const result = await Swal.fire({
        icon: 'warning',
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonText: 'Delete',
        padding: '2em',
        customClass: 'sweet-alerts',
      });

      if (result.value) {
        await handleDeleteClub(clubId);
        Swal.fire({
          title: 'Club Deleted!',
          text: 'Your Club has been deleted.',
          icon: 'success',
          customClass: 'sweet-alerts',
        });
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="mb-5">
        <ol className="flex text-primary font-semibold dark:text-white-dark">
          <li className="bg-[#ebedf2] ltr:rounded-l-md rtl:rounded-r-md dark:bg-[#1b2e4b]">
            <Link
              to="/"
              className="p-1.5 ltr:pl-3 rtl:pr-3 ltr:pr-2 rtl:pl-2 relative h-full flex items-center before:absolute ltr:before:-right-[15px] rtl:before:-left-[15px] rtl:before:rotate-180 before:inset-y-0 before:m-auto before:w-0 before:h-0 before:border-[16px] before:border-l-[15px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-[#ebedf2] before:z-[1] dark:before:border-l-[#1b2e4b] hover:text-primary/70 dark:hover:text-white-dark/70"
            >
              Home
            </Link>
          </li>
          <li className="bg-[#ebedf2] dark:bg-[#1b2e4b]">
            <button className="bg-primary text-white-light p-1.5 ltr:pl-6 rtl:pr-6 ltr:pr-2 rtl:pl-2 relative h-full flex items-center before:absolute ltr:before:-right-[15px] rtl:before:-left-[15px] rtl:before:rotate-180 before:inset-y-0 before:m-auto before:w-0 before:h-0 before:border-[16px] before:border-l-[15px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-primary before:z-[1]">
              Clubs
            </button>
          </li>
        </ol>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
      ) : (
        <>
          {/* Render clubs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {Array.isArray(clubs) &&
              clubs.map((club) => (
                <div key={club.id} className="relative bg-white shadow-md rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none overflow-hidden">
                  {/* Edit Button */}
                  <div className="dropdown absolute top-2 right-2 z-10">
                    <Dropdown
                      placement="bottom-end"
                      btnClassName="btn btn-secondary dropdown-toggle w-auto h-auto px-2 py-1 text-sm flex items-center"
                      button={
                        <>
                          Edit
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </>
                      }
                    >
                      <ul className="!min-w-[170px]">
                        <li>
                          <Link to={`/edit/club/${club.id}`} type="button">
                            Edit
                          </Link>
                        </li>
                        <li>
                          <button type="button" onClick={() => showAlert(10, club.id)}>
                            Delete
                          </button>
                        </li>
                      </ul>
                    </Dropdown>
                  </div>

                  <div className="p-5">
                    {/* Club Logo */}
                    <div className="mb-5 -mx-5 -mt-5">
                      <img src={club.logo || '/assets/images/file-preview.svg'} alt="club-logo" className="w-full h-48 object-cover" />
                    </div>

                    {/* Club Name */}
                    <h5 className="text-[#3b3f5c] text-lg font-semibold mb-3 dark:text-white-light">{club.name}</h5>

                    {/* Club Description */}
                    <p className="text-white-dark mb-4 dark:text-[#9CA3AF] line-clamp-3">{club.description || 'No description available'}</p>

                    {/* Border Line */}
                    <hr className="border-t border-gray-300 dark:border-gray-600 my-4" />

                    {/* Club Stats with Icons and Dynamic Tooltip Content */}
                    <div className="flex items-center justify-between space-x-4 rtl:space-x-reverse dark:text-white-light">
                      {/* Pending */}
                      <div className="flex items-center space-x-2">
                        <Link to={`/pendings/${club.id}`}>
                          <Tippy content={`Pending approvals: ${club.pendings.length}`}>
                            <span>
                              <IconLoader className="h-5 w-5 text-primary dark:text-white-light" />
                            </span>
                          </Tippy>
                        </Link>
                      </div>

                      {/* Enrolled */}
                      <div className="flex items-center space-x-2">
                        <Link to={`/members/${club.id}`}>
                          <Tippy content={`Enrolled members: ${club.members.length}`}>
                            <span>
                              <IconUsersGroup className="h-5 w-5 text-primary dark:text-white-light" />
                            </span>
                          </Tippy>
                        </Link>
                      </div>

                      {/* Moderators */}
                      <div className="flex items-center space-x-2">
                        <Link to={`/moderators/${club.id}`}>
                          <Tippy content={`Moderators count: ${club.moderators.length}`}>
                            <span>
                              <IconSettings className="h-5 w-5 text-primary dark:text-white-light" />
                            </span>
                          </Tippy>
                        </Link>
                      </div>
                      {/* Transactions */}
                      <div className="flex items-center space-x-2">
                        <Link to={`/transactions/${club.id}`}>
                          <Tippy content={`View Transactions`}>
                            <span>
                              <IconDollarSign className="h-5 w-5 text-primary dark:text-white-light" />
                            </span>
                          </Tippy>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
              <ul className="inline-flex items-center space-x-1 rtl:space-x-reverse">
                <li>
                  <button
                    type="button"
                    className="flex justify-center font-semibold px-2 sm:px-3.5 py-1 sm:py-2 text-xs sm:text-sm rounded transition text-dark hover:text-primary border-2 border-white-light dark:border-[#191e3a] hover:border-primary dark:hover:border-primary dark:text-white-light"
                    onClick={() => {
                      setPage(page - 1);
                      setIsLoading(true);
                    }}
                    disabled={page === 1 || isLoading}
                  >
                    {isLoading ? 'Loading...' : 'Prev'}
                  </button>
                </li>

                <li>
                  <span className="flex justify-center font-semibold px-2 sm:px-3.5 py-1 sm:py-2 text-xs sm:text-sm rounded transition text-primary border-2 border-primary dark:border-primary dark:text-white-light">
                    Page {page}
                  </span>
                </li>

                <li>
                  <button
                    type="button"
                    className="flex justify-center font-semibold px-2 sm:px-3.5 py-1 sm:py-2 text-xs sm:text-sm rounded transition text-dark hover:text-primary border-2 border-white-light dark:border-[#191e3a] hover:border-primary dark:hover:border-primary dark:text-white-light"
                    onClick={() => {
                      setPage(page + 1);
                      setIsLoading(true);
                    }}
                    disabled={clubs.length < limit || isLoading}
                  >
                    {isLoading ? 'Loading...' : 'Next'}
                  </button>
                </li>
              </ul>

              {/* Items per page dropdown */}
              <div className="flex items-center space-x-2">
                <span className="text-xs sm:text-sm">Items per page:</span>
                <select
                  className="px-2 sm:px-3.5 py-1 sm:py-2 text-xs sm:text-sm rounded border-2 border-white-light dark:border-[#191e3a] dark:bg-[#191e3a] text-dark dark:text-white-light"
                  value={limit}
                  onChange={(e) => {
                    setLimit(Number(e.target.value));
                    setPage(1);
                    setIsLoading(true);
                  }}
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                </select>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Clubs;
