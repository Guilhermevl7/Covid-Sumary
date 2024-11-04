import SituationByCountry from "./SituationByCountry";

const SituationByCountryList = () => {
  const ufs = ["SP", "RJ", "MG", "PE"];

  return (
    <div>
      <h2 className="text-xs font-light tracking-widest text-[#53C8A4] ml-40 mt-9">
        #USEMASKS
      </h2>
      <h1 className="text-[44px] font-bold text-[#003838] ml-40 mt-1">
        SITUATION BY COUNTRY
      </h1>
      <div className="p-6 mx-[136px] ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ufs.map((uf) => (
            <SituationByCountry key={uf} uf={uf} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SituationByCountryList;