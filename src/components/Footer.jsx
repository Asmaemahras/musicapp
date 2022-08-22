import React from "react";
import { Facebook, Twitter, YouTube, LinkedIn } from "@material-ui/icons";

function Footer() {
    const SocialStyle = "rounded-full border-2 border-black p-2 mr-[5rem] bg-[#081730]"
  return (
    <div className="footer flex flex-col items-center justify-start px-[5rem] bg-[white] h-[35rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
      
      {/* Social icons */}
      <div className="flex w-[100%] justify-center mt-14">
        <div className={SocialStyle}>
          <Facebook />
        </div>{" "}
        <div className={SocialStyle}>
          <Twitter />
        </div>{" "}
        <div className={SocialStyle}>
          <YouTube/>
        </div>{" "}
        <div className={SocialStyle}>
          <LinkedIn />
        </div>
      </div>
      {/* detail */}
      <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[3rem]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </span>
    </div>
  );
}

export default Footer;