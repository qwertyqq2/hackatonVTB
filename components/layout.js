import Footer from "./footer"
import Navbar from "./navbar"
import Right from "./right";

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Right />
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;