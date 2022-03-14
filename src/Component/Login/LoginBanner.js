import React,{ useState } from "react";
import { useHistory } from "react-router";
import Signup from "../Signup/Signup";

function LoginBanner() {

 const [email , setEmail] = useState('');
 const history = useHistory();

 const sendEmail = (e) =>{
    e.preventDefault();

    const userEmail = email;
    console.log("User Email" , email);
    history.push('/sign')

 }

  return (
    <section className="banner-sec background-laryer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="logo-content text-center text-white">
              <h1>
                Unlimited movies, TV
                <span className="d-block">shows and more.</span>
              </h1>
              <h5>Watch anywhere. Cancel anytime.</h5>
              <h6 className="mb-5 mt-3" >
                Ready to watch? Enter your email to create or restart your
                membership.
              </h6>
              <div className="input-group  mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="input-group-text" id="basic-addon2" onClick={sendEmail} >
                  Get Started 
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginBanner;
