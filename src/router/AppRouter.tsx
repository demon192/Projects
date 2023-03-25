import { Route, Routes } from "react-router-dom"
import Banner from "../components/common/Banner"
import { ApiData } from "../components/feature/ApiData"
import { CompanyReview } from "../components/feature/CompanyReview"
import ContactForm from "../components/feature/ContactForm"
import HotelPage from "../components/feature/HotelPage"
import Phonepe from "../components/feature/Phonepe"
import SimplePage from "../components/feature/SimplePage"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Banner src="/assets/jpg/banner.jpeg" />
                    <ContactForm />
                </>
            } />
            <Route path="/company" Component={CompanyReview} />
            <Route path='/phonepe' Component={Phonepe} />
            <Route path='/simplePage' Component={SimplePage} />
            <Route path='/hotelPage' Component={HotelPage} />
            <Route path='/getStarted' Component={ApiData} />
        </Routes>

    )
}

export default AppRouter;