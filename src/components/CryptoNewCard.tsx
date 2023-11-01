import { FC, useId } from "react";
import { Value } from "Models";
import moment from "moment";

type Props = {
  value: Value[];
};
const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const CryptoNewCard: FC<Props> = ({ value }) => {
  const id = useId();

  return value.map((item: Value) => {
    return (
      <div
        key={`${id}-${item.name}`}
        className="flex flex-col bg-white w-[290px] rounded-[5px] cursor-pointer hover:bg-[#d3d3da] h-min pb-4"
      >
        <div className="flex flex-row justify-between m-4">
          <div className="text-left leading-[26px]">{item.name}</div>
          <img
            src={item.image?.thumbnail.contentUrl || demoImage}
            alt={item.name}
            className="w-[100px] h-[100px] rounded-[20px] object-cover"
          />
        </div>
        <p className="flex flex-row justify-between m-4 font-epilogue font-regular text-[11px]">
          {item.description.length > 100
            ? `${item.description.substring(0, 100)}...`
            : item.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={item.provider[0]?.image?.thumbnail?.contentUrl || demoImage}
              alt=""
              className="inline-block h-5 w-5 rounded-full mr-1 ml-[13px]"
            />
            <p className="ml-[13px] text-[10px]">{item.provider[0]?.name}</p>
          </div>
          <p className="mr-[13px] text-[10px]">
            {moment(item.datePublished).startOf("s").fromNow()}
          </p>
        </div>
      </div>
    );
  });
};

export default CryptoNewCard;
