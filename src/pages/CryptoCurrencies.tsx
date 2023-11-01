import { useState, useEffect } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "../components/Loader";
import CryptoCard from "../components/CryptoCard";
import { search } from "../assets";
import { Coin } from "Models";

const CryptoCurrencies = () => {
  const { data, isFetching } = useGetCryptosQuery(100);
  const [searchTerm, setSearchTerm] = useState("");
  const [cryptos, setCryptos] = useState<Coin[]>();

  useEffect(() => {
    setCryptos(data?.data.coins);
    const filteredData = data?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setCryptos(filteredData);
  }, [data?.data.coins, searchTerm]);

  if (isFetching) return <Loader />;

  return (
    <div className="flex flex-col">
      <p className="font-epilogue font-semibold text-[16px] text-white mb-3">
        Crypto Currencies
      </p>
      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]">
        <input
          type="text"
          placeholder="Search  crypto"
          onChange={(e) => setSearchTerm(e.target.value.toLocaleLowerCase())}
          className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none"
        />
        <div className="w-[72px] h-[35px] rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer">
          <img
            src={search}
            alt="search"
            className="w-[15px] h-[15px] object-contain"
          />
        </div>
      </div>
      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        <CryptoCard coins={cryptos ?? []} />
      </div>
    </div>
  );
};

export default CryptoCurrencies;
