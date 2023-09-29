import { LineChart } from "@mui/x-charts/LineChart";

export default function BasicArea() {
  return (
    <LineChart
      leftAxis={null}
      bottomAxis={null}
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area: true,
          color: "#F4CC8F",

        },
      ]}
      width={300}
      height={300}
      sx={{ width: '100px', mt:'-215px', mr: 3.5}}
    />
  );
}
