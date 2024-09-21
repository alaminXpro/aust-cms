import { AlertCircle, ArrowLeft } from 'lucide-react'
import { useParams, Link } from 'react-router-dom'
import { setPageTitle } from '../redux/themeConfigSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
export default function PaymentCancelled() {
  const { tranId } = useParams()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle('Payment Cancelled'));
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 sm:p-8 text-center">
        <AlertCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2">Payment Cancelled</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Transaction ID: {tranId}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Your payment has been cancelled. No charges have been made to your account.
        </p>
        <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 text-yellow-700 dark:text-yellow-300 p-4 mb-6" role="alert">
          <p className="font-bold">What happens now?</p>
          <p className="text-sm">Your club registration is incomplete. You can try again whenever you&apos;re ready.</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/join"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-700 dark:hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-200"
          >
            <ArrowLeft className="mr-2 -ml-1 w-4 h-4" />
            Back to Registration
          </Link>
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-200"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}
