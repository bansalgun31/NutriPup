import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export default function Navbar(){
    return(
        <div class="relative w-[100%]" >
            <div class="w-full h-[320px] p-0" >
        
            <img class="w-full lg:w-full md:w-full w-[100%]   size-5 2xl:shrink-2   h-80 blur-[5px]" src="img/bg.png"  />
    
            </div>
            <nav class="flex absolute top-0 left-0 h-10 mt-2 text-white lg:w-full w-[100%] lg:text-lg sm:text-sm md:text-md lg:px-2 md:px-10 sm:px-18 items-center text-xs justify-between flex-flow">
            <a href="#"><img class="lg:h-30 sm:h-20 h-15   " src="img/logo1.png" /></a>
                                            <ul class="flex lg:gap-8 gap-2">


                                
                                <li ><Link to={"/home"}>HOME</Link></li>
                                <li ><Link to={"/about"}>ABOUT US</Link></li>
                                <li ><Link to={"/products"}>PRODUCTS</Link></li>
                                {/*<li ><Link to={"/about"}>DEALS</a></li> */}
                                <li ><a href="#">CONTACT US</a></li>
                                <li>
                                <button class="bg-white rounded-lg  text-yellow-500 "><Link to={"/login"}>LOGIN</Link></button>
                                </li>
                                <li>
                                <button class="bg-white rounded-lg  text-yellow-500 "><Link to={"/register"}>Register</Link></button>
                                </li>
                            </ul>
            
            </nav>
            <div class="flex flex-col items-center   text-white sm:top-50 sm:left-10 top-35 md:top-35     sm:right-10   right-0 left-0     md:left-20 md:right-20 lg:top-15  justify-between absolute ">
            <h1 class="font-bold   md:text-6xl  sm:text-6xl text-5xl lg:text-9xl   ">HEALTHY FOOD</h1>
            <h1 class="font-bold    md:text-3xl sm:text-2xl text-1xl lg-text-5xl  ">NUTRITIOUS MEALS FOR YOUR HAPPY PUP</h1>
            </div>
            <div  class="absolute h-[300px]  bottom-0 top-25 left-15 lg:top-8  md:left-120 lg:left-140">
                            <img class="h-[300px] lg:h-[400px] w-full"  src="img/dog2.png"  />
                        </div> 
                        <div class="bg-yellow-100 w-full  px-5 lg:px-3 lg:py-10 py-20 h-[350px] sm:h-[500px] lg:h-[500px]">
                        <div class="flex   lg:gap-8 gap-1  justify-between">
                            <div class="lg:h-[400px] relative lg:w-[290px] sm:h-[200px] sm:w-[90px] h-50 w-20 bg-yellow-500">
                            <img class="absolute lg:hover:h-90  lg:h-80 lg:bottom-35 lg:w-full sm:h-20 lg:mx-0 h-45 w-20  bottom-15  mx-0 active:h-40  " src="img/p1.png"  />
                            <div class="flex lg:px-2 px-[2px] lg:pt-[260px] pt-[140px] justify-between">
                            <div class="flex text-yellow-200 flex-col lg:gap-2 gap-1 ">
                                <h1  class="lg:text-lg text-[6px] font-bold">Pedigree Dog Food</h1>
                                <p class="text-[4px] lg:text-lg">Healthy, tasty and packed with nutrients</p>
                                <div class="flex  justify-between">
                                <div class="flex gap-1 lg:gap-2">
                                    <button><FontAwesomeIcon class="lg:h-4 h-[7px] border-2 rounded-full  items-center " icon={faPlus} /></button>
                                    <p class="lg:text-lg text-[4px] mt-0.5">01</p>
                                    <button><FontAwesomeIcon class="lg:h-4 h-[7px] border-2 rounded-full items-center " icon={faMinus} /></button>

                                </div>
                                <button class="border-2 rounded-xl bg-white text-yellow-500 lg:h-[30px] lg:w-[90px] h-[10px] lg:text-lg text-[4px] w-[30px]">Buy now</button>
                                </div>
                            </div>
                            <p class="lg:text-lg text-[4px] text-yellow-200">$21</p>
                            </div>

                            </div>
                            <div class="lg:h-[360px] lg:mt-[40px] mt-[40px]  relative lg:w-[290px] sm:h-[200px] sm:w-[90px] h-40 w-20 bg-yellow-500">
                            <img class="absolute lg:hover:h-90  lg:h-80 lg:bottom-25 lg:w-[100%] sm:h-20 lg:mx-0 h-45 w-full  bottom-10  mx-0 active:h-40  " src="img/p2.png"  />
                            <div class="flex lg:px-2 px-[2px] lg:pt-[220px] pt-[110px] justify-between">
                            <div class="flex flex-col text-yellow-200 lg:gap-2 gap-1 ">
                                <h1  class="lg:text-lg text-[6px] font-bold">Pedigree Dog Food</h1>
                                <p class="text-[4px] lg:text-lg">Healthy, tasty and packed with nutrients</p>
                                <div class="flex  justify-between">
                                <div class="flex gap-1 lg:gap-2">
                                    <button><FontAwesomeIcon class="lg:h-4 h-[7px] border-2 rounded-full  items-center " icon={faPlus} /></button>
                                    <p class="lg:text-lg text-[4px] mt-0.5">01</p>
                                    <button><FontAwesomeIcon class="lg:h-4 h-[7px] border-2 rounded-full items-center " icon={faMinus} /></button>

                                </div>
                                <button class="border-2 rounded-xl bg-whie text-yellow-500 bg-white lg:h-[30px] lg:w-[90px] h-[10px] lg:text-lg text-[4px] w-[30px]">Buy now</button>
                                </div>
                            </div>
                            <p class="lg:text-lg text-yellow-200 text-[4px]">$21</p>
                            </div>

                            </div>
                            <div class="lg:h-[360px] lg:mt-[40px] mt-[40px]  relative lg:w-[290px] sm:h-[200px] sm:w-[90px] h-40 w-20 bg-yellow-500">
                            <img class="absolute lg:hover:h-90  lg:h-80 lg:bottom-25 lg:w-[100%] sm:h-20 lg:mx-0 h-45 w-full  bottom-10  mx-0 active:h-40  " src="img/p3.png"  />
                            <div class="flex lg:px-2 px-[2px] lg:pt-[220px] pt-[110px] justify-between">
                            <div class="flex flex-col text-yellow-200 lg:gap-2 gap-1 ">
                                <h1  class="lg:text-lg text-[6px] font-bold">Pedigree Dog Food</h1>
                                <p class="text-[4px] lg:text-lg">Healthy, tasty and packed with nutrients</p>
                                <div class="flex  justify-between">
                                <div class="flex gap-1 lg:gap-2">
                                    <button><FontAwesomeIcon class="lg:h-4 h-[7px] border-2 rounded-full  items-center " icon={faPlus} /></button>
                                    <p class="lg:text-lg text-[4px] mt-0.5">01</p>
                                    <button><FontAwesomeIcon class="lg:h-4 h-[7px] border-2 rounded-full items-center " icon={faMinus} /></button>

                                </div>
                                <button class="border-2 text-yellow-500 bg-white rounded-xl lg:h-[30px] lg:w-[90px] h-[10px] lg:text-lg text-[4px] w-[30px]">Buy now</button>
                                </div>
                            </div>
                            <p class="lg:text-lg text-yellow-200 text-[4px]">$21</p>
                            </div>

                            </div>
                            <div class="lg:h-[400px] relative lg:w-[290px] sm:h-[200px] sm:w-[90px] h-50 w-20 bg-yellow-500">
                            <img class="absolute lg:hover:h-90  lg:h-80 lg:bottom-35 lg:w-full sm:h-20 lg:mx-0 h-45 w-20  bottom-15  mx-0 active:h-40  " src="img/p4.png"  />
                            <div class="flex lg:px-2 px-[2px] lg:pt-[260px] pt-[140px] justify-between">
                            <div class="flex flex-col lg:gap-2 text-yellow-200 gap-1 ">
                                <h1  class="lg:text-lg text-[6px] font-bold">Pedigree Dog Food</h1>
                                <p class="text-[4px] lg:text-lg">Healthy, tasty and packed with nutrients</p>
                                <div class="flex  justify-between">
                                <div class="flex gap-1 lg:gap-2">
                                    <button><FontAwesomeIcon class="lg:h-4 h-[7px] border-2 rounded-full  items-center " icon={faPlus} /></button>
                                    <p class="lg:text-lg text-[4px] mt-0.5">01</p>
                                    <button><FontAwesomeIcon class="lg:h-4 h-[7px] border-2 rounded-full items-center " icon={faMinus} /></button>

                                </div>
                                <button class="border-2 rounded-xl text-yellow-500 bg-white lg:h-[30px] lg:w-[90px] h-[10px] lg:text-lg text-[4px] w-[30px]">Buy now</button>
                                </div>
                            </div>
                            <p class="lg:text-lg text-[4px] text-yellow-200">$21</p>
                            </div>

                            </div>

                        </div> 
                        </div> 
                                        <div class="bg-black lg:width-[100%] w-full  lg:px-4 px-2 lg:h-20 h-10 flex text-white gap-1 lg:gap-2 justify-between">
                                            <div class="flex justify-between lg:text-xl text-[4px] items-center text-center lg:gap-6 gap-3">
                                                <div>
                                                <FontAwesomeIcon class="lg:h-4 h-2  items-center " icon={faStar} />
                        
                                                </div>
                                                <div>
                                                    <h1>DRY KIBBLE</h1>
                        
                                                </div>
                                            </div>
                                            <div class="flex lg:gap-6 lg:text-xl text-[4px] gap-3 justify-between items-center text-center">
                                                <div>
                                                <FontAwesomeIcon class="lg:h-4 h-2  items-center " icon={faStar} />
                        
                                                </div>
                                                <div>
                                                    <h1>BONES AND CHEWS</h1>
                        
                                                </div>
                                            </div>
                                            <div class="flex lg:gap-6 lg:text-xl text-[4px] gap-3 justify-between items-center text-center">
                                                <div>
                                                <FontAwesomeIcon class="lg:h-4 h-2  items-center " icon={faStar} />
                        
                                                </div>
                                                <div>
                                                    <h1>GRAVY OR SAUCE</h1>
                        
                                                </div>
                                            </div>
                                            <div class="flex lg:gap-6 lg:text-xl text-[4px] gap-3 justify-between items-center text-center">
                                                <div>
                                                <FontAwesomeIcon class="lg:h-4 h-2  items-center " icon={faStar} />
                        
                                                </div>
                                                <div>
                                                    <h1>CANNED FOOD</h1>
                        
                                                </div>
                                            </div>
                        
                                        </div>                <div class="relative">
                                                            <div class="bg-yellow-500 relative lg:h-90 h-50  ">
                                                                </div>
                                                                <div class="absolute lg:top-3 top-3 lg:left-[40%] left-[48%] right-[5%] lg:right-[20%] ">
                                                                
                                                                <h1 class=" font-bold text-yellow-200 lg:text-xl text-[10px] lg:pt-5 pt-3">ABOUT US</h1>
                                                                <h1 class=" text-white lg:pt-13  font-bold lg:text-5xl text-[20px]   ">FOCUSED ON PUP HEALTH AND HAPPINESS</h1>
                                                                <p class=" text-yellow-200 lg:text-lg text-[8px] lg:pt-10 pt-4 absolute">We Are Dedicated  Dog's Lives Through Preminum Nutrition.Our Goal Is To Offer Delicious,Wholesome Meals That Promote Health and Happiness For Your Beloved Pet.</p>
                                        
                                                            </div>
                                                            <div class="absolute lg:top-10 left-0 top-10 lg:left-0">
                                                                <img class="lg:h-80 h-40 " src="img/about.png"  />
                                                            </div>
                                                        </div>
                                                        <div> 
                                                         <div class="lg:h-[150px] h-[50px]">
                                                            <img class="lg:h-[220px] h-[100px]" src="img/logo1.png"  />
                                        
                                                        </div>
                                                        <div class="lg:w-[100%]  w-full lg:h-[400px] h-[250px]  lg:gap-[60px] gap-[10px] lg:px-15 px-4 lg:py-10 py-6 justify-between  bg-white flex flex-col">
                                                        <div class=" lg:w-[100%] w-full lg:h-[400px] h-[250px] lg:gap-[120px] gap-[20px] justify-between  bg-white flex">
                                                            
                                        
                                                            <div class="lg:w-[300px] lg:text-[16px] text-[10px] w-[150px] ">
                                                                <ul>
                                                                
                                                                <li class="font-bold  mb-4"><h1>ADDRESS</h1></li>
                                                                <li ><p>IET Lucknow,Sitapur Road, Engineering Chauraya, Lucknow (U.P),226021</p></li>
                                                                
                                                                </ul>
                                                            </div>
                                                            <div class="lg:w-[300px] lg:text-[16px] text-[10px] w-[200px]">
                                                                <ul>
                                                                    <li class="font-bold  mb-4"><a href="#"><h1>PUP FOODS</h1></a></li>
                                                                    <li ><a href="#"><p>Fresh Dog Food</p></a></li>
                                                                </ul>
                                                                
                                                            </div>
                                                            <div class=" w-[200px] lg:text-[16px] text-[10px] lg:w-[300px]">
                                                                <ul>
                                                                    
                                                                        <li class="font-bold "><a href="#"><h1>GET TO KNOW US</h1></a></li>
                                                                        <li ><a href="#"><p>About Us</p></a></li>
                                                                        <li ><a href="#"><p>Blogs</p></a></li>
                                                                    
                                                                </ul>
                                                            </div>
                                                            <div class="lg:w-[300px] lg:text-[16px] text-[10px] w-[200px]">
                                                                <ul>
                                                                    <li class="font-bold  mb-4"><a href="#">ACCESSORIES</a></li>
                                                                    <li ><a href="#">Bed</a></li>
                                                                    <li ><a href="#">Little House</a></li>
                                                                    <li ><a href="#">Toys</a></li>
                                                                </ul>
                                                            </div>
                                                            </div>
                                                            <div class="lg:w-[300px] lg:text-[16px] text-[10px] w-[200px]">
                                                                <ul>
                                                                    <li  class="font-bold"><a href="#">SUPPORT</a></li>
                                                                    <li ><a href="#">Contact us: +91-7457038107</a></li>
                                                                    <li ><a href="#">Email: bansalgun31@gmail.com</a></li>
                                                                </ul>
                                                            </div>
                                        
                                                        
                                                        </div>
                                                        
                                                        
                                                        <div class="lg:h-[50px] lg:w-full w-full h-[25px] lg:p-6 p-3 items-center lg:gap-2 gap-1  bg-yellow-300 flex">
                                                            <div>
                                                            <FontAwesomeIcon class="lg:h-4 h-2 items-center " icon={faCopyright} /> 
                                                            </div>
                                                            <div class="flex justify-between items-end lg:gap-[1100px] gap-[250px]">
                                                            <p class="text-start lg:text-[16px] text-[7px]">ALL RIGHTS RESERVED</p>
                                                            <div class="flex lg:gap-4 gap-1 items-center ">
                                                            <button class=" lg:h-7 h-2 w-2 lg:w-7 rounded-full items-center  border-2">
                                                                <a href="#"> <FontAwesomeIcon class="lg:h-5 h-1 items-center  " icon={faInstagram} /> </a>
                                                                </button>
                                                                <button class=" lg:h-7 h-2 w-2 lg:w-7 rounded-full items-center  border-2" >
                                                                <a href="#"> <FontAwesomeIcon class="lg:h-5 h-1  items-center " icon={faWhatsapp} /> </a>
                                                                </button>
                                                                <button class=" lg:h-7 h-2 w-2 lg:w-7 rounded-full items-center  border-2">
                                                                <a href="#"> <FontAwesomeIcon class="lg:h-5 h-1 items-center " icon={faTwitter} /> </a>
                                                            </button> 
                                                        </div> 
                                        
                                                            </div> 
                                                        </div> 
                                                        </div> 


                                
            

        </div>

    );
}