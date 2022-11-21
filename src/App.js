import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';
import WelcomeBack from './components/WelcomeBack';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import Table from './components/Table';
import { Sidebar } from './components/Sidebar';


function App() {
  return (
    <>
    <div className='flex'>
    <Sidebar/>
    {/* <Navbar/> */}
    <WelcomeBack/>

    </div>
    <Table/>
    {/* <Navbar/>
  <WelcomeBack/> */}
  {/* <Table/> */}
    </>
  );
}

export default App;
