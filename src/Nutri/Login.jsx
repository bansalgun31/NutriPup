import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
//import { Link } from "react-router";
//import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
export default function Login(){
    return(
        <div style={{ backgroundImage: "url('img/background4.jpg')" }} class="  w-full bg-center  bg-no-repeat bg-cover py-[10%] px-[25%] flex items-center justify-evenly  ">

            
            
            <div class=" lg:h-[500px] h-[250px] lg:w-[500px] w-[250px] backdrop-blur-md rounded-4xl  border-2">
                <form class="flex lg:gap-[40px] gap-[10px] flex-col lg:px-[50px] px-[25px]" action="">
                <h1 class="font-bold lg:text-3xl text-xl text-center lg:mt-5 mt-2 lg:text-3xl text-xl">Login</h1>
                
                    <div class="border-2 rounded-2xl flex justify-between lg:px-2 px-1 py-1 lg:py-2">
                        <input type="text" placeholder="Username" />
                        <FontAwesomeIcon class="lg:h-4 h-1  items-center " icon={faUser} />

                    </div>
                    <div class="border-2 rounded-2xl flex justify-between lg:px-2 px-1 py-1 lg:py-2">
                        <input type="text" placeholder="Password" />
                        <FontAwesomeIcon class="lg:h-4 h-1  items-center " icon={faLock} />


                    </div>
                    <div class="flex lg:text-[16px] text-[10px] justify-between">
                        <label ><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <div class="flex ">
                        <button class="bg-yellow-500 border-2 w-full rounded-2xl px-1 py-1 lg:px-2 lg:py-2"><a href="#">Login</a></button>
                    </div>
                    <div class="flex lg:text-[16px] text-[10px] justify-evenly">
                        <a href="#">Don't have an Account? Register</a>
                    </div>
                
                </form>
            </div>
                        {/*<div class="h-[500px] w-[500px] border-2">
                            <form class="flex gap-[40px] flex-col px-[50px]" action="">
                            <h1 class="font-bold text-3xl text-center mt-5">Registration</h1>
                            
                                <div class="border-2 rounded-2xl flex justify-between px-2 py-2">
                                    <input type="text" placeholder="Username" />
                                    <FontAwesomeIcon class="h-4  items-center " icon={faUser} />
            
                                </div>
                                <div class="border-2 rounded-2xl flex justify-between px-2 py-2">
                                    <input type="text" placeholder="Email" />
                                    <FontAwesomeIcon class="h-4  items-center " icon={faEnvelope} />
            
                                </div>
            
                                <div class="border-2 rounded-2xl flex justify-between px-2 py-2">
                                    <input type="text" placeholder="Password" />
                                    <FontAwesomeIcon class="h-4  items-center " icon={faLock} />
            
            
                                </div>
                                <div class="flex justify-between">
                                    <label ><input type="checkbox" />I agree to  terms & conditions</label>
                                    
                                </div>
                                <div class="flex ">
                                    <button class="bg-white border-2 w-full rounded-2xl px-2 py-2">Register</button>
                                </div>
                                <div class="flex justify-evenly">
                                    <a href="#">Don't have an Account? Login</a>
                                </div>
                            
                            </form>
                        </div> */}
                        
        </div>

    );
}