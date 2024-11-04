import axios from "axios";

const api = axios.create({
  baseURL: "https://covid19-brazil-api.now.sh/api/report/v1",
});

export const fetchGlobalData = () => api.get("/countries");
export const fetchCountryData = (uf) => api.get(`/brazil/uf/${uf}`);
