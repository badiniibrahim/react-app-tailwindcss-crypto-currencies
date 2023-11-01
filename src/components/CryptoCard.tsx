import { FC } from "react";
import { Coin } from "Models";
import millify from "millify";
import { Link } from "react-router-dom";

type Props = {
  coins: Coin[];
};

const CryptoCard: FC<Props> = ({ coins }) => {
  return coins.map((coin: Coin) => {
    return (
      <Link key={coin.uuid} to={`/cryptoDetail/${coin.uuid}`}>
        <div className="flex flex-col bg-white h-[150px] w-[190px] rounded-[10px] cursor-pointer hover:bg-[#d3d3da]">
          <div className="flex flex-row justify-between items-center m-3">
            <div className="font-epilogue font-semibold text-[16px] text-black text-left leading-[26px] truncate">
              {`${coin.rank}. ${coin.name}`}
            </div>
            <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center">
              <img
                src={coin.iconUrl}
                alt={coin.name}
                className="w-[30px] h-[30px] object-contain"
              />
            </div>
          </div>
          <div className="h-[1px] bg-[#13131a]" />
          <div className="flex flex-col font-epilogue font-regular text-[13px] ml-2">
            <p>Price: {millify(Number(coin.price))}</p>
            <p>Market Cap: {millify(Number(coin.marketCap))}</p>
            <p>Daily Change: {coin.change}%</p>
          </div>
        </div>
      </Link>
    );
  });
};

export default CryptoCard;
