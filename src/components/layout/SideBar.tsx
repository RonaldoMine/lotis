import {Link} from "react-router-dom";

export default function SideBar() {
    return (
        <div className="page-sidebar">
            <div className="logo-wrap">
                <a href="#">
                    <img
                        src="../assets/images/logo/4.png"
                        className="img-fluid for-light"
                        alt=""
                    />
                    <img
                        src="../assets/images/logo/9.png"
                        className="img-fluid for-dark"
                        alt=""
                    />
                </a>
                <div className="back-btn d-lg-none d-inline-block">
                    <i data-feather="chevrons-left"/>
                </div>
            </div>
            <div className="main-sidebar">
                <div className="user-profile">
                    <div className="media">
                        <div className="change-pic">
                            <img
                                src="../assets/images/avatar/3.jpg"
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                        <div className="media-body">
                            <a href="user-profile.html">
                                <h6>Ronaldo</h6>
                            </a>
                            <span className="font-roboto">ronaldo@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div id="mainsidebar">
                    <ul className="sidebar-menu custom-scrollbar">
                        <li className="sidebar-item">
                            <Link to="/admin/dashboard" className="sidebar-link only-link">
                                <i data-feather="airplay"/>
                                <span>Tableau de bord</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <a href="#" className="sidebar-link">
                                <i data-feather="grid"/>
                                <span>Mes terrains</span>
                            </a>
                            <ul className="nav-submenu menu-content">
                                <li>
                                    <Link to="/admin/lands/add">
                                        <i data-feather="chevrons-right"/>
                                        Ajouter un terrain
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/admin/lands">
                                        <i data-feather="chevrons-right"/>
                                        Listes des terrains
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <Link to="/admin/users">
                                <span>Utilisateurs</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
