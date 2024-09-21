import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { setPageTitle, toggleRTL } from '../redux/themeConfigSlice';
import Dropdown from '../components/Dropdown';
import i18next from 'i18next';
import IconCaretDown from '../components/Icon/IconCaretDown';
import IconMail from '../components/Icon/IconMail';
import IconLockDots from '../components/Icon/IconLockDots';
import api from 'axios';
import Swal from 'sweetalert2';

const RecoverIdCover = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [step, setStep] = useState('email');

    const API_BASE = import.meta.env.VITE_API_BASE;

    useEffect(() => {
        dispatch(setPageTitle('Reset Password'));
    }, []);

    const isRtl = useSelector((state) => state.themeConfig.rtlClass) === 'rtl';
    const themeConfig = useSelector((state) => state.themeConfig);
    const [flag, setFlag] = useState(themeConfig.locale);

    const setLocale = (flag) => {
        setFlag(flag);
        if (flag.toLowerCase() === 'ae') {
            dispatch(toggleRTL('rtl'));
        } else {
            dispatch(toggleRTL('ltr'));
        }
    };

    const token = new URLSearchParams(location.search).get('token');

    useEffect(() => {
        if (token) {
            setStep('password');
        }
    }, [token]);

    const submitForm = async (e) => {
        e.preventDefault();
        setError('');

        try {
            if (step === 'email') {
                await api.post(`${API_BASE}/auth/forgot-password`, { email });
                Swal.fire({
                    icon: 'success',
                    title: 'Email Sent',
                    text: 'Please check your email for password reset instructions.',
                });
            } else if (step === 'password') {
                await api.post(`${API_BASE}/auth/reset-password?token=${token}`, { password });
                Swal.fire({
                    icon: 'success',
                    title: 'Password Reset Successful',
                    text: 'Your password has been successfully reset.',
                }).then(() => {
                    navigate('/login');
                });
            }
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred. Please try again.');
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
            });
        }
    };

    return (
        <div>
            <div className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16">
                <div className="relative flex w-full max-w-[1502px] flex-col justify-between overflow-hidden rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 lg:min-h-[758px] lg:flex-row lg:gap-10 xl:gap-0">
                    <div className="relative hidden w-full items-center justify-center bg-[linear-gradient(225deg,rgba(239,18,98,1)_0%,rgba(67,97,238,1)_100%)] p-5 lg:inline-flex lg:max-w-[835px] xl:-ms-28 ltr:xl:skew-x-[14deg] rtl:xl:skew-x-[-14deg]">
                        <div className="absolute inset-y-0 w-8 from-primary/10 via-transparent to-transparent ltr:-right-10 ltr:bg-gradient-to-r rtl:-left-10 rtl:bg-gradient-to-l xl:w-16 ltr:xl:-right-20 rtl:xl:-left-20"></div>
                        <div className="ltr:xl:-skew-x-[14deg] rtl:xl:skew-x-[14deg]">
                            <Link to="/" className="w-48 block lg:w-72 ms-10">
                                <img src="/assets/images/logo-pink.png" alt="Logo" className="w-full" />
                            </Link>
                            <div className="mt-24 hidden w-full max-w-[430px] lg:block">
                                <img src="/assets/images/auth/reset-password.svg" alt="Cover Image" className="w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="relative flex w-full flex-col items-center justify-center gap-6 px-4 pb-16 pt-6 sm:px-6 lg:max-w-[667px]">
                        <div className="flex w-full max-w-[440px] items-center gap-2 lg:absolute lg:end-6 lg:top-6 lg:max-w-full">
                            <Link to="/" className="w-8 block lg:hidden">
                                <img src="/favicon.ico" alt="Logo" className="mx-auto w-10" />
                            </Link>
                            <div className="dropdown ms-auto w-max">
                                <Dropdown
                                    offset={[0, 8]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="flex items-center gap-2.5 rounded-lg border border-white-dark/30 bg-white px-2 py-1.5 text-white-dark hover:border-primary hover:text-primary dark:bg-black"
                                    button={
                                        <>
                                            <div>
                                                <img src={`/assets/images/flags/${flag.toUpperCase()}.svg`} alt="image" className="h-5 w-5 rounded-full object-cover" />
                                            </div>
                                            <div className="text-base font-bold uppercase">{flag}</div>
                                            <span className="shrink-0">
                                                <IconCaretDown />
                                            </span>
                                        </>
                                    }
                                >
                                    <ul className="!px-2 text-dark dark:text-white-dark grid grid-cols-2 gap-2 font-semibold dark:text-white-light/90 w-[280px]">
                                        {themeConfig.languageList.map((item) => {
                                            return (
                                                <li key={item.code}>
                                                    <button
                                                        type="button"
                                                        className={`flex w-full hover:text-primary rounded-lg ${flag === item.code ? 'bg-primary/10 text-primary' : ''}`}
                                                        onClick={() => {
                                                            i18next.changeLanguage(item.code);
                                                            setLocale(item.code);
                                                        }}
                                                    >
                                                        <img src={`/assets/images/flags/${item.code.toUpperCase()}.svg`} alt="flag" className="w-5 h-5 object-cover rounded-full" />
                                                        <span className="ltr:ml-3 rtl:mr-3">{item.name}</span>
                                                    </button>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="w-full max-w-[440px] lg:mt-16">
                            <div className="mb-7">
                                <h1 className="mb-3 text-2xl font-bold !leading-snug dark:text-white">Password Reset</h1>
                                <p>{step === 'email' ? 'Enter your email to recover your ID' : 'Enter your new password'}</p>
                            </div>
                            <form className="space-y-5" onSubmit={submitForm}>
                                {step === 'email' ? (
                                    <div>
                                        <label htmlFor="Email">Email</label>
                                        <div className="relative text-white-dark">
                                            <input
                                                id="Email"
                                                type="email"
                                                placeholder="Enter Email"
                                                className="form-input pl-10 placeholder:text-white-dark"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2">
                                                <IconMail fill={true} />
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <label htmlFor="Password">New Password</label>
                                        <div className="relative text-white-dark">
                                            <input
                                                id="Password"
                                                type="password"
                                                placeholder="Enter New Password"
                                                className="form-input pl-10 placeholder:text-white-dark"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2">
                                                <IconLockDots fill={true} />
                                            </span>
                                        </div>
                                    </div>
                                )}
                                {error && <p className="text-red-500 text-sm">{error}</p>}
                                <button type="submit" className="btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]">
                                    {step === 'email' ? 'RECOVER' : 'RESET PASSWORD'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecoverIdCover;
