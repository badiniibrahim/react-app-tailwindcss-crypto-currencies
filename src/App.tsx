import { Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import CryptoCurrencies from "./pages/CryptoCurrencies";
import News from "./pages/News";
import CryptoDetail from "./pages/CryptoDetail";

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <SideBar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <div className="flex md:flex-row flex-col-reverse justify-between mb-[85px] gap-6"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
          <Route path="/news" element={<News />} />
          <Route path="/cryptoDetail/:coinId" element={<CryptoDetail />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
