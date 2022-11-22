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

function App() {
  console.log(TopAppData)
  return (
    <>
    {/* <div className='flex'>
    <Sidebar/> */}
    {/* <Navbar/> */}

    {/* <WelcomeBack/> */}
{/* </div> */}
    {/* <Render movies={TopAppData}/> */}
    {/* <Table/> */}
    {/* </div> */}
    {/* <Navbar/>
  <WelcomeBack/> */}
  {/* <Table/> */}
{/* <Render /> */}
<TopAuthors/>
{/* <Sidebar/> */}
{/* <Navbar/> */}
    </>
  );
}

export default App;
