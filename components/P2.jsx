import React from "react";

const P2 = () => {
  return (
    <div className="relative bg-[#835FA8]">
      <div className=" pt-24 pb-72 container">
        <div>
          <p className=" font-openl text-white text-[48px]">
            Super Duper & such
          </p>
        </div>
        <div className=" mt-6 ">
          <p className="  font-openl text-white text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing<br></br> elit,
            sed do eiusmod tempor incididunt ut labore et<br></br> dolore magna.
            aliqua
          </p>
        </div>
        <button className="px-16 py-4 rounded-full bg-[#3DD2AE] mt-11 text-[18px] text-white">
          See More
        </button>
      </div>{" "}
      <div className=" absolute inset-0 w-full h-full overflow-hidden">
        {" "}
        <img
          className="absolute top-52 left-[600px]"
          src="/img/interface.png"
          alt=""
        />
      </div>
      <div className="absolute inset-0 w-full h-full">
        {" "}
        <img
          className="absolute -top-[117px] left-[900px] bottom-0 overflow-hidden h-[1080px]"
          src="/img/phone.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default P2;
