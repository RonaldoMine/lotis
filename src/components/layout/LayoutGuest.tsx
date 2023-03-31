import svg2 from "../../assets/images/svg/2.jpg"
import {Outlet} from "react-router-dom";

export default function LayoutGuest() {
    return (
        <div className="page-wrapper">
            <div className="authentication-box">
                <div className="container-fluid">
                    <div className="row log-in">
                        <div className="col-xxl-3 col-xl-4 col-lg-5 col-md-6 col-sm-8 form-login">
                            <Outlet />
                        </div>
                        <div className="col-xxl-7 col-xl-7 offset-xxl-1 col-lg-6 auth-img">
                            <img src={svg2} className="bg-img" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
