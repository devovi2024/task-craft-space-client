import React, { useRef } from "react";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/Registration.css";
import formHelperInstance from "../../helper/FormHelper";
import { RegistrationReq } from "../../APIRequest/api"; 

const Registration = () => {
  const refs = {
    firstName: useRef(),
    lastName: useRef(),
    email: useRef(),
    mobile: useRef(),
    password: useRef(),
  };

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

    // Simple validations
    if (!data.firstName) return formHelperInstance.ErrorToast("First Name is required");
    if (!data.lastName) return formHelperInstance.ErrorToast("Last Name is required");
    if (!formHelperInstance.isEmail(data.email)) return formHelperInstance.ErrorToast("Invalid Email");
    if (!formHelperInstance.isMobile(data.mobile)) return formHelperInstance.ErrorToast("Invalid Mobile");
    if (!data.password) return formHelperInstance.ErrorToast("Password is required");
    if (data.password.length < 6) return formHelperInstance.ErrorToast("Password must be at least 6 characters");

    // Call API
    const success = await RegistrationReq(
      data.email,
      data.firstName,
      data.lastName,
      data.mobile,
      data.password,
      data.photo
    );

    if (success) {
      formHelperInstance.SuccessToast(`Welcome ${data.firstName} ${data.lastName}!`);
      console.log("Registered User:", data);
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
          <button type="submit" className="btn btn-primary btn-next">Next</button>
          <p className="already-account">
            Already have an account? <a href="/login" className="text-primary">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
