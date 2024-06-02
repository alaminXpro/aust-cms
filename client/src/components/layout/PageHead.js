import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <>
                    {headTitle ? headTitle : "AUSTCMS - AUST CLUB MANAGEMENT SYSTEM"}
                </>
            </Head>
        </>
    )
}

export default PageHead