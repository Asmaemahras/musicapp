import React from 'react'
import CenterMenu from './centerMenu'

function Header() {
    const buttonStyle ="border-[2px] rounded-[10px] border-[#232A4E]  px-[25px] py-[7px]";
    return (
        <div className="header flex items-center justify-between px-[5rem] bg-[#081730] pt-[2.4rem] text-[0.8rem]">
          {/* logo */}
          <img
            src={require("../img/logo.png")}
            alt=""
            className="logo  w-[72px] h-[42px]"
          />
          {/* side menu */}
          <CenterMenu />
          {/* buttons */}
          <div className="buttons flex">
            <button className={`mr-[35px]  ` + buttonStyle}>
              Log in
            </button>
            <button className={buttonStyle}>Sign up</button>
          </div>
        </div>
     
      );
    }

export default Header;
