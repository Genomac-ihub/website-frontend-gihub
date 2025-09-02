import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import useUserDetail from "../tanstack/useUserDetail"
import useHandleModal from "../zustard/useHandleModal"
import ModalContainer from "../components/ModalContainer"
import ScrollToTop from "../components/ScrollToTop"
const Layout = () => {
    const { data: userDetail } = useUserDetail()
    const { clickedModal } = useHandleModal()
    return (
        <div className="flex flex-col min-h-screen  mx-auto" >
            <ScrollToTop />
            <ModalContainer />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout