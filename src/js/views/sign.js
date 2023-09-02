import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Sign_up = () => {
    const { store, actions } = useContext(Context);


    return (
        <div className="container d-flex justify-content-center border border-white w-50 p-3 my-5" >
            <form>
                <div className="row mb-3 my-4">
                    <label for="inputEmail3" className="col-sm-2 col-form-label text-white">Username</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control mx-3" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3 my-4">
                    <label for="inputEmail3" className="col-sm-2 col-form-label text-white">Name</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control mx-3" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3 my-4">
                    <label for="inputEmail3" className="col-sm-2 col-form-label text-white">LastName</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control mx-3" id="inputEmail3" />
                    </div>
                </div>

                <div className="row mb-3 my-4">
                    <label for="inputEmail3" className="col-sm-2 col-form-label text-white">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control mx-3" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputPassword3" className="col-sm-2 col-form-label text-white">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control mx-3" id="inputPassword3" />
                    </div>
                    <button type="submit" className="btn btn-primary my-3" style={{ width: "200px" }}>Sign in</button>
                </div>
            </form>
        </div>
    );
};
