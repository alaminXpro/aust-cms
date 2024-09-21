import { useState } from 'react';
import AnimateHeight from 'react-animate-height';

const Faq = ({
    showTitle = true,
    type = 'faq',
    queries = [
        {
            id: 1,
            question: 'How do I register my club on AUSTCMS?',
            answer: 'To register your club, log in to AUSTCMS and navigate to the "Club Registration" section. Fill out the required information about your club, including its name, description, and contact details. Once submitted, your registration will be reviewed by the system administrators.',
        },
        {
            id: 2,
            question: 'Can students join multiple clubs through AUSTCMS?',
            answer: 'Yes, students can join multiple clubs through AUSTCMS. After logging in, students can browse the list of registered clubs and request to join any clubs they\'re interested in. There\'s no limit to the number of clubs a student can join.',
        },
        {
            id: 3,
            question: 'How does AUSTCMS protect our club\'s data?',
            answer: 'AUSTCMS takes data protection seriously. We use industry-standard encryption for all data transmissions and storage. Access to club data is restricted to authorized club members and administrators. Regular backups are performed to prevent data loss.',
        },
        {
            id: 4,
            question: 'What kind of support is available for club leaders using AUSTCMS?',
            answer: 'AUSTCMS offers comprehensive support for club leaders. This includes video tutorials, a detailed user guide, and a dedicated support team reachable via email. We also conduct periodic training sessions for new features and best practices in club management.',
        },
        {
            id: 5,
            question: 'Are there any fees associated with using AUSTCMS?',
            answer: 'AUSTCMS is provided free of charge to all recognized AUST clubs and students. The system is funded and maintained by the university to promote student engagement and simplify club management.',
        },
        {
            id: 6,
            question: 'Can club events be promoted to non-members through AUSTCMS?',
            answer: 'Yes, AUSTCMS allows clubs to promote their events to the entire AUST community. While detailed event information is available to club members, a public events calendar is accessible to all students, allowing clubs to reach potential new members.',
        },
    ],
}) => {
    const [active, setActive] = useState(0);
    return (
        <section className="py-14 lg:py-[100px]">
            <div className="container">
                <div className="heading text-center">
                    <h6 className={`${showTitle ? '' : 'hidden'} ${type.toLowerCase() === 'modern-saas' ? '!text-secondary' : ''}`}>FAQs</h6>
                    <h4>Frequently Asked <span className={type.toLowerCase() === 'restaurent' ? '!text-secondary' : ''}>Questions</span></h4>
                    <p className="mt-5 text-lg font-bold">Have questions? We’re help you.</p>
                </div>
                <div className="mx-auto lg:w-[730px]">
                    {queries.map((faq, i) => {
                        return (
                            <div key={faq.id} className="mt-6 border-0 border-b-2 border-gray/20 bg-transparent">
                                <button
                                    type="button"
                                    className="relative !flex w-full items-center justify-between gap-2 py-2.5 text-lg font-bold text-black ltr:text-left rtl:text-right dark:text-white"
                                    onClick={() => setActive(active === i ? null : i)}
                                >
                                    <div>{faq.question}</div>
                                    <div
                                        className={`grid h-6 w-6 flex-shrink-0 place-content-center rounded-full border-2 border-gray text-gray transition ${
                                            active === i ? '!border-black !text-black dark:!border-white dark:!text-white' : ''
                                        }`}
                                    >
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                className={active === i ? 'hidden' : ''}
                                                d="M6.09961 0.500977C6.65189 0.500977 7.09961 0.948692 7.09961 1.50098L7.09961 10.501C7.09961 11.0533 6.65189 11.501 6.09961 11.501H5.89961C5.34732 11.501 4.89961 11.0533 4.89961 10.501L4.89961 1.50098C4.89961 0.948692 5.34732 0.500977 5.89961 0.500977H6.09961Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M0.5 5.90039C0.5 5.34811 0.947715 4.90039 1.5 4.90039H10.5C11.0523 4.90039 11.5 5.34811 11.5 5.90039V6.10039C11.5 6.65268 11.0523 7.10039 10.5 7.10039H1.5C0.947715 7.10039 0.5 6.65268 0.5 6.10039V5.90039Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>
                                </button>
                                <AnimateHeight duration={600} height={active === i ? 'auto' : 0}>
                                    <div className="lg:w-4/5">
                                        <p className="px-0 pb-5 pt-0 text-sm font-bold leading-[18px] text-gray">{faq.answer}</p>
                                    </div>
                                </AnimateHeight>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Faq;
