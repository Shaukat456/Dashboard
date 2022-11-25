import logo from "./logo.svg";
import "./App.css";
import Cards from "./components/Cards";
import WelcomeBack from "./components/WelcomeBack";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import { Sidebar } from "./components/Sidebar";
import Render from "./components/Render";
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

function App() {
  console.log(TopAppData);
  return (
    <>
    <div className="flex">
      {/* <Navbar/> */}
      <Sidebar/>
      <div class="grid   grid-cols-3 gap-3 mx-5 ">
        <div class="col-span-2 ">
          <WelcomeBack />
        </div>

<TopAuthors/>
        {/* <Slider /> */}
        {/* <Table/> */}

        <Cards />
        <Cards />
        <Cards />

        {/* <div className=""> */}
          {/* <TopAuthors/> */}
        {/* </div> */}
          {/* <WelcomeBack /> */}

          <TopAuthors/>


        <div className="col-span-2">
        <LineChartCard/>

        </div>


        <div class="col-span-2 ">
    <Table/>
        </div>
        <TopC/>
      </div>
      </div>

      <div className="flex space-y-6 ">
        {/* <Navbar/> */}
        <Sidebar />
        <div className="flex-col ">
          <div class="col-span-2 ...">
            <WelcomeBack />
          </div>
          <div className="lg:flex space-x-11 space-y-10">
            <LineChartCard />
          </div>

          <TopAuthors />
        </div>

        {/* <Navbar/> */}
      </div>

      <Card2 />
      <Card3 />
      {/* <TopC/> */}
      <div className="flex space-x-9 space0">
        <Cards />
        <Cards />
        <Cards />
      </div>
      {/* <LineChart/> */}
      {/* </div>
    {/* <Render movies={TopAppData}/> */}
      {/* <Table/> */}
      {/* </div> */}
      {/* <Navbar/>
  <WelcomeBack/> */}
      {/* <Table/> */}
      {/* <Render /> */}
      {/* <Sidebar/> */}
      {/* <Navbar/> */}
    </>
  );
}

export default App;
