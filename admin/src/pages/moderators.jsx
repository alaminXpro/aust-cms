import { Link, useParams } from 'react-router-dom';
import { DataTable } from 'mantine-datatable';
import { useState, useEffect } from 'react';
import sortBy from 'lodash/sortBy';
import { useDispatch, useSelector } from 'react-redux';
import { setPageTitle } from '../redux/themeConfigSlice';
import IconTrashLines from '../components/Icon/IconTrashLines';
import IconEye from '../components/Icon/IconEye';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import 'mantine-datatable/styles.css';
import api from '../utils/axiosInstance';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const List = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { clubId } = useParams(); // Get the clubId from the route params

  useEffect(() => {
    dispatch(setPageTitle('Moderators'));

    // Fetch moderators for the club
    const fetchModerators = async () => {
      try {
        const response = await api.post(`/clubs/${clubId}/moderators`, {
          moderatorId: currentUser.id,
        });
        setItems(response.data); // Assuming response.data contains the moderators
      } catch (err) {
        setError('Failed to load moderators');
      } finally {
        setLoading(false);
      }
    };

    fetchModerators();
  }, [dispatch, clubId]);

  const deleteSelectedModerators = async () => {
    try {
      if (selectedRecords.length === 0) {
        return Swal.fire('Error', 'Please select moderators to delete.', 'error');
      }
      const response = await api.delete(`/clubs/${clubId}/moderators`, {
        data: { moderatorIds : selectedRecords.map(record => record.id) },
      });
      // Update the items state to remove deleted moderators
      setItems(items.filter(item => !selectedRecords.some(record => record.id === item.id)));
      setSelectedRecords([]);
      Swal.fire('Success', 'Selected moderators have been deleted.', 'success');
    } catch (err) {
      Swal.fire('Error', 'Failed to delete selected moderators.', 'error');
    }
  };

  const [page, setPage] = useState(1);
  const PAGE_SIZES = [10, 20, 30, 50, 100];
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
  const [initialRecords, setInitialRecords] = useState([]);
  const [records, setRecords] = useState([]);
  const [selectedRecords, setSelectedRecords] = useState([]);

  const [search, setSearch] = useState('');
  const [sortStatus, setSortStatus] = useState({
    columnAccessor: 'name',
    direction: 'asc',
  });

  useEffect(() => {
    if (!loading) {
      setInitialRecords(sortBy(items, 'name'));
    }
  }, [items, loading]);

  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecords([...initialRecords.slice(from, to)]);
  }, [page, pageSize, initialRecords]);

  useEffect(() => {
    const filtered = items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()) || item.email.toLowerCase().includes(search.toLowerCase()));
    setInitialRecords(sortBy(filtered, 'name'));
  }, [search, items]);

  useEffect(() => {
    const sorted = sortBy(initialRecords, sortStatus.columnAccessor);
    setRecords(sortStatus.direction === 'desc' ? sorted.reverse() : sorted);
    setPage(1);
  }, [sortStatus, initialRecords]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  const MySwal = withReactContent(Swal);
  const showAlert = async (userId) => {
    try {
      const transaction = await api.get(`/sslcommerz/transaction/${userId}`);
      const data = transaction.data;

      MySwal.fire({
        title: 'Transaction Details',
        html: `
          <div class="text-left">
            <p><strong>Transaction ID:</strong> ${data.tranId}</p>
            <p><strong>Amount:</strong> ${data.amount} ${data.currency}</p>
            <p><strong>Payment Status:</strong> ${data.paymentStatus}</p>
            <p><strong>User Name:</strong> ${data.userName}</p>
            <p><strong>User Email:</strong> ${data.userEmail}</p>
            <p><strong>User Phone:</strong> ${data.userPhone}</p>
            <p><strong>Created At:</strong> ${new Date(data.createdAt).toLocaleString()}</p>
            <p><strong>Updated At:</strong> ${new Date(data.updatedAt).toLocaleString()}</p>
          </div>
        `,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: 'Close',
        customClass: {
          popup: 'sweet-alerts',
        },
      });
    } catch (error) {
      console.error('Error fetching transaction:', error);
      Swal.fire('Error', 'Failed to fetch transaction.', 'error');
    }
  };

  return (
    <>
    <div className="space-y-6">
        <ol className="flex text-primary font-semibold dark:text-white-dark">
          <li className="bg-[#ebedf2] ltr:rounded-l-md rtl:rounded-r-md dark:bg-[#1b2e4b]">
            <Link to="/" className="p-1.5 ltr:pl-3 rtl:pr-3 ltr:pr-2 rtl:pl-2 relative  h-full flex items-center before:absolute ltr:before:-right-[15px] rtl:before:-left-[15px] rtl:before:rotate-180 before:inset-y-0 before:m-auto before:w-0 before:h-0 before:border-[16px] before:border-l-[15px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-[#ebedf2] before:z-[1] dark:before:border-l-[#1b2e4b] hover:text-primary/70 dark:hover:text-white-dark/70">
              Home
            </Link>
          </li>
          <li className="bg-[#ebedf2] dark:bg-[#1b2e4b]">
            <Link to="/clubs" className="bg-primary text-white-light p-1.5 ltr:pl-6 rtl:pr-6 ltr:pr-2 rtl:pl-2 relative  h-full flex items-center before:absolute ltr:before:-right-[15px] rtl:before:-left-[15px] rtl:before:rotate-180 before:inset-y-0 before:m-auto before:w-0 before:h-0 before:border-[16px] before:border-l-[15px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-primary before:z-[1]">
              Clubs
            </Link>
          </li>
          <li className="bg-[#ebedf2] dark:bg-[#1b2e4b]">
            <button className="p-1.5 px-3 ltr:pl-6 rtl:pr-6 relative  h-full flex items-center before:absolute ltr:before:-right-[15px] rtl:before:-left-[15px] rtl:before:rotate-180 before:inset-y-0 before:m-auto before:w-0 before:h-0 before:border-[16px] before:border-l-[15px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-[#ebedf2] before:z-[1] dark:before:border-l-[#1b2e4b] hover:text-primary/70 dark:hover:text-white-dark/70">
              Moderators
            </button>
          </li>
        </ol>
      </div>
      <MantineProvider>
        <div className="pt-5">
        <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">
          <div className="invoice-table">
            <div className="mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5">
              <div className="flex items-center gap-2">
                <button type="button" className="btn btn-danger gap-2" onClick={deleteSelectedModerators}>
                  <IconTrashLines />
                  Delete
                </button>
                <Link to={`/edit/club/${clubId}`} className="btn btn-primary gap-2">
                  Add Moderator
                </Link>
              </div>
              <div className="ltr:ml-auto rtl:mr-auto">
                <input type="text" className="form-input w-auto" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
              </div>
            </div>

            <div className="datatables pagination-padding">
              <DataTable
                className="whitespace-nowrap table-hover invoice-table"
                records={records}
                columns={[
                  {
                    accessor: 'name',
                    sortable: true,
                    render: ({ name }) => <div className="font-semibold">{name}</div>,
                  },
                  {
                    accessor: 'email',
                    sortable: true,
                  },
                  {
                    accessor: 'transaction',
                    sortable: true,
                    render: ({ id }) => (
                      <button onClick={() => showAlert(id)} type="button" className="flex hover:text-primary">
                        <IconEye />
                      </button>
                    ),
                  },
                  {
                    accessor: 'status',
                    sortable: true,
                    render: () => <span className="badge badge-outline-success">Moderator</span>,
                  },
                  {
                    accessor: 'action',
                    title: 'Actions',
                    sortable: false,
                    textAlignment: 'center',
                    render: ({ id }) => (
                      <div className="flex gap-4 items-center w-max mx-auto">
                        <button type="button" className="flex hover:text-danger" onClick={() => deleteSelectedModerators(id)}>
                          <IconTrashLines />
                        </button>
                      </div>
                    ),
                  },
                ]}
                highlightOnHover
                totalRecords={initialRecords.length}
                recordsPerPage={pageSize}
                page={page}
                onPageChange={(p) => setPage(p)}
                recordsPerPageOptions={PAGE_SIZES}
                onRecordsPerPageChange={setPageSize}
                sortStatus={sortStatus}
                onSortStatusChange={setSortStatus}
                selectedRecords={selectedRecords}
                onSelectedRecordsChange={setSelectedRecords}
                paginationText={({ from, to, totalRecords }) => `Showing ${from} to ${to} of ${totalRecords} entries`}
              />
            </div>
          </div>
        </div>
        </div>
      </MantineProvider>
    </>
  );
};

export default List;