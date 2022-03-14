import React, { useState } from "react";
import Deshboard from "../Deshboard/Deshboard";
import { useHistory } from "react-router";
// import { auth } from "../../firebase";
function Signup() {

   const [userEmail , setUserEmail] = useState('');
   const [userPassword , setUserPassword] = useState('');
   const history = useHistory()

    const userDataHendlar = (e) =>{
         e.preventDefault();
         const userData = {
             userEmail:userEmail,
             userPassword:userPassword
         }

         console.log(userData);

        // auth.createUserWithEmailAndPassword(
        //   userEmail,
        //   userPassword,
        // ).then((authUser) =>{
        //   console.log(authUser);
        // }).catch((error) =>{
        //   alert(error.message);
        // });

         history.push('/deshboard')
    };

  return (
    <section className="banner-sec background-laryer">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div className="sign-up">
              <form  onSubmit={userDataHendlar} >
                <h2 className="text-white" >Sign In</h2>
                <input
                  type="text"
                  className="form-control inputheight"
                  placeholder="Enter or phone number"
                  name="userEmail"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                <input
                  type="password"
                  className="form-control inputheight"
                  placeholder="Password"
                  name="userPassword"
                  value={userPassword}
                  onChange={(e) =>setUserPassword(e.target.value)}
                />

                <button  type="submit" className="form-control">Sign In</button>
                <div className="remember-help mt-3 d-flex justify-content-between">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Remember Me
                    </label>
                  </div>
                  <div className="help">
                    <a href="#">Need Help?</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
