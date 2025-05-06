import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

// <Footer />
const Layout = () => {
    return (
        <>
            <Header />
            {/* <div className='container'> */}
            <Outlet></Outlet>
            {/* </div> */}

        </>
    );
};

export default Layout;
