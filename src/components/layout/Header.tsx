import avatar from "../../assets/images/avatar/2.jpg"

export default function Header() {
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
                            <li>
                                <a href="#">
                                    <span>Account </span>
                                    <i data-feather="user"/>
                                </a>
                            </li>
                            <li>
                                <a href="listing.html">
                                    <span>Listing</span>
                                    <i data-feather="file-text"/>
                                </a>
                            </li>
                            <li>
                                <a href="login.html">
                                    <span>Log in</span>
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
