import React, { useRef } from "react";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/Registration.css";
import FormHelper from "../../helper/FormHelper";
import { RegistrationReq } from "../../APIRequest/api";
import { useNavigate, Link } from "react-router-dom"; 

const Registration = () => {
  const refs = {
    firstName: useRef(),
    lastName: useRef(),
    email: useRef(),
    mobile: useRef(),
    password: useRef(),
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      firstName: refs.firstName.current.value,
      lastName: refs.lastName.current.value,
      email: refs.email.current.value,
      mobile: refs.mobile.current.value,
      password: refs.password.current.value,
      photo: "",
    };

    if (FormHelper.isEmpty(data.firstName)) return FormHelper.ErrorToast("First Name is required");
    if (FormHelper.isEmpty(data.lastName)) return FormHelper.ErrorToast("Last Name is required");
    if (!FormHelper.isEmail(data.email)) return FormHelper.ErrorToast("Invalid Email");
    if (!FormHelper.isMobile(data.mobile)) return FormHelper.ErrorToast("Invalid Mobile");
    if (FormHelper.isEmpty(data.password)) return FormHelper.ErrorToast("Password is required");
    if (data.password.length < 6) return FormHelper.ErrorToast("Password must be at least 6 characters");

    const success = await RegistrationReq(
      data.email,
      data.firstName,
      data.lastName,
      data.mobile,
      data.password,
      data.photo
    );

    if (success) {
  
      e.target.reset();

      navigate("/login");
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-card">
        <h3 className="registration-title">Create Your Account</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text"><FaUser /></span>
            <input type="text" placeholder="First Name" ref={refs.firstName} className="form-control" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text"><FaUser /></span>
            <input type="text" placeholder="Last Name" ref={refs.lastName} className="form-control" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text"><FaEnvelope /></span>
            <input type="email" placeholder="Email" ref={refs.email} className="form-control" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text"><FaPhone /></span>
            <input type="tel" placeholder="Mobile Number" ref={refs.mobile} className="form-control" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text"><FaLock /></span>
            <input type="password" placeholder="Password" ref={refs.password} className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary btn-next w-100">Register</button>
          <p className="already-account mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-primary">Sign In</Link> {/* ✅ React Router Link */}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
