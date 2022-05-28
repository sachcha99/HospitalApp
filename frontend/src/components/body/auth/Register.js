import React, { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

import {
  showErrMsg,
  showSuccessMsg,
} from "../../utils/notification/Notification";
import {
  isEmpty,
  isEmail,
  isLength,
  isMatch,
} from "../../utils/validation/Validation";

// const initialState = {
//   name: "",
//   email: "",
//   password: "",
//   cf_password: "",
//   err: "",
//   success: "",
// };

function Register() {
  // const [patient, setPatient] = useState(initialState);

  // const { name, email, password, cf_password, err, success } = patient;

  // const handleChangeInput = e => {
  //   const { name, value } = e.target;

  //   setPatient({ ...patient, [name]: value, err: "", success: "" });
  // };

  // const handleSubmit = async e => {
  //   e.preventDefault();

  //   if (isEmpty(name) || isEmpty(password))
  //     return setPatient({
  //       ...patient,
  //       err: "Please fill in all the fields!",
  //       success: "",
  //     });

  //   if (!isEmail(email))
  //     return setPatient({ ...patient, err: "Invalid Emails.", success: "" });

  //   if (isLength(password))
  //     return setPatient({
  //       ...patient,
  //       err: "Password must contain at least 6 characters!",
  //       success: "",
  //     });

  //   if (!isMatch(password, cf_password))
  //     return setPatient({
  //       ...patient,
  //       err: "Passwords did not match!",
  //       success: "",
  //     });
   
      
  //   try {
  //     const res = await axios.post("/patient/register", {
  //       name,
  //       email,
  //       password,
  //     });

  //     setPatient({ ...patient, err: "", success: res.data.msg });
  //   } catch (err) {
  //     err.response.data.msg &&
  //       setPatient({ ...patient, err: err.response.data.msg, success: "" });
  //   }
  // };

  

  return (
    <div className="login_page">
      <h2>Register</h2>

      {/* {err && showErrMsg(err)} */}
      {/* {success && showSuccessMsg(success)} */}

      <form onSubmit>
        <div>
          <label htmlFor="name"> Name </label>
          <input
            type="text"
            placeholder="Enter your name"
            id="name"
            // value={name}
            name="name"
            // onChange={handleChangeInput}
          ></input>
        </div>

        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            placeholder="Enter email address"
            id="email"
            // value={email}
            name="email"
            // onChange={handleChangeInput}
          ></input>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            id="password"
            // value={password}
            name="password"
            // onChange={handleChangeInput}
          ></input>
        </div>

        <div>
          <label htmlFor="cf_password">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            id="cf_password"
            // value={cf_password}
            name="cf_password"
            // onChange={handleChangeInput}
          ></input>
        </div>

        {/* <div>
          <label htmlFor="cf_password">Choose User</label>
          <input
            type="radio"
            id="patient"
            name="user"
          ></input>
          <label for="age1">Patient</label><br></br>
        </div> */}
{/* <div>
<p>Please select your favorite Web language:</p>
  <input type="radio" id="html" name="fav_language" value="HTML"></input>
  <label for="html">Patient</label>
  <input type="radio" id="css" name="fav_language" value="CSS"></input>
  <label for="css">Doctor</label>
</div> */}


<div class="wrapper">
  <p>Select User</p>
 <input type="radio" name="select" id="option-1" checked></input>
 <input type="radio" name="select" id="option-2"></input>
   <label for="option-1" class="option option-1">
     <div class="dot"></div>
      <span>Patient</span>
      </label> <br></br>
   <label for="option-2" class="option option-2">
     <div class="dot"></div>
      <span>Doctor</span>
   </label> <br></br>
</div>

{/* <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
  <label class="form-check-label" for="flexRadioDefault1">
    Patient
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
  <label class="form-check-label" for="flexRadioDefault2">
    Doctor
  </label>
</div> */}


        <div className="row">
          <button type="submit"> Register </button>
        </div>
      </form>

      <p>
        Already have an account? <Link to="/login">Login here!</Link>
      </p>
    </div>
  );
}

export default Register;
