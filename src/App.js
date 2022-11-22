import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';
import WelcomeBack from './components/WelcomeBack';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import Table from './components/Table';
import { Sidebar } from './components/Sidebar';
import Render from './components/Render';
import TopAppData from './TopAppData'
import { TopAuthors } from './components/TopAuthors';
import { LineChart } from './components/LineChart';
import { LineChartCard } from './components/LineChartCard';
import Card2  from './components/Card2';
import Card3 from './components/Card3';

function App() {
  console.log(TopAppData)
  return (
    <>
    <div className='flex'>
    <Sidebar/> 
    <div className="flex-col">
    <WelcomeBack/>


<div className="lg:flex space-x-11">
<LineChartCard/>
</div>

<TopAuthors/>
    </div>

    {/* <Navbar/> */}
</div>

    <Card2/>
    <Card3/>
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
