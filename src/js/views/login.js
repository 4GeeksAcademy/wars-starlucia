import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        let logged = await actions.login(email, password)
        if (logged == true) {
            navigate("/demo")//permite redireccionar
        }
    }

    return (
        <div className="container d-flex justify-content-center border border-white w-50 p-3 my-5" >
            <form onSubmit={handleSubmit}>
                <div className="row mb-3 my-4">
                    <label for="inputEmail3" className="col-sm-2 col-form-label text-white">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputPassword3" className="col-sm-2 col-form-label text-white">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control mx-1" id="inputPassword3" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary my-3">Login</button>
                </div>
            </form>
        </div>
    );
};
