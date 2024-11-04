import SlideBack from "../assets/SlideBack.png";

function Header() {
  return (
    <div className="relative w-full h-auto">
      <img src={SlideBack} alt="SlideBack" className="w-full h-[210px]" />

      <div className="absolute inset-0 flex flex-col text-center items-center justify-center p-4">
        <p className="text-sm tracking-widest font-light">
          <span className="text-[#FFFFFF]">#</span>
          <span className="text-[#53C8A4]">STAY</span>
          <span className="text-[#FFFFFF]">AT</span>
          <span className="text-[#53C8A4]">HOME</span>
        </p>
        <h1 className="text-4xl text-[#FFFFFF] font-bold italic tracking-wider p-2 text">
          TASCOM
        </h1>
        <p className="text-[#FFFFFF] font-normal text-3xl">
          COVID <span className="text-[#53C8A4]">SUMMARY</span>
        </p>
      </div>
    </div>
  );
}

export default Header;