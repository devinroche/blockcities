const validate = (values) => {
    const errors = {};
    if (!values.name || values.name.length < 3) {
        errors.name = 'Required';
    }
    if (!values.email || (values.email && values.email.length < 4)) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }

    if (!values.username || values.username.length < 4) {
        errors.username = 'Required';
    }

    if (!values.password || values.password.length < 4) {
        errors.password = 'Required';
    } 
    if (!values.password2) {
        errors.password2 = 'Required' 
    }
    if (values.password && values.password2 && values.password != values.password2) {
        errors.password2 = 'Passwords do not match'
    }

    return errors;
};

export default validate;
