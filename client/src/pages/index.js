import Hero19 from "@/components/sections/Hero19"
import Layout from "../components/layout/Layout"

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark light-hero-header">
                <Hero19 />
                
            </Layout>
        </>
    )
}