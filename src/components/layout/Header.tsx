import avatar from "../../assets/images/avatar/2.jpg"
import useAuth from "../../hooks/useAuth";

export default function Header() {
    const { signOut } = useAuth();
    return (
        <div className="page-main-header row">
            <div id="sidebar-toggle" className="toggle-sidebar col-auto">
                <i className="fa fa-chevron-left"/>
            </div>
            <div className="nav-right col p-0">
                <ul className="header-menu">
                    <li>
                        <div className="d-md-none mobile-search">
                            <i className="fa fa-search"/>
                        </div>
                        <div className="form-group search-form">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search here..."
                            />
                        </div>
                    </li>
                    <li className="profile-avatar onhover-dropdown">
                        <div>
                            <img
                                src={avatar}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                        <ul className="profile-dropdown onhover-show-div">
                            <li className="hover:cursor-pointer">
                                <a onClick={() => {
                                    signOut()
                                }}>
                                    <span>Logout</span>
                                    <i data-feather="log-in"/>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}
