import {Link} from "react-router-dom";

export default function PageHeader({title, link}: {title: string, link: string}) {
    return (
        <div className="container-fluid">
            <div className="page-header">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="page-header-left">
                            <h3>
                                {title}
                                <small>Bienvenu dans la panel d'administration</small>
                            </h3>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb pull-right">
                            <li className="breadcrumb-item">
                                <Link to={link}>
                                    <i className="fa fa-home"/>
                                </Link>
                            </li>
                            <li className="breadcrumb-item active">{title}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}
