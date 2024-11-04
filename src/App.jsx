import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalSituation from "./components/GlobalSituation";
import SituationByCountryList from "./components/SituationByCountryList";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <GlobalSituation />
      <SituationByCountryList />
      <Footer />
    </div>
  );
}

export default App;
