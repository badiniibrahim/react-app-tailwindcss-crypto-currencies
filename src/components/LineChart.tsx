import { FC } from "react";
import { Line } from "react-chartjs-2";

type Props = {
  coinHistory: any;
  currentPrice: any;
  coinName: any;
};
const LineChart: FC<Props> = ({ coinHistory, coinName, currentPrice }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options: any = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <div className="flex flex-row justify-between gap-[50px] text-white">
        <div className="text-white mt-3">{coinName} Price Chart </div>
        <div className="flex flex-col price-container">
          <div className="font-[900]">Change: {coinHistory?.data?.change}%</div>
          <div className="font-[900]">
            Current {coinName} Price: $ {currentPrice}
          </div>
        </div>
      </div>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
