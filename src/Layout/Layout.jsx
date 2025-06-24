import { Helmet } from 'react-helmet'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Header/Navbar'


const Layout = ({ children, title }) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>

            <header>
                <Navbar />
            </header>

            <main>
                {children}
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Layout