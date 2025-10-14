import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import useUserDetail from "../tanstack/useUserDetail"
import useHandleModal from "../zustard/useHandleModal"
import ModalContainer from "../components/ModalContainer"
import ScrollToTop from "../components/ScrollToTop"
import { useLocation } from "react-router-dom"
const Layout = () => {
    const location = useLocation()
    const { data: userDetail } = useUserDetail()
    const { clickedModal } = useHandleModal()
    return (
        <div className="flex flex-col min-h-screen  mx-auto" >
            <ScrollToTop />
            <ModalContainer />
            {!userDetail && location.pathname === "/earn" ? "" : <Navbar />}
            <Outlet />
            {!userDetail && location.pathname === "/earn" ? "" : <Footer />}    
        </div>
    )
}

export default Layout