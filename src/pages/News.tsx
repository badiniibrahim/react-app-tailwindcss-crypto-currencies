import { useState } from "react";
import Loader from "../components/Loader";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import CryptoNewCard from "../components/CryptoNewCard";
import Dropdowns from "../components/Dropdowns";
import { useGetCryptosQuery } from "../services/cryptoApi";

const News = () => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: coinsList } = useGetCryptosQuery(100);
  const { data, isFetching } = useGetCryptoNewsQuery({
    newsCategory,
    count: 12,
  });

  if (isFetching) return <Loader />;

  return (
    <div className="flex flex-col">
      <p className="font-epilogue font-semibold text-[16px] text-white">
        Cryptos news
      </p>
      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pr-2">
        <Dropdowns
          coins={coinsList?.data.coins ?? []}
          setNewsCategory={setNewsCategory}
          newsCategory={newsCategory}
        />
      </div>
      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        <CryptoNewCard value={data?.value ?? []} />
      </div>
    </div>
  );
};

export default News;
