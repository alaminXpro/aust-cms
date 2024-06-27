import Hero19 from "../components/sections/Hero19"
import Layout from "../components/layout/Layout"
import Hs1 from "../components/sections/hs1"
import Hs2 from "../components/sections/hs2"

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark light-hero-header">
                <Hero19 />
                
                <hr className="divider" />
                <Hs1/>
                <hr className="divider" />
                <Hs2/>
                <hr className="divider" />

                
            </Layout>
        </>
    )
}