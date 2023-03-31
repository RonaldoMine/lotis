import {FormEvent, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";
import {BASE_URL} from "../utils/axios/axios";
import useAuth from "../hooks/useAuth";

export default function SignIn() {
    //state
    const [userInfos, setUserInfos] = useState({email: "", password: ""});
    const {signIn} = useAuth();
    const navigate = useNavigate();

    //function
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const user = await toast.promise(
                axios.post(BASE_URL + "auth/login", {
                    email: userInfos.email,
                    password: userInfos.password,
                }),
                {
                    pending: "Loading...",
                    success: "Successfully authenticated👌",
                    error: "An error occured 🤯",
                },
                {
                    pauseOnFocusLoss: false,
                }
            );
            const {
                first_name,
                last_name,
                role_id,
                token,
                cni_number,
                commercial_register_number,
            } = user.data?.user;
            signIn({
                email: userInfos.email,
                token,
                firstName: first_name,
                lastName: last_name,
                role: role_id,
                cniNumber: cni_number,
                commercialRegisterNumber: commercial_register_number,
            });

            navigate("/admin/dashboard", {
                replace: true,
            });
        } catch (error) {
            console.log("Error", error);
        }
    };
    return (
        <div className="card">
            <div className="card-body">
                <div className="title-3 text-start">
                    <h2>Connexion</h2>
                </div>
                <form autoComplete="off" method={"post"} onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                autoComplete="off"
                                required
                                value={userInfos.email}
                                onChange={(e) =>
                                    setUserInfos({...userInfos, email: e.target.value})
                                }
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <input
                                type="password"
                                id="pwd-input"
                                className="form-control"
                                placeholder="Password"
                                autoComplete="off"
                                maxLength={8}
                                required
                                value={userInfos.password}
                                onChange={(e) =>
                                    setUserInfos({...userInfos, password: e.target.value})
                                }
                            />
                            <div className="input-group-apend">
                                <div className="input-group-text">
                                    <i id="pwd-icon" className="far fa-eye-slash"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex">
                        <label className="d-block mb-0" htmlFor="chk-ani">
                            <input
                                className="checkbox_animated color-2"
                                id="chk-ani"
                                type="checkbox"
                            />{" "}
                            Se souvenir de moi
                        </label>
                        <Link
                            to="/"
                            className="font-rubik text-color-2"
                        >
                            Mot de passe oublié ?
                        </Link>
                    </div>
                    <div className='flex'>
                        <button
                            type="submit"
                            className="btn btn-gradient btn-pill color-2 me-sm-3 me-2"
                        >
                            Se connecter
                        </button>
                        <Link
                            to="/auth/sign-up"
                            className="btn btn-dashed btn-pill color-2"
                        >
                            Créer un compte
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
