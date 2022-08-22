import Music from './Music';
import { React, useState } from "react";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";


function Experience() {
    const [elementIsVisible, setElementIsVisible] = useState(false);
    const bg = {
      true: {
        left: "-44rem",
      },
      false: {
        left: "-50rem",
      },
    };
    const redimg = {
      true: {
        left: "18rem",
      },
      false: {
        left: "16rem",
      },
    };
    const musicimg = {
      true: {
        left: "2rem",
      },
      false: {
        left: "6rem",
      },
    };
  return (
    <div className="experience relative h-[65rem] px-[5rem] bg-[white] pt-[18rem] pb-[10rem] mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem]">
        <div className="left flex-1">  

        <motion.img
          variants={bg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
        src={require("../img/wave.png")}
        alt=""
        className="absolute top-[22rem] left-[-47rem]"
        />

        <motion.img src={require("../img/img5.png")}
        alt=""
        className="w-[16rem] top-[26rem] absolute"
        />
        <img src={require("../img/img6.png")}
        alt=""
        className="w-[9rem] absolute top-[32.7rem] left-[7rem]"
        />
        <motion.img
          variants={redimg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1.2,
            type: "ease-out",
          }} src={require("../img/img7.png")}
        alt=""
        className="w-[9rem] top-[33rem] left-[17rem] absolute"
        />
        <motion.img
          variants={musicimg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          src={require("../img/img8.png")}
        alt=""
        className="w-[17rem] top-[50rem] left-[2rem] absolute"
        />
        </div>
        <div className="right flex items-start flex-col justify-start flex-1 h-[100%] pt-[9rem]">
        {/* Search */}
        <div className="searchbar flex justify-start w-[100%]">
          <input
            type="text"
            placeholder="Enter the keyword or URL"
            className="flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]"
          />
          {/* SearchIcon */}
          <div className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#e600fe] to-[#f2068c] p-4 h-[3rem]">
            <img
              src={require("../img/search.png")}
              alt=""
              className="w-[1.5rem]"
            />
          </div>
        </div>      


        {/* paragraphe */}
        <div className="detail text-black flex flex-col mt-5 text-4xl">
          <span>Search Music by</span>
          <span>
            <b>Name or Direct URL</b>
          </span>
          <span className="text-sm mt-3 text-[#4D586A]">
            Duis feugiat congue metus, ultrices vulputate <br /> nibh viverra
            eget. Vestibulum ullamcorper <br /> volutpat varius.
          </span>
        </div>
        <VisibilitySensor
          onChange={(isVisible) => setElementIsVisible(isVisible)}
        >
          <Music />
        </VisibilitySensor>
    </div>
    </div>
  );
}

export default Experience;