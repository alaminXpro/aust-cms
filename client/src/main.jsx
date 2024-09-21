import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './i18n';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import router from './router/index';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Suspense>
                <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
                    <RouterProvider router={router} />
                </GoogleOAuthProvider>
                </Suspense>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
