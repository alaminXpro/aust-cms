import { CheckCircle, ArrowRight } from 'lucide-react'
import { useParams, Link } from 'react-router-dom'
import { setPageTitle } from '../redux/themeConfigSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function PaymentSuccess() {
  const { tranId } = useParams()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle('Payment Successful'));
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 sm:p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2">Payment Successful!</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Your transaction ID is: {tranId}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Your payment has been processed successfully. You have been added to the club&apos;s pending list for approval.
        </p>
        <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 text-green-700 dark:text-green-300 p-4 mb-6" role="alert">
          <p className="font-bold">What&apos;s Next?</p>
          <p className="text-sm">The club authority will review your application and confirm your membership soon.</p>
        </div>
        <Link
          to="/dashboard"
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:bg-green-700 dark:hover:bg-green-600 transition-colors duration-200"
        >
          Go to Dashboard
          <ArrowRight className="ml-2 -mr-1 w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
