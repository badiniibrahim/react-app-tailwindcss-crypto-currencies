import React, { FC } from "react";
import { Coin } from "Models";

type Props = {
  coins: Coin[];
  setNewsCategory: (value: string) => void;
  newsCategory: string;
};

const Dropdowns: FC<Props> = ({ coins, setNewsCategory, newsCategory }) => {
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNewsCategory(event.target.value);
  };

  return (
    <div>
      <select
        value={newsCategory}
        onChange={handleOptionChange}
        className="border border-gray-300 p-2 rounded-md"
      >
        <option value="">Select an option</option>
        {coins.map((item: Coin) => (
          <option key={item.uuid} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdowns;
