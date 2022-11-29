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
import { PieCard } from "./components/PieCard";
import { TopApp } from "./components/TopApp";

function App() {
  console.log(TopAppData);
  return (
    <>
    <div className="flex ">
      {/* <Navbar/> */}
      <Sidebar/>
        <div className="flex flex-col">
        <Navbar/>

    
      <div class="grid my-24  lg:grid-cols-3 gap-3 mx-5 md:grid-cols-2 sm:grid-cols-1 grid-cols-none ">
        
        
        <div class="md:col-span-2 col col-span-3 ">
          <WelcomeBack />
        </div>
<div className="md:col-span-1  col-span-3 w-full">

<TopAuthors/>
</div>
        {/* <Slider /> */}
        {/* <Table/> */}

        <div className="md:col-span-1  col-span-3">

        <Cards  color={'green'}/>
        </div>
        <div className="md:col-span-1  col-span-3">
        <Cards  color="blue"/>

        </div>
        <div className="md:col-span-1   col-span-3">

        <Cards  color="orange"/>
        </div>

        {/* <div className=""> */}
          {/* <TopAuthors/> */}
        {/* </div> */}
          {/* <WelcomeBack /> */}

          {/* <TopAuthors/> */}
          <div className="lg:col-span-1 col-span-3 place-items-center">

          <PieCard/>
          </div>


        <div className="lg:col-span-2 col-span-3">
        <LineChartCard/>

        </div>


        <div class="lg:col-span-2 col-span-3 my-2 ">
    <Table/>
        </div>
       
        <TopApp/>

      <div className="lg:col-span-1  col-span-3 hover:overflow-x-scroll overflow-x-hidden  scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thin  scrollbar-rounded ">

        <TopC  />
      </div>
      <div className="lg:col-span-1 col-span-3 place-items-center">

      <TopAuthors/>
      </div>
      <div className="lg:col-span-1 col-span-3">

       <div className="flex flex-col  ">
          <Card2/>
          <Card3/>

        </div>
      </div>
      </div>
     
      </div>
        {/* <Slider/> */}
        </div>

    </>
  );
}

export default App;
