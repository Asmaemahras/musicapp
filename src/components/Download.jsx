import React from 'react';

function Download() {
    const ImgStyle = 'rounded-[13px] h-[5rem] w-[10rem]'
  return (
    <div className="download">
        <div className="download_images flex">
        <img
          src={require("../img/google.png")}
          alt=""
          className={ImgStyle + ` mr-[2rem]`}
        />
        <img
          src={require("../img/apple.png")}
          alt=""
          className={ImgStyle}
        /> 
        </div>
    </div>
    )
}

export default Download;