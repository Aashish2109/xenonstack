import React from "react";

import { useNavigate } from "react-router-dom";
export default function Registration() {
    const navigate = useNavigate();
    
    return (
        <>
            <h1 className="head">REGISTRATION FORM </h1>

            <form  method="post" className="content" action="/connect1.php">

                <div >
                    <label for="name">Enter Your Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter a valid name" /><br></br>
                    <label for="mail">E mail:</label>
                    <input type="email" id="mail" name="emailid" placeholder="abcd@gmail.com" /><br></br>
                    <label for="password">Enter your Password:</label>
                    <input type="password" id="password" name="password"  placeholder="enter a strong password" /><br></br>
                    <label for="confirm password">Confirm Password:</label>
                    <input type="password" id="password" name="confirmpassword" placeholder="confirm password " /><br></br>
                    <label for="telephone">Telephone No:</label>
                    <input type="tel" id="telephone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{3}" name="number" /><br></br>
                    <label for="gender">Gender:</label>
                    <input type="radio" id="Male" name="gender" value="Male" />
                    <label for="Male">Male</label>
                    <input type="radio" id="female" name="gender" value="Female" />
                    <label for="female">Female</label>
                    <input type="radio" id="others" name="gender" value="Others" />
                    <label for="others">Others</label><br></br>
                    
                   
                    <button onClick={() => navigate("/index")}>Login</button>

         
                    <input type="SUBMIT" name="save" value="SUBMIT" />
                    <input type="RESET" value="RESET" />


                </div>
            </form>


        </>
    )
}