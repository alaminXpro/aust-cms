import { XCircle, RefreshCw } from 'lucide-react'
import { useParams, Link } from 'react-router-dom'
import { setPageTitle } from '../redux/themeConfigSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function PaymentFailed() {
  const { tranId } = useParams()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle('Payment Failed'));
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 sm:p-8 text-center">
        <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2">Payment Failed</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Transaction ID: {tranId}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          We&apos;re sorry, but your payment could not be processed at this time. Please try again or contact support if the problem persists.
        </p>
        <div className="bg-red-100 dark:bg-red-900 border-l-4 border-red-500 text-red-700 dark:text-red-300 p-4 mb-6" role="alert">
          <p className="font-bold">Possible reasons for failure:</p>
          <ul className="list-disc list-inside text-sm">
            <li>Insufficient funds</li>
            <li>Incorrect payment details</li>
            <li>Temporary issue with the payment gateway</li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/join"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            <RefreshCw className="mr-2 -ml-1 w-4 h-4" />
            Try Again
          </Link>
          <Link
            to="/contact-us"
            className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
}
