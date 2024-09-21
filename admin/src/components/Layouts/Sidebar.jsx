import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { toggleSidebar } from '../../redux/themeConfigSlice';
import AnimateHeight from 'react-animate-height';
import { useState, useEffect } from 'react';
import IconCaretsDown from '../Icon/IconCaretsDown';
import IconCaretDown from '../Icon/IconCaretDown';
import IconMenuDashboard from '../Icon/Menu/IconMenuDashboard';
import IconMinus from '../Icon/IconMinus';
import IconMenuChat from '../Icon/Menu/IconMenuChat';
import IconMenuMailbox from '../Icon/Menu/IconMenuMailbox';
import IconMenuTodo from '../Icon/Menu/IconMenuTodo';
import IconMenuNotes from '../Icon/Menu/IconMenuNotes';
import IconMenuScrumboard from '../Icon/Menu/IconMenuScrumboard';
import IconMenuContacts from '../Icon/Menu/IconMenuContacts';
import IconMenuInvoice from '../Icon/Menu/IconMenuInvoice';
import IconMenuCalendar from '../Icon/Menu/IconMenuCalendar';
import IconMenuComponents from '../Icon/Menu/IconMenuComponents';
import IconMenuElements from '../Icon/Menu/IconMenuElements';
import IconMenuCharts from '../Icon/Menu/IconMenuCharts';
import IconMenuWidgets from '../Icon/Menu/IconMenuWidgets';
import IconMenuFontIcons from '../Icon/Menu/IconMenuFontIcons';
import IconMenuDragAndDrop from '../Icon/Menu/IconMenuDragAndDrop';
import IconMenuTables from '../Icon/Menu/IconMenuTables';
import IconMenuDatatables from '../Icon/Menu/IconMenuDatatables';
import IconMenuForms from '../Icon/Menu/IconMenuForms';
import IconMenuUsers from '../Icon/Menu/IconMenuUsers';
import IconMenuPages from '../Icon/Menu/IconMenuPages';
import IconMenuAuthentication from '../Icon/Menu/IconMenuAuthentication';
import IconMenuDocumentation from '../Icon/Menu/IconMenuDocumentation';

const Sidebar = () => {
  const [currentMenu, setCurrentMenu] = useState('');
  const { currentUser } = useSelector((state) => state.user);
  const [errorSubMenu, setErrorSubMenu] = useState(false);
  const themeConfig = useSelector((state) => state.themeConfig);
  const semidark = useSelector((state) => state.themeConfig.semidark);
  const location = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const toggleMenu = (value) => {
    setCurrentMenu((oldValue) => {
      return oldValue === value ? '' : value;
    });
  };

  useEffect(() => {
    const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
    if (selector) {
      selector.classList.add('active');
      const ul = selector.closest('ul.sub-menu');
      if (ul) {
        let ele = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
        if (ele.length) {
          ele = ele[0];
          setTimeout(() => {
            ele.click();
          });
        }
      }
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1024 && themeConfig.sidebar) {
      dispatch(toggleSidebar());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div className={semidark ? 'dark' : ''}>
      <nav className={`sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`}>
        <div className="bg-white dark:bg-black h-full">
          <div className="flex justify-between items-center px-4 py-3">
            <NavLink to="/" className="main-logo flex items-center shrink-0">
              <img className="w-8 ml-[5px] flex-none" src="/favicon.ico" alt="logo" />
              <span className="text-2xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle lg:inline dark:text-white-light">{t('AUSTCMS')}</span>
            </NavLink>

            <button
              type="button"
              className="collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180"
              onClick={() => dispatch(toggleSidebar())}
            >
              <IconCaretsDown className="m-auto rotate-90" />
            </button>
          </div>
          <PerfectScrollbar className="h-[calc(100vh-80px)] relative">
            <ul className="relative font-semibold space-y-0.5 p-4 py-0">
              <li className="menu nav-item">
                <button type="button" className={`${currentMenu === 'dashboard' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('dashboard')}>
                  <div className="flex items-center">
                    <IconMenuDashboard className="group-hover:!text-primary shrink-0" />
                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('dashboard')}</span>
                  </div>

                  <div className={currentMenu !== 'dashboard' ? 'rtl:rotate-90 -rotate-90' : ''}>
                    <IconCaretDown />
                  </div>
                </button>

                <AnimateHeight duration={300} height={currentMenu === 'dashboard' ? 'auto' : 0}>
                  <ul className="sub-menu text-gray-500">
                    <li>
                      <NavLink to="/">{t('AUSTCMS Admin')}</NavLink>
                    </li>
                    <li>
                      <NavLink to="https://aust-cms.vercel.app" target="_blank">
                        {t('AUSTCMS Member')}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="https://iums.aust.edu" target="_blank">
                        {t('AUST IUMS')}
                      </NavLink>
                    </li>
                  </ul>
                </AnimateHeight>
              </li>
              {/** Manage Club */}

              <h2 className="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
                <IconMinus className="w-4 h-5 flex-none hidden" />
                <span>{t('manage clubs')}</span>
              </h2>

              <li className="nav-item">
                <ul>
                  <li className="nav-item">
                    <NavLink to="/add/club" className="group">
                      <div className="flex items-center">
                        <IconMenuChat className="group-hover:!text-primary shrink-0" />
                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Add New Club')}</span>
                      </div>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/clubs/" className="group">
                      <div className="flex items-center">
                        <IconMenuMailbox className="group-hover:!text-primary shrink-0" />
                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Manage Club')}</span>
                      </div>
                    </NavLink>
                  </li>
                </ul>
              </li>
              {/*Admin Settings*/}
              <h2 className="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
                <IconMinus className="w-4 h-5 flex-none hidden" />
                <span>{t('admin settings')}</span>
              </h2>

              <li className="menu nav-item">
                <button type="button" className={`${currentMenu === 'users' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('users')}>
                  <div className="flex items-center">
                    <IconMenuUsers className="group-hover:!text-primary shrink-0" />
                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('users')}</span>
                  </div>

                  <div className={currentMenu !== 'users' ? 'rtl:rotate-90 -rotate-90' : ''}>
                    <IconCaretDown />
                  </div>
                </button>

                <AnimateHeight duration={300} height={currentMenu === 'users' ? 'auto' : 0}>
                  <ul className="sub-menu text-gray-500">
                    <li>
                      <NavLink to={`/profile/${currentUser?.studentId}`}>{t('profile')}</NavLink>
                    </li>
                    <li>
                      <NavLink to="/user/settings">{t('account_settings')}</NavLink>
                    </li>
                  </ul>
                </AnimateHeight>
              </li>

              <li className="menu nav-item">
                <button type="button" className={`${currentMenu === 'auth' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('auth')}>
                  <div className="flex items-center">
                    <IconMenuAuthentication className="group-hover:!text-primary shrink-0" />
                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('authentication')}</span>
                  </div>

                  <div className={currentMenu !== 'auth' ? 'rtl:rotate-90 -rotate-90' : ''}>
                    <IconCaretDown />
                  </div>
                </button>

                <AnimateHeight duration={300} height={currentMenu === 'auth' ? 'auto' : 0}>
                  <ul className="sub-menu text-gray-500">
                    <li>
                      <NavLink to="/user/change-password" target="">
                        {t('Change Password')}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="" target="">
                        {t('2FA')}
                      </NavLink>
                    </li>
                  </ul>
                </AnimateHeight>
              </li>

              {/** Panel Members */}
              <h2 className="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
                <IconMinus className="w-4 h-5 flex-none hidden" />
                <span>{t('Panel Members')}</span>
              </h2>
              <li className="nav-item">
                <NavLink to="/club/edit" className="group">
                  <div className="flex items-center">
                    <IconMenuUsers className="group-hover:!text-primary shrink-0" />
                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Batch Ambassadors')}</span>
                  </div>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/club/edit" className="group">
                  <div className="flex items-center">
                    <IconMenuUsers className="group-hover:!text-primary shrink-0" />
                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Sub Executives')}</span>
                  </div>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/club/edit" className="group">
                  <div className="flex items-center">
                    <IconMenuUsers className="group-hover:!text-primary shrink-0" />
                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Executives')}</span>
                  </div>
                </NavLink>
              </li>
              

              <h2 className="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
                <IconMinus className="w-4 h-5 flex-none hidden" />
                <span>{t('events')}</span>
              </h2>

              <li className="menu nav-item">
                <NavLink to="/event/add" className="group">
                  <div className="flex items-center">
                    <IconMenuCharts className="group-hover:!text-primary shrink-0" />
                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Add New Event')}</span>
                  </div>
                </NavLink>
              </li>

              <li className="menu nav-item">
                <NavLink to="/event" className="group">
                  <div className="flex items-center">
                    <IconMenuWidgets className="group-hover:!text-primary shrink-0" />
                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Events')}</span>
                  </div>
                </NavLink>
              </li>

              <h2 className="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
                <IconMinus className="w-4 h-5 flex-none hidden" />
                <span>{t('Transactions')}</span>
              </h2>
              <li className="menu nav-item">
                <NavLink to="/notification/" className="group">
                  <div className="flex items-center">
                    <IconMenuTables className="group-hover:!text-primary shrink-0" />
                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Transactions History')}</span>
                  </div>
                </NavLink>
              </li>

              <h2 className="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
                <IconMinus className="w-4 h-5 flex-none hidden" />
                <span>{t('notifications')}</span>
              </h2>

              <li className="menu nav-item">
                <NavLink to="/notification/add" className="group">
                  <div className="flex items-center">
                    <IconMenuTables className="group-hover:!text-primary shrink-0" />
                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Add New')}</span>
                  </div>
                </NavLink>
              </li>
              <li className="menu nav-item">
                <NavLink to="/notification/" className="group">
                  <div className="flex items-center">
                    <IconMenuTables className="group-hover:!text-primary shrink-0" />
                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Notifications')}</span>
                  </div>
                </NavLink>
              </li>

              <h2 className="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
                <IconMinus className="w-4 h-5 flex-none hidden" />
                <span>{t('mailbox')}</span>
              </h2>
              <li className="menu nav-item">
                <NavLink to="/mailbox/send-mail" className="group">
                  <div className="flex items-center">
                    <IconMenuTables className="group-hover:!text-primary shrink-0" />
                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Send Mail')}</span>
                  </div>
                </NavLink>
              </li>

             

              <h2 className="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
                <IconMinus className="w-4 h-5 flex-none hidden" />
                <span>{t('supports')}</span>
              </h2>

              <li className="menu nav-item">
                <NavLink to="/faq" className="nav-link group">
                  <div className="flex items-center">
                    <IconMenuDocumentation className="group-hover:!text-primary shrink-0" />
                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Knowledge Base')}</span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </PerfectScrollbar>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
