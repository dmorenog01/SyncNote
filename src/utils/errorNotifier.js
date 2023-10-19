import { Notify } from "notiflix"

const errorNotifier = (errorName) => {
    let message = ''
    switch (errorName) {
        case "auth/invalid-login-credentials":
            message = "Incorrect credentials!"
            break;
            
        case "auth/email-already-in-use":
            message = "This email is already in use!"
            break;

        case "auth/invalid-email":
            message = "You must use a valid email!"
            break;

        case "register/passwords-dont-match":
            message = "The passwords must match!"
            break;
        
        case "register/password-too-short":
            message = "The password must be at least 8 characters long!"
            break;

        default:
            message = "Error!"
            break;
    }
    Notify.failure(message)
}

export default errorNotifier