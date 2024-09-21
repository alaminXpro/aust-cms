import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import api from '../utils/axiosInstance';
import Swal from 'sweetalert2';
import { setPageTitle } from '../redux/themeConfigSlice';

const MyClubs = () => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    const [clubs, setClubs] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(setPageTitle('My Clubs'));
        fetchMyClubs();
    }, [limit, page]);

    const fetchMyClubs = async () => {
        setIsLoading(true);
        try {
            const response = await api.get(`/clubs?limit=${limit}&page=${page}&userId=${currentUser.id}`);

            if (response.data.results.length === 0) {
                console.log('No clubs found for user');
                Swal.fire('No Clubs Found', 'You have not joined any clubs yet.', 'info');
            } else {
                setClubs(response.data.results);
            }
        } catch (error) {
            console.error('Error fetching my clubs:', error);
            Swal.fire('Error', 'Failed to fetch your clubs.', 'error');
        } finally {
            setIsLoading(false);
        }
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
                        to="/join"
                        className="bg-primary text-white-light p-1.5 ltr:pl-6 rtl:pr-6 ltr:pr-2 rtl:pl-2 relative  h-full flex items-center before:absolute ltr:before:-right-[15px] rtl:before:-left-[15px] rtl:before:rotate-180 before:inset-y-0 before:m-auto before:w-0 before:h-0 before:border-[16px] before:border-l-[15px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-primary before:z-[1]"
                    >
                        Join Clubs
                    </Link>
                </li>
                <li className="bg-[#ebedf2] dark:bg-[#1b2e4b]">
                    <button
                        className="p-1.5 px-3 ltr:pl-6 rtl:pr-6 relative  h-full flex items-center before:absolute ltr:before:-right-[15px] rtl:before:-left-[15px] rtl:before:rotate-180 before:inset-y-0 before:m-auto before:w-0 before:h-0 before:border-[16px] before:border-l-[15px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-[#ebedf2] before:z-[1] dark:before:border-l-[#1b2e4b] hover:text-primary/70 dark:hover:text-white-dark/70"
                    >
                        My Clubs
                    </button>
                </li>
            </ol>

            <div className="py-14 dark:bg-none md:py-[100px]">
                <div className="container">
                    <div className="grid gap-x-[30px] gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                        {isLoading ? (
                            // Skeleton loader
                            Array.from({ length: limit }).map((_, index) => (
                                <div key={index} className="animate-pulse">
                                    <div className="relative rounded-3xl border border-transparent bg-gray-200 dark:bg-gray-700 h-52"></div>
                                    <div className="p-5">
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-2"></div>
                                        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                                        <div className="mt-3 flex justify-between items-center">
                                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                                            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            Array.isArray(clubs) &&
                            clubs.map((club) => (
                                <div key={club.id}>
                                    <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                                        <a href={club.website} target="_blank" rel="noreferrer" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></a>
                                        <img src={club.logo || '/assets/images/file-preview.svg'} alt="club" className="h-52 w-full rounded-t-3xl object-cover" />
                                        <div className="p-5 text-sm font-bold">
                                            <h6 className="font-extrabold text-secondary dark:text-secondary">AUST</h6>
                                            <h5 className="my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2 dark:text-white">{club.name}</h5>
                                            <p className="line-clamp-4">{club.description}</p>
                                            <div className="mt-auto border-[#BBC0D0]/50 pt-3">
                                                <div className="mb-3 flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                                                    <div className="animate-pulse relative mb-2 text-lg font-extrabold before:absolute before:top-1/2 before:h-2.5 before:w-2.5 before:-translate-y-1/2 before:rounded-full before:bg-primary group-hover:text-white group-hover:before:bg-white ltr:pl-5 ltr:before:left-0 rtl:pr-5 rtl:before:right-0 sm:mb-0">
                                                        Active
                                                    </div>
                                                    <a
                                                        href={club.website}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="btn text-sm sm:text-base text-white group-hover:bg-white group-hover:text-primary dark:text-black w-full sm:w-auto px-3 py-2 sm:px-4 sm:py-2 xl:px-6 xl:py-3"
                                                    >
                                                        View Details
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {!isLoading && (
                        <div className="flex justify-center mt-10">
                            {/* Pagination */}
                            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
                                <ul className="inline-flex items-center space-x-1 rtl:space-x-reverse">
                                    <li>
                                        <button
                                            type="button"
                                            className="flex justify-center font-semibold px-2 sm:px-3.5 py-1 sm:py-2 text-xs sm:text-sm rounded transition text-dark hover:text-primary border-2 border-white-light dark:border-[#191e3a] hover:border-primary dark:hover:border-primary dark:text-white-light"
                                            onClick={() => setPage(page - 1)}
                                            disabled={page === 1}
                                        >
                                            Prev
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
                                            onClick={() => setPage(page + 1)}
                                            disabled={clubs.length < limit}
                                        >
                                            Next
                                        </button>
                                    </li>
                                </ul>

                                {/* Items per page dropdown */}
                                <div className="flex items-center space-x-2">
                                    <span className="text-xs sm:text-sm">Items per page:</span>
                                    <select
                                        className="px-2 sm:px-3.5 py-1 sm:py-2 text-xs sm:text-sm rounded border-2 border-white-light dark:border-[#191e3a] dark:bg-[#191e3a] text-dark dark:text-white-light"
                                        value={limit}
                                        onChange={(e) => setLimit(Number(e.target.value))}
                                    >
                                        <option value={5}>5</option>
                                        <option value={10}>10</option>
                                        <option value={20}>20</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyClubs;
