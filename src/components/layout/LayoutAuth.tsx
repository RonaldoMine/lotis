import sold from "../../assets/images/svg/icon/sold.png"
import {Outlet} from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";

export default function LayoutAuth() {
    return (
        <div className="page-wrapper">
            <Header/>
            <div className="page-body-wrapper">
                <SideBar/>
                <div className="page-body">
                    <Outlet/>
                </div>
                <Footer/>
            </div>
        </div>
    );
}
