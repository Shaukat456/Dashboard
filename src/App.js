import logo from "./logo.svg";
import "./App.css";
import Cards from "./components/Cards";
import WelcomeBack from "./components/WelcomeBack";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import { Sidebar } from "./components/Sidebar";
import TopAppData from "./TopAppData";
import { TopAuthors } from "./components/TopAuthors";
import { LineChart } from "./components/LineChart";
import { LineChartCard } from "./components/LineChartCard";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import TopC from "./components/TopC";
import {
  FaTrophy,
  FaHeart,
  FaWindows,
  FaAndroid,
  FaApple,
  FaSignal,
} from "react-icons/fa";
import PieChart from "./components/PieChart";
import { Card } from "@material-tailwind/react";

function App() {
  console.log(TopAppData);
  return (
    <>
    <div className="flex">
      {/* <Navbar/> */}
      <Sidebar/>
      <div class="grid   lg:grid-cols-3 gap-3 mx-5 md:grid-cols-2 sm:grid-cols-1 grid-cols-none ">
        
        {/* <Navbar/> */}
        
        <div class="md:col-span-2 col col-span-1 ">
          <WelcomeBack />
        </div>

<TopAuthors/>
        {/* <Slider /> */}
        {/* <Table/> */}


        <Cards  color={'green'}/>
        <Cards  color="blue"/>
        <Cards  color="orange"/>

        {/* <div className=""> */}
          {/* <TopAuthors/> */}
        {/* </div> */}
          {/* <WelcomeBack /> */}

          {/* <TopAuthors/> */}
          <PieChart/>


        <div className="col-span-2">
        <LineChartCard/>

        </div>


        <div class="col-span-2 my-2 ">
    <Table/>
        </div>
        <div className="flex flex-col">
          <Card2/>
          <Card3/>
        </div>
        <TopC/>

      </div>
      </div>

    </>
  );
}

export default App;
