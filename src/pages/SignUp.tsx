import React from "react";
import Divider from "../components/Divider";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import {useAuthStore} from "../stores/authStore/authStore";
import {Link} from "react-router-dom";

type Props = {};

const SignUp = (props: Props) => {

    const signUp = useAuthStore(state => state.signUp);
    // const auth = useAuthStore(state => state.auth);
    // const resetErrors = useAuthStore(state => state.resetErrors);

    // useEffect(() => {

    //   auth.errors ? console.log(auth.errors) : console.log('Good');

    //   return () => {
    //     resetErrors();
    //   };
    // }, [auth]);


    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            firstName: { value: string };
            lastName: { value: string };
            cniNumber: { value: string };
            phone: { value: string };
            commercialRegisterNumber: { value: string };
            email: { value: string };
            password: { value: string };
        };

        const userDatas = {
            firstName: target.firstName.value,
            lastName: target.lastName.value,
            cniNumber: target.cniNumber.value,
            phone: target.phone.value,
            commercialRegisterNumber: target.commercialRegisterNumber.value,
            email: target.email.value,
            password: target.password.value
        }

        signUp(userDatas);
    };

    return (
        <div className="card">
            <div className="card-body">
                <div className="title-3 text-start">
                    <h2>Création de compte</h2>
                </div>
                <form>
                    <div className="form-group">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nom"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Prénom"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Numéro de téléphone"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Numéro de registre du commerce"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Numéro de CNI"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Adresse email"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i data-feather="lock"/>
                                </div>
                            </div>
                            <input
                                type="password"
                                id="pwd-input"
                                className="form-control"
                                maxLength={8}
                                placeholder="Password"
                            />
                            <div className="input-group-apend">
                                <div className="input-group-text">
                                    <i id="pwd-icon" className="far fa-eye-slash"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="btn btn-gradient btn-pill color-2 me-sm-3 me-2"
                        >
                            Créer un compte
                        </button>
                        <Link to="/auth/sign-in" className="btn btn-dashed btn-pill color-2">
                            Se connecter
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
