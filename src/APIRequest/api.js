import axios from "axios";
import FormHelper from "../helper/FormHelper";
import toast from "react-hot-toast";

const BaseURL = "http://localhost:5000/v1";

export async function RegistrationReq(email, firstName, lastName, mobile, password, photo = "") {
    const URL = `${BaseURL}/registration`;
    const PostBody = { email, firstName, lastName, mobile, password, photo };
    const loadingToastId = toast.loading("Processing your registration...");

    try {
        const res = await axios.post(URL, PostBody);
        toast.dismiss(loadingToastId);

        if (res.status === 200) {
            const data = res.data;

            if (data.status === "error") {
                if (data.keyPatterns && data.keyPatterns.email) {
                    FormHelper.ErrorToast("Email already exists!");
                } else if (data.keyPatterns && data.keyPatterns.mobile) {
                    FormHelper.ErrorToast("Mobile number already exists!");
                } else {
                    FormHelper.ErrorToast(data.data || "Something went wrong");
                }
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

        if (err.response && err.response.data && err.response.data.data) {
            FormHelper.ErrorToast(err.response.data.data);
        } else {
            FormHelper.ErrorToast("Server error. Please try again.");
        }
        console.error("Registration Error:", err.response || err);
        return false;
    }
}
