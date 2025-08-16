import axios from "axios";
import FormHelper from "../helper/FormHelper";
import toast from "react-hot-toast";
import { ShowLoader, HideLoader } from "../redux/state-slice/settings.slice";
import { store } from "../redux/store/store";
import sessionHelper from "../helper/SessionHelper";

const BaseURL = "http://localhost:5000/v1";

// ------------------ Registration ------------------
export async function RegistrationReq(email, firstName, lastName, mobile, password, photo = "") {
    store.dispatch(ShowLoader());
    const URL = `${BaseURL}/registration`;
    const PostBody = { email, firstName, lastName, mobile, password, photo };
    const loadingToastId = toast.loading("Processing your registration...");

    try {
        const res = await axios.post(URL, PostBody);
        toast.dismiss(loadingToastId);
        store.dispatch(HideLoader());

        if (res.status === 200) {
            const data = res.data;

            if (data.status === "error") {
                if (data.keyPattern?.email) FormHelper.ErrorToast("Email already exists!");
                else if (data.keyPattern?.mobile) FormHelper.ErrorToast("Mobile number already exists!");
                else FormHelper.ErrorToast(data.data || "Something went wrong");
                return false;
            }

            if (data.status === "success") {
                FormHelper.SuccessToast("Registration successful");
                return true;
            }

            FormHelper.ErrorToast("Unexpected server response");
            return false;
        } else {
            FormHelper.ErrorToast("Server returned status " + res.status);
            return false;
        }
    } catch (err) {
        toast.dismiss(loadingToastId);
        store.dispatch(HideLoader());
        FormHelper.ErrorToast(err.response?.data?.data || "Server error. Please try again.");
        console.error("Registration Error:", err.response || err);
        return false;
    }
}

// ------------------ Login ------------------
export async function LoginReq(email, password) {
    store.dispatch(ShowLoader());
    const URL = `${BaseURL}/login`;
    const PostBody = { email, password };
    const loadingToastId = toast.loading("Checking credentials...");

    try {
        const res = await axios.post(URL, PostBody);
        toast.dismiss(loadingToastId);
        store.dispatch(HideLoader());

        if (res.status === 200) {
            const data = res.data;

            if (data.status === "success") {
                sessionHelper.setToken(data.token);      
                sessionHelper.setUserDetails(data.data); 
                FormHelper.SuccessToast("Login successful");
                return true;
            } else {
                FormHelper.ErrorToast(data.data || "Invalid login credentials");
                return false;
            }
        } else {
            FormHelper.ErrorToast("Server returned status " + res.status);
            return false;
        }
    } catch (err) {
        toast.dismiss(loadingToastId);
        store.dispatch(HideLoader());
        FormHelper.ErrorToast(err.response?.data?.data || "Login failed. Please try again.");
        console.error("Login Error:", err.response || err);
        return false;
    }
}
