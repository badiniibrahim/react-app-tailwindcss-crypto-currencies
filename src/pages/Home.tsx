import CryptoCard from "../components/CryptoCard";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "../components/Loader";

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);

  if (isFetching) return <Loader />;

  return (
    <div className="flex flex-col">
      <p className="font-epilogue font-semibold text-[16px] text-white">
        Top 10 Cryptos In The World
      </p>
      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        <CryptoCard coins={data?.data.coins ?? []} />
      </div>
    </div>
  );
};

export default Home;
