import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../redux/themeConfigSlice';
import { Link } from 'react-router-dom';
import { DateRangePicker, createStaticRanges } from 'react-date-range';
import { addDays, startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { FiSearch, FiCalendar, FiDollarSign, FiDownload, FiPrinter, FiEye, FiEyeOff, FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { DataTable } from 'mantine-datatable';
import { MantineProvider, Button, Tooltip, LoadingOverlay } from '@mantine/core';
import api from '../utils/axiosInstance';
import '@mantine/core/styles.css';
import 'mantine-datatable/styles.css';
import Swal from 'sweetalert2';

export default function TransactionTable() {
  const dispatch = useDispatch();
  const {clubId } = useParams();
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [searchTerm, setSearchTerm] = useState('')
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
    key: 'selection'
  });
  const [visibleIds, setVisibleIds] = useState({})
  const [showDatePicker, setShowDatePicker] = useState(false);
  const datePickerRef = useRef(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState({ field: 'createdAt', direction: 'desc' });

  useEffect(() => {
    dispatch(setPageTitle('Club Transactions'));
    fetchTransactions();
  }, [dispatch, clubId]);

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/sslcommerz/transaction/club/${clubId}`);
      console.log(response.data);
      setTransactions(Array.isArray(response.data) ? response.data : []);
      setLoading(false);
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to fetch transactions!',
      });
      setTransactions([]);
      setLoading(false);
    }
  };

  const filteredData = transactions.filter(transaction => 
    (transaction.userName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.tranId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.userId.studentId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.userPhone?.includes(searchTerm)) &&
    (!dateRange.startDate || !dateRange.endDate || 
    (new Date(transaction.createdAt) >= dateRange.startDate &&
    new Date(transaction.createdAt) <= dateRange.endDate))
  ).sort((a, b) => {
    const dateA = new Date(a[sortBy.field]);
    const dateB = new Date(b[sortBy.field]);
    return sortBy.direction === 'asc' ? dateA - dateB : dateB - dateA;
  });

  const totalAmount = filteredData.reduce((sum, transaction) => sum + (transaction.amount || 0), 0)
  const clubName = transactions[0]?.clubId?.name || 'Club ';

  const toggleIdVisibility = (id) => {
    setVisibleIds(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const truncateId = (id) => {
    if (!id) return 'N/A';
    return id.slice(0, 8) + '...';
  }

  const handleDateRangeSelect = (ranges) => {
    setDateRange(ranges.selection);
    setShowDatePicker(false);
  };

  const formatDateRange = () => {
    if (!dateRange.startDate || !dateRange.endDate) return 'All Time';
    const start = dateRange.startDate.toLocaleDateString();
    const end = dateRange.endDate.toLocaleDateString();
    return `${start} - ${end}`;
  };

  const defineds = {
    startOfWeek: startOfWeek(new Date()),
    endOfWeek: endOfWeek(new Date()),
    startOfLastWeek: startOfWeek(addDays(new Date(), -7)),
    endOfLastWeek: endOfWeek(addDays(new Date(), -7)),
    startOfMonth: startOfMonth(new Date()),
    endOfMonth: endOfMonth(new Date()),
    startOfLastMonth: startOfMonth(addDays(new Date(), -30)),
    endOfLastMonth: endOfMonth(addDays(new Date(), -30)),
  };

  const staticRanges = createStaticRanges([
    {
      label: 'All Time',
      range: () => ({
        startDate: null,
        endDate: null
      })
    },
    {
      label: 'Today',
      range: () => ({
        startDate: startOfDay(new Date()),
        endDate: endOfDay(new Date())
      })
    },
    {
      label: 'Yesterday',
      range: () => ({
        startDate: startOfDay(addDays(new Date(), -1)),
        endDate: endOfDay(addDays(new Date(), -1))
      })
    },
    {
      label: 'This Week',
      range: () => ({
        startDate: defineds.startOfWeek,
        endDate: defineds.endOfWeek
      })
    },
    {
      label: 'Last Week',
      range: () => ({
        startDate: defineds.startOfLastWeek,
        endDate: defineds.endOfLastWeek
      })
    },
    {
      label: 'This Month',
      range: () => ({
        startDate: defineds.startOfMonth,
        endDate: defineds.endOfMonth
      })
    },
    {
      label: 'Last Month',
      range: () => ({
        startDate: defineds.startOfLastMonth,
        endDate: defineds.endOfLastMonth
      })
    }
  ]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
        setShowDatePicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSort = (field) => {
    setSortBy(prev => ({
      field,
      direction: prev.field === field && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  return (
    <>
    <div className="space-y-5">
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
              Transactions
            </button>
          </li>
        </ol>
      </div>
    <MantineProvider>
      <div className="pt-5">
        <div className="panel">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <h1 className="text-2xl font-bold mb-4 sm:mb-0"> {clubName} Transactions</h1>
            <div className="flex space-x-2">
              <Tooltip label="Download">
                <Button color="blue">
                  Download
                </Button>
              </Tooltip>
              <Tooltip label="Print">
                <Button color="green">
                  Print
                </Button>
              </Tooltip>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="relative w-full md:w-1/3">
                <input
                  type="text"
                  placeholder="Search by name, ID or phone"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <div className="relative w-full md:w-1/3" ref={datePickerRef}>
                <div
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white cursor-pointer"
                  onClick={() => setShowDatePicker(!showDatePicker)}
                >
                  <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <span>{formatDateRange()}</span>
                </div>
                {showDatePicker && (
                  <div className="absolute z-10 mt-1">
                    <DateRangePicker
                      onChange={handleDateRangeSelect}
                      showSelectionPreview={true}
                      moveRangeOnFirstSelection={false}
                      months={2}
                      ranges={[dateRange]}
                      direction="horizontal"
                      staticRanges={staticRanges}
                    />
                  </div>
                )}
              </div>
              <div className="w-full md:w-1/3 flex justify-end items-center">
                <div className="flex items-center bg-green-100 dark:bg-green-800 p-2 rounded-lg">
                  <FiDollarSign className="mr-2 text-green-500" size={24} />
                  <span className="text-xl font-semibold">Total: {totalAmount} BDT</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden relative">
            <LoadingOverlay visible={loading} />
            {error && <div className="text-red-500 p-4">{error}</div>}
            <DataTable
              className="whitespace-nowrap table-hover invoice-table border border-gray-200 dark:border-gray-700"
              borderRadius="sm"
              withColumnBorders
              striped
              highlightOnHover
              records={filteredData}
              noRecordsText="No transactions found"
              columns={[
                { 
                  accessor: 'userId', 
                  title: 'User' ,
                  render: ({ userId }) => (
                    <div className="flex items-center">
                      <Link to={`/profile/${userId.studentId}`} className="flex items-center">
                        <img src={userId.avatar} alt={userId.name} className="w-10 h-10 rounded-full" />
                        <span className="ml-2 font-semibold">{userId.name}</span>
                      </Link>
                    </div>
                  )
                },
                { 
                  accessor: 'userId', 
                  title: 'Student ID',
                  render: ({ userId }) => (
                    <Tooltip key={userId.studentId} label={visibleIds[userId.studentId] ? "Hide full ID" : "Show full ID"}>
                      <button 
                        onClick={() => toggleIdVisibility(userId.studentId)}
                        className="flex items-center text-blue-500 hover:text-blue-700"
                      >
                        {visibleIds[userId.studentId] ? userId.studentId : truncateId(userId.studentId)}
                        {visibleIds[userId.studentId] ? <FiEyeOff className="ml-2" /> : <FiEye className="ml-2" />}
                      </button>
                    </Tooltip>
                  )
                },
                { accessor: 'userPhone', title: 'Phone' },
                { 
                  accessor: 'tranId', 
                  title: 'Transaction ID',
                  render: ({ tranId }) => (
                    <Tooltip key={tranId} label={visibleIds[tranId] ? "Hide full ID" : "Show full ID"}>
                      <button 
                        onClick={() => toggleIdVisibility(tranId)}
                        className="flex items-center text-blue-500 hover:text-blue-700"
                      >
                        {visibleIds[tranId] ? tranId : truncateId(tranId)}
                        {visibleIds[tranId] ? <FiEyeOff className="ml-2" /> : <FiEye className="ml-2" />}
                      </button>
                    </Tooltip>
                  )
                },
                { accessor: 'amount', title: 'Amount' },
                { accessor: 'currency', title: 'Currency' },
                { 
                  accessor: 'status', 
                  title: 'Status',
                  render: ({ paymentStatus }) => (
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      paymentStatus === 'PAID' ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' :
                      paymentStatus === 'PENDING' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100' :
                      'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
                    }`}>
                      {paymentStatus}
                    </span>
                  )
                },
                { 
                  accessor: 'date', 
                  title: 'Date',
                  render: ({ createdAt }) => new Date(createdAt).toLocaleDateString(),
                  sortable: true,
                  sort: sortBy.field === 'createdAt' ? sortBy.direction : null,
                  onSort: () => handleSort('createdAt')
                },
              ]}
              totalRecords={filteredData.length}
              recordsPerPage={pageSize}
              page={page}
              onPageChange={setPage}
              recordsPerPageOptions={[10, 20, 30, 50]}
              onRecordsPerPageChange={setPageSize}
              paginationText={({ from, to, totalRecords }) => `Showing ${from} to ${to} of ${totalRecords} entries`}
            />
          </div>
        </div>
      </div>
    </MantineProvider>
    </>
  )
}