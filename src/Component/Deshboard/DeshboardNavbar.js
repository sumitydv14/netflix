import React, { useEffect, useState } from 'react'
import logo from '../../Images/logo.png';
import smile from '../../Images/smile.jpeg';

function DeshboardNavbar() {


    const [show , handalshow] = useState(false);


    const tranistionNavbar = () =>{

        if(window.scrollY>100){

            handalshow(true);
        }
        else{
            handalshow(false);
        }
    }

    

    useEffect(()=>{
       window.addEventListener("scroll" , tranistionNavbar);
       return ()=>{
           window.removeEventListener("scroll" , tranistionNavbar);
       }
    },[]);


    return (
        <section>
             <div className="container-fluid px-5">
                 <div className="row">
                      <div className="col-md-12">
                          <div className={`deshboard-navbar ${ show  && "navbar_color"}  `}>
                               <ul className="d-flex m-0 align-items-center justify-content-between list-inline">
                                   <li><img src={logo} width="150px" alt="logo" className="img-fluid"/></li>
                                   <li><img src={smile}alt="smaile"  width="50px" className="img-fluid" /></li>
                               </ul>
                          </div>
                      </div>
                 </div>
               
             </div>
        </section>
    )
}

export default DeshboardNavbar
