export const contactValidation = (fields) => {
    const { fullname, email, msg, phone } = fields;
    let errors = {};

    const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (fullname == '' || undefined) {
        errors.fullnameError = 'Wymagane imię i nazwisko!';
    }
    
    if (email == '' || undefined) {
        errors.emailError = 'Wymagany jest email!';
    } else if (!email.match(regexEmail)) {
        errors.emailError = 'Nieprawidłowy email!';
    }

    const regexPhone = /^([0-9]{9})$/;

    if (phone === '' || undefined) {
        errors.phoneError = "Nr telefonu jest wymagany!";
    } else if (!phone.match(regexPhone)) {
        errors.phoneError = "Nieprawidłowy nr telefonu!";
    }

    if (msg == '' || undefined) {
        errors.msgError = 'Wymagana jest treść wiadomości!';
    }

    if (Object.keys(errors).length === 0) {
        return {
          success: true
        }
    } else {
        return { errors }
    }
}

export const commentValidation = (fields) => {
    const { username, content } = fields;
    let errors = {};

    if (username == '' || undefined) {
        errors.usernameError = 'Wymagane imię i nazwisko!';
    }

    if (content == '' || undefined) {
        errors.contentError = 'Wymagana jest treść komentarza!';
    }

    if (Object.keys(errors).length === 0) {
        return {
          success: true
        }
    } else {
        return { errors }
    }
}