import { Chart } from "react-google-charts";
import './App.css'

function App() {
  const options = {
    title: "My Daily Activities",
  };
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  return (
    <>
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </>
  )
}

export default App
