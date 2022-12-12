export default function validate(values){
    let errors={};

    if(!values.Firstname.trim()){
        errors.Firstname="Firstname requried"
    }
    if(!values.Lastname.trim()){
        errors.Lastname="Lastname required"
    }
    if(!values.email.trim()){
        errors.email="email required"
    } else if(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
        errors.email = "Email address is invalid";
    }

    if(!values.password.trim()){
        errors.password = "password required"
    }
    else if(values.password.length>8){
        errors.password = "Password in 8 or more";
    }

    if(!values.mobileNo.trim()){
        errors.mobileNo = "mobileNo required"
    }
    else if(values.mobileNo.length>10){
        errors.mobileNo = "mobileNo in 10-digits";
    }
    return errors;

}