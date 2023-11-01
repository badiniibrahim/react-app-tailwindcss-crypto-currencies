import { useState, useId } from "react";
import { useParams } from "react-router-dom";
import millify from "millify";
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../services/cryptoApi";
import Loader from "../components/Loader";
import LineChart from "../components/LineChart";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
const CryptoDetail = () => {
  const { coinId } = useParams();
  const id = useId();
  const [timePeriod, setTimePeriod] = useState<any>("7d");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timeperiod: timePeriod,
  });
  const cryptoDetails = data?.data?.coin;

  if (isFetching) return <Loader />;

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    {
      title: "24h Volume",
      value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  return (
    <div className="flex flex-col m-[30px">
      <div className="flex flex-col justify-center items-center py-[20px] gap-[10px]">
        <div className="font-epilogue font-semibold text-[16px] text-white">
          {data?.data?.coin.name} ({data?.data?.coin.symbol}) Price
        </div>
        <p className="font-epilogue text-white">
          {cryptoDetails.name} live price in US Dollar (USD). View value
          statistics, market cap and supply.
        </p>
      </div>
      <select
        defaultValue="7d"
        className="w-[200px] mt-[20px] border border-gray-300 p-2 rounded-md outline-none"
        placeholder="Select Timeperiod"
        onChange={(value) => setTimePeriod(value.target.value)}
      >
        {time.map((date) => (
          <option key={date}>{date}</option>
        ))}
      </select>

      <LineChart
        coinHistory={coinHistory}
        currentPrice={millify(cryptoDetails?.price)}
        coinName={cryptoDetails?.name}
      />

      <div className="flex flex-row justify-between items-center gap-[40px]">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="font-epilogue text-white">
              {cryptoDetails.name} Value Statistics
            </div>
            <p className="font-epilogue text-white">
              An overview showing the statistics of {cryptoDetails.name}, such
              as the base and quote currency, the rank, and trading volume.
            </p>
          </div>
          {stats.map(({ icon, title, value }) => (
            <div
              key={`${id}-${title}`}
              className="flex justify-between p-[20px] opacity-[0.9] text-sm border-[1px] text-white"
            >
              <div className="flex text-sm gap-[20px] text-white">
                <div>{icon}</div>
                <div>{title}</div>
              </div>
              <div className="font-[800]">{value}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="font-epilogue text-white">Other Stats Info</div>
            <p className="font-epilogue text-white">
              An overview showing the statistics of {cryptoDetails.name}, such
              as the base and quote currency, the rank, and trading volume.
            </p>
          </div>
          {genericStats.map(({ icon, title, value }) => (
            <div
              key={`${id}-${title}`}
              className="flex justify-between p-[20px] opacity-[0.9] text-sm border-[1px] text-white"
            >
              <div className="flex text-sm gap-[20px] text-white">
                <div>{icon}</div>
                <div>{title}</div>
              </div>
              <div className="font-[800]">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoDetail;
