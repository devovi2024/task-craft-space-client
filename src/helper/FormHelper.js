import { toast } from 'react-hot-toast';

const EmailRegx = /\S+@\S+\.\S+/;
const OnlyNumberRegx = /^[0-9]+$/;
const ValidFileExtensions = /\.(jpg|jpeg|png|gif|pdf)$/i;
const MobileRegx = /^01[3-9][0-9]{8}$/;

class FormHelper {
    isEmpty(value) {
        return !value || value.trim().length === 0;
    }

    isMobile(value) {
        return MobileRegx.test(value);
    }

    isEmail(value) {
        return EmailRegx.test(value);
    }

    isOnlyNumber(value) {
        return OnlyNumberRegx.test(value);
    }

    isValidFile(fileName) {
        return ValidFileExtensions.test(fileName);
    }

    ErrorToast(msg) {
        toast.error(msg, {
            position: 'top-right',
            style: {
                borderRadius: '8px',
                background: '#ff4d4f',
                color: '#fff',
            },
        });
    }

    SuccessToast(msg) {
        toast.success(msg, {
            position: 'top-right',
            style: {
                borderRadius: '8px',
                background: '#333',
                color: '#fff',
            },
        });
    }
}

const formHelperInstance = new FormHelper();
export default formHelperInstance;
