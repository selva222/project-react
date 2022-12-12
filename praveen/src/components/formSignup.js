import React from 'react';
import useForm from "../hooks/useForm";
import validate from './validate';
  const  FormSignup =()=> {
      const{handleChange,values,handleSubmit,errors} = useForm(validate);  

  return (
       <form className="form">
       <h1>Sign Up</h1>
       <h2>hustle up!</h2>
        <h3>create your account </h3>

       <div className="form-inputs" onSubmit={handleSubmit}>
        {/* <label htmlFor='FirstName' className="form-label"> FirstName </label> */}
        <input id="FirstName" type="text" name="FirstName" className="form-inputs" placeholder=" Firstname" onChange={handleChange} value={values.Firstname}
         />
         {errors.Firstname && <p>{errors.Firstname}</p>}
       </div>

       <div className="form-inputs">
        {/* <label htmlFor='LastName' className="form-label"> LastName </label> */}
        <input id="LastName" type="text" name="LastName" className="form-inputs" placeholder=" Lastname" onChange={handleChange} value={values.Lastname}
         />
       </div>

       <div className="form-inputs">
        {/* <label htmlFor='email' className="form-label"> Email </label> */}
        <input id="email" type="email" name="email" className="form-inputs"
         placeholder=" Email" onChange={handleChange} value={values.email}
         />
       </div>

       <div className="form-inputs">
        {/* <label htmlFor='password' className="form-label"> Password </label> */}
        <input id="password" type="password" name="password" className="form-inputs"
         placeholder=" Password" onChange={handleChange} value={values.password}
         />
       </div>

       <div className="form-inputs">
        {/* <label htmlFor='mobileNo.' className="form-label"> MobileNo. </label> */}
        <input id="mobileNo." type="mobileNo." name="mobileNo." className="form-inputs"
         placeholder=" MobileNo." onChange={handleChange} value={values.mobileNo}
         />
       </div>

       <button className="form-inputs-button" type="submit">Sign Up</button>

       <span className="form-inputs-login">
        Alreadly have an account? Login <a href="https://www.google.com">here</a>
       </span>
       </form>
   );
  }
export default FormSignup;
