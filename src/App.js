import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';
import WelcomeBack from './components/WelcomeBack';
import Slider from './components/Slider';
import Table from './components/Table';

function App() {
  return (
    <>
    {/* <div className='lg:flex w-full  '>

  <Cards />
  <Cards />
  <Cards />
    </div> */}
    
  <WelcomeBack/>
  <Table/>
  {/* <Slider/> */}
  

    </>
  );
}

export default App;
