import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
export default function Register(){
    return(
        <div style={{ backgroundImage: "url('img/background.jpg')" }} class="flex  bg-[url('/img/background.jpg')]  bg-no-repeat bg-cover justify-evenly py-[10%] px-[25%] items-center m-0">
            <div class="lg:h-[500px] h-[300px] lg:w-[500px] w-[250px] backdrop-blur-md rounded-4xl  border-2  ">
                <form class="flex  flex-col lg:px-[50px] px-[25px]" action="">
                <h1 class="font-bold lg:text-3xl text-xl text-center mt-1 lg:mt-5">Registration</h1>
                
                    <div class="border-2 lg:mt-[40px] mt-[20px] rounded-2xl flex justify-between lg:px-2 px-1 py-1 lg:py-2">
                        <input type="text" placeholder="Username" />
                        <FontAwesomeIcon class="lg:h-4 h-1  items-center " icon={faUser} />

                    </div>
                    <div class="border-2 lg:mt-[40px] mt-[20px] rounded-2xl flex justify-between lg:px-2 px-1 py-1 lg:py-2">
                        <input type="text" placeholder="Email" />
                        <FontAwesomeIcon class="lg:h-4 h-1  items-center " icon={faEnvelope} />

                    </div>

                    <div class="border-2 lg:mt-[40px] mt-[20px] rounded-2xl flex justify-between lg:px-2 px-1 py-1 lg:py-2">
                        <input type="text" placeholder="Password" />
                        <FontAwesomeIcon class="lg:h-4 h-1 items-center " icon={faLock} />


                    </div>
                    <div class="flex lg:mt-4  text-[10px] lg:text-[16px] mt-1 justify-between">
                        <label ><input type="checkbox" />agree to all terms and conditions</label>
                        
                    </div>
                    <div class="flex lg:mt-4 mt-1 ">
                        <button class=" border-2 w-full rounded-2xl lg:px-2 lg:py-2 px-1 py-1 bg-yellow-500">Register</button>
                    </div>
                    <div class="flex text-[10px] lg:text-[16px] justify-evenly">
                        <a href="#">Already have an Account? Login</a>
                    </div>
                
                </form>
            </div>
        </div>

    );
}