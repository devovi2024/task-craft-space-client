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
  const loadingToastId = toast.loading("Processing registration...");

  try {
    const res = await axios.post(URL, { email, firstName, lastName, mobile, password, photo });
    store.dispatch(HideLoader());
    toast.dismiss(loadingToastId);

    if (res.data.status === "success") {
      FormHelper.SuccessToast("Registration successful");
      return true;
    } else {
      FormHelper.ErrorToast(res.data.data || "Registration failed");
      return false;
    }
  } catch (err) {
    store.dispatch(HideLoader());
    toast.dismiss(loadingToastId);
    FormHelper.ErrorToast(err.response?.data?.data || "Server error");
    return false;
  }
}

// ------------------ Login ------------------
export async function LoginReq(email, password) {
  store.dispatch(ShowLoader());
  const URL = `${BaseURL}/login`;
  const loadingToastId = toast.loading("Checking credentials...");

  try {
    const res = await axios.post(URL, { email, password });
    store.dispatch(HideLoader());
    toast.dismiss(loadingToastId);

    if (res.data.status === "success") {
      const token = res.data.data.token;
      const user = res.data.data.user;
      sessionHelper.setToken(token);
      sessionHelper.setUserDetails(user);
      FormHelper.SuccessToast("Login successful");
      return true;
    } else {
      FormHelper.ErrorToast(res.data.data || "Invalid credentials");
      return false;
    }
  } catch (err) {
    store.dispatch(HideLoader());
    toast.dismiss(loadingToastId);
    FormHelper.ErrorToast(err.response?.data?.data || "Server error");
    return false;
  }
}

// ------------------ Create Task ------------------

export async function NewTaskReq(title, description) {
  const token = sessionHelper.getToken();
  if (!token) {
    FormHelper.ErrorToast("You are not logged in");
    return false;
  }

  store.dispatch(ShowLoader());
  const loadingToastId = toast.loading("Creating task...");

  try {
    const res = await axios.post(
      `${BaseURL}/create-task`,
      { title, description, status: "new" },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    store.dispatch(HideLoader());
    toast.dismiss(loadingToastId);

    if (res.data.status === "success") {
      FormHelper.SuccessToast("Task created successfully");
      return true;
    } else {
      FormHelper.ErrorToast(res.data.message || "Failed to create task");
      return false;
    }
  } catch (err) {
    store.dispatch(HideLoader());
    toast.dismiss(loadingToastId);
    FormHelper.ErrorToast(err.response?.data?.message || "Server error");
    return false;
  }
}