import { useEffect, useState } from "react";
import { fetchGlobalData } from "../services/api";
import Graph from "../assets/Graph.png";

const GlobalSituation = () => {
  const [loading, setLoading] = useState(true);
  const [totalConfirmed, setTotalConfirmed] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchGlobalData();
        const countriesData = response.data.data;
        let confirmedCount = 0;
        let deathsCount = 0;

        countriesData.forEach((country) => {
          confirmedCount += country.confirmed;
          deathsCount += country.deaths;
        });

        setTotalConfirmed(confirmedCount);
        setTotalDeaths(deathsCount);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-xs font-light tracking-widest text-[#53C8A4] ml-40 mt-9 ">
        #WASHYOURHANDS
      </h2>
      <h1 className="text-[44px] font-bold text-[#003838] ml-40 mt-1">
        GLOBAL SITUATION
      </h1>
      <div className="px-6 py-4 rounded-[10px] border border-[#53C8A480] mx-40 mt-6 mb-6">
        <div className="grid grid-cols-6 gap-4 mt-6">
          <div className="col-span-2 flex flex-col">
            <div>
              <p className="text-4xl font-bold text-[#003838]">
                {totalConfirmed.toLocaleString()}
              </p>
              <p className="text-xs font-normal tracking-widest text-[#53C8A4] mt-1">
                CONFIRMED CASES
              </p>
            </div>
            <div className="mt-8">
              <p className="text-4xl font-bold text-[#003838]">
                {totalDeaths.toLocaleString()}
              </p>
              <p className="text-xs font-normal tracking-widest text-[#53C8A4] mt-1">
                CASES OF DEATH
              </p>
            </div>
            <p className="text-xs text-[#003838] mt-[169px]">
              UPDATED: 11/08/2023 -{" "}
              <span className="text-[#53C8A4]">14:33</span>
            </p>
          </div>

          <div className="col-span-2 ml-[-140px] border-l-2 border-[#53C8A421] pl-5 mt-[-10px] space-y-0.5 ">
            <div className="mt-4">
              <p className="text-sm font-medium text-[#003838] ">274,493</p>
              <p className="text-[10px] font-normal tracking-widest text-[#53C8A4]">
                NEW DEATHS
              </p>
            </div>
            <div className="mt-2">
              <p className="text-sm font-medium text-[#003838]">158,790</p>
              <p className="text-[10px] font-normal tracking-widest text-[#53C8A4]">
                NEW CONFIRMED
              </p>
            </div>
            <div className="mt-2">
              <p className="text-sm font-medium text-[#003838]">48.769,695</p>
              <p className="text-[10px] font-normal tracking-widest text-[#53C8A4]">
                NEW RECOVEREDS
              </p>
            </div>
            <div className="mt-2">
              <p className="text-sm font-medium text-[#003838]">87.436,315</p>
              <p className="text-[10px] font-normal tracking-widest text-[#53C8A4]">
                TOTAL RECOVEREDS
              </p>
            </div>
          </div>

          <div className="col-span-2 flex items-center justify-center  p-3">
            <div className="-ml-96">
              <img src={Graph} alt="Graph" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalSituation;