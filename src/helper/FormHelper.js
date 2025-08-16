import toast from "react-hot-toast";

class FormHelper {
    static isEmpty(value) {
        return !value || value.trim().length === 0;
    }

    static isEmail(value) {
        return /\S+@\S+\.\S+/.test(value);
    }

    static isMobile(value) {
        return /^01[3-9][0-9]{8}$/.test(value);
    }

    static ErrorToast(msg) {
        toast.error(msg, {
            position: "bottom-center",
            style: { fontSize: "14px", marginTop: "5px" }
        });
    }

    static SuccessToast(msg) {
        toast.success(msg, {
            position: "bottom-center",
            style: { fontSize: "14px", marginTop: "5px" }
        });
    }
}

export default FormHelper;
