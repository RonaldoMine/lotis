import {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import Button from "../components/Button";
import Divider from "../components/Divider";
import TextInput from "../components/TextInput";
import {useAuthStore} from "../stores/authStore/authStore";
import svg2 from "../assets/images/svg/2.jpg";

// type Props = {};

export default function SignIn() {
    //state
    const [signIn, setSignIn] = useState({email: "", password: ""});

    const login = useAuthStore((state) => state.login);
    const auth = useAuthStore((state) => state.auth);
    const navigate = useNavigate();
    // const resetErrors = useAuthStore((state) => state.resetErrors);

    // useEffect(() => {
    //   auth.errors != null ? console.log('Error '+auth.errors) : console.log(auth.currentUser);
    //   return () => {
    //     resetErrors();
    //   };
    // }, [auth]);
    useEffect(() => {
        auth.currentUser !== null ? console.log('d') : console.log('d')
    }, [auth])

    //function
    const handleSubmit = () => {
        login(signIn.email, signIn.password);
    };
    return (
        <div className="card">
            <div className="card-body">
                <div className="title-3 text-start">
                    <h2>Connexion</h2>
                </div>
                <form autoComplete="off">
                    <div className="form-group">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                autoComplete="off"
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
                    <div>
                        <button
                            type="button"
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
