/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { fetchCountryData } from "../services/api";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

const SituationByCountry = ({ uf }) => {
  const [countryData, setCountryData] = useState(null);
  const [previousData, setPreviousData] = useState({
    cases: 0,
    deaths: 0,
  });
  const [newData, setNewData] = useState({
    newCases: 0,
    newDeaths: 0,
  });
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchCountryData(uf);
      const data = response.data;

      // Calcula novas mortes, casos confirmados e recuperados
      const newCases = data.cases - previousData.cases;
      const newDeaths = data.deaths - previousData.deaths;

      // Formata a data e hora de atualização
      const updatedAt = new Date(data.datetime);
      const formattedDate = format(updatedAt, "dd/MM/yyyy - HH:mm", {
        locale: ptBR,
      });

      // Atualiza os estados
      setNewData({
        newCases,
        newDeaths,
      });
      setPreviousData({
        cases: data.cases,
        deaths: data.deaths,
      });
      setLastUpdated(formattedDate);
      setCountryData(data);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uf]);

  if (!countryData) return <p>Loading...</p>;

  return (
    <div className="border border-[#53C8A480] rounded-[10px] p-3  text-center max-w-[500px]">
      <p className="text-xs text-[#003838] mb-2">UPDATED: {lastUpdated}</p>
      <h2 className="text-xl font-bold text-[#003838]">{countryData.state}</h2>
      <p className="text-lg font-medium text-[#003838] m-[0px] tracking-wide">
        {countryData.cases}
      </p>
      <p className="text-[#53C8A4] font-medium">CONFIRMED CASES</p>
      <p className="text-lg font-medium text-[#003838] mt-1 tracking-wide">
        {countryData.deaths}
      </p>
      <p className="text-[#53C8A4] font-medium">CASES OF DEATH</p>

      <div className="grid grid-cols-2 border-t border-[#53C8A480] mt-4 pt-2 text-sm ">
        <div className="text-left">
          <p className="text-[#003838] font-normal">{newData.newDeaths}</p>
          <p className="text-[8px] text-[#53C8A4] ">NEW DEATHS</p>
        </div>
        <div className="">
          <p className="text-[#003838] font-normal">487,695</p>
          <p className="text-[8.2px] text-[#53C8A4] ml-5 tracking-wide font-medium">
            NEW RECOVEREDS
          </p>
        </div>
        <div className="text-left">
          <p className="text-[#003838] font-normal">{newData.newCases}</p>
          <p className="text-[8px] text-[#53C8A4] ">NEW CONFIRMED</p>
        </div>
        <div className="">
          <p className="text-[#003838] font-normal">574,365</p>
          <p className="text-[8.2px] text-[#53C8A4] ml-7 tracking-wide ">
            TOTAL RECOVEREDS
          </p>
        </div>
      </div>
    </div>
  );
};

export default SituationByCountry;