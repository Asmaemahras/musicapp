import { React, useState } from "react";
import Download from "./Download";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";


function Body() {
    const [elementIsVisible, setElementIsVisible] = useState(false);
    const bg = {
        true: {
          left: "7rem",
        },
        false: {
          left: "19rem",
        },
      };
      const Music = {
        true: {
          left: "295px",
        },
        false: {
          left: "235px",
        },
      };
      const rect = {
        true: {
          left: "11rem",
        },
        false: {
          left: "13rem",
        },
      }
      const heart = {
        true: {
          left: "9rem",
        },
        false: {
          left: "12.5rem",
        },
      };
    return (
        <VisibilitySensor
        onChange={(isVisible) => setElementIsVisible(isVisible)}
        minTopValue={300}
        >
        <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[3rem] w-[100%] h-[35rem] relative z-[3]">
        {/* Left */}
        <div className="head flex flex-col items-start justify-center h-[100%] text-[3rem]">
            <span>Download our</span>{" "}
            <span>
             <b>Best music application</b>
            </span>
            <span className="text-[15px] text-[#525D6E]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            <br />
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </span>
        
          <div>
            <span className="text-[13px]">Download now on Android and IOS</span>
            <Download/>
          
          </div>
        </div>
        <div className="images relative w-[50%]">


        <motion.img
            variants={bg}
            animate={`${elementIsVisible}`}
            transition={{ duration: 1, type: "ease-out" }}
            src={require("../img/wave.png")}
            alt=""
            className="absolute top-[-8rem] left-[13rem]"
            />

            <img
            src={require("../img/img1.png")}
            alt=""
            className="absolute top-[-15rem] h-[34rem] left-[13rem]"
            />
            <motion.img
                        variants={Music}
                        animate={`${elementIsVisible}`}
                        transition={{
                          duration: 1,
                          type: "ease-out",
                        }}
            src={require("../img/img2.png")}
            alt=""
            className="absolute left-[235px] top-[94px] w-[175px]"
            />
            <motion.img
            variants={rect}
            animate={`${elementIsVisible}`}
            transition={{
              type: "ease-out",
              duration: 1,
            }}
            src={require("../img/img3.png")}
            alt=""
            className="absolute w-[5rem] left-[13rem] top-[12rem]"
            />
            <motion.img
            variants={heart}
            animate={`${elementIsVisible}`}
            transition={{
              type: "ease-out",
              duration: 1,
            }}
            src={require("../img/img4.png")}
            alt=""
            className="absolute w-[5rem] left-[12.5rem] top-[12rem]"
            />
        </div>
            
        </div>
        </VisibilitySensor>
    );
}
export default Body;
