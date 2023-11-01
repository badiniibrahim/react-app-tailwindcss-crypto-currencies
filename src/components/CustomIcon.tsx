import React, { FC } from "react";

type Props = {
  styles?: string;
  name?: string;
  imgUrl?: string;
  isActive?: string;
  disabled?: string;
  handleClick?: () => void;
};

const Icon: FC<Props> = ({
  name,
  imgUrl,
  isActive,
  disabled,
  styles,
  handleClick,
}) => {
  return (
    <div
      className={`w-[48px] h-[48px] rounded-[10px] ${
        isActive && isActive === name && "bg-[#2c2f32]"
      } flex justify-center items-center ${
        !disabled && "cursor-pointer"
      } ${styles}`}
      onClick={handleClick}
    >
      {!isActive ? (
        <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
      ) : (
        <img
          src={imgUrl}
          alt="fund_logo"
          className={`w-1/2 h-1/2 ${isActive !== name && "grayscale"}`}
        />
      )}
    </div>
  );
};

export default Icon;
