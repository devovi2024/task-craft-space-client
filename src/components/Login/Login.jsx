import React, { useRef } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/Registration.css";
import FormHelper from "../../helper/FormHelper";
import { LoginReq } from "../../APIRequest/api";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const refs = {
    email: useRef(),
    password: useRef(),
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: refs.email.current.value,
      password: refs.password.current.value,
    };

    if (!FormHelper.isEmail(data.email)) return FormHelper.ErrorToast("Invalid Email");
    if (FormHelper.isEmpty(data.password)) return FormHelper.ErrorToast("Password is required");

    const success = await LoginReq(data.email, data.password);

    if (success) {
      e.target.reset();
      navigate("/dashboard");
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-card">
        <h3 className="registration-title">Sign In</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text"><FaEnvelope /></span>
            <input type="email" placeholder="Email" ref={refs.email} className="form-control" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text"><FaLock /></span>
            <input type="password" placeholder="Password" ref={refs.password} className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary btn-next w-100">Login</button>
          <p className="already-account mt-2">
            Don't have an account? <Link to="/register" className="text-primary">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
