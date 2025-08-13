import React, { useRef } from "react";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/Registration.css";

const Registration = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const mobileRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      mobile: mobileRef.current.value,
      password: passwordRef.current.value,
    };

    console.log("Registration Data:", data);
    alert(`Welcome ${data.firstName} ${data.lastName}!`);
  };

  return (
    <div className="registration-container">
      <div className="registration-card">
        <h3 className="registration-title">Create Your Account</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FaUser />
            </span>
            <input
              type="text"
              placeholder="First Name"
              ref={firstNameRef}
              className="form-control"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">
              <FaUser />
            </span>
            <input
              type="text"
              placeholder="Last Name"
              ref={lastNameRef}
              className="form-control"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">
              <FaEnvelope />
            </span>
            <input
              type="email"
              placeholder="Email"
              ref={emailRef}
              className="form-control"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">
              <FaPhone />
            </span>
            <input
              type="tel"
              placeholder="Mobile Number"
              ref={mobileRef}
              className="form-control"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">
              <FaLock />
            </span>
            <input
              type="password"
              placeholder="Password"
              ref={passwordRef}
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-next">
            Next
          </button>

          <p className="already-account">
            Already have an account?{" "}
            <a href="/login" className="text-primary">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
