import stats from "../assets/images/dashabord.png"
import PageHeader from "../components/PageHeader";
import {Link} from "react-router-dom";

export default function Dashboard() {
    return (
        <>
            <PageHeader title={"Tableau de board"} link={"/admin/dashboard"}/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-4 large-12">
                        <div className="row">
                            <div className="large-6 col-lg-12 col-md-6">
                                <div className="card all-properties">
                                    <div className="card-body">
                                        <div className="media">
                                            <img
                                                src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/1.svg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <div className="media-body">
                                                <h4 className="mb-0">500</h4>
                                                <h6 className="light-font">Terrains</h6>
                                            </div>
                                            <Link to={"/admin/lands"} className="arrow-animated">
                                                Voir tous les terrains
                                                <i data-feather="chevron-right"/>
                                            </Link>
                                        </div>
                                        <ul className="light-box">
                                            <li>
                                                <div>
                                                    <h5>450</h5>
                                                    <span className="light-font">Vérifiés</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <h5>40</h5>
                                                    <span className="light-font">En attente</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <h5>10</h5>
                                                    <span className="light-font">Rejetés</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="large-6 col-lg-12 col-md-6">
                                <div className="card invoice-card">
                                    <div className="card-header pb-0">
                                        <div>
                                            <h5>Mois dernier</h5>
                                        </div>
                                    </div>
                                    <div className="card-body calculations">
                                        <ul>
                                            <li>
                                                <h5 className="font-success">XAF 1 457 215</h5>
                                                <h6 className="light-font mb-0">Terrains vendus</h6>
                                            </li>
                                            <li>
                                                <h5 className="font-danger">180</h5>
                                                <h6 className="light-font mb-0">Terrains enregistrés</h6>
                                            </li>
                                        </ul>
                                        <div className="d-flex">
                                            <a
                                                href="agent-invoice.html"
                                                className="label label-light color-4"
                                            >
                                                <i className="fas fa-hand-holding-usd me-1"/>
                                                Transactions
                                            </a>
                                            <a href="agent-invoice.html" className="arrow-animated">
                                                Voir tout
                                                <i data-feather="chevron-right"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 large-12">
                        <img src={stats} alt="Statitiques" style={{width: "100%"}}/>
                    </div>
                </div>
            </div>
        </>
    );
}
