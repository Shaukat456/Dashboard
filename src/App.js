import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';
import WelcomeBack from './components/WelcomeBack';
import Slider from './components/Slider';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    {/* <div className='lg:flex w-full  '> */}
<Navbar/>
  <Cards  />
  {/* <Cards /> */} 
    {/* </div> */}
  <WelcomeBack/>
  
  <Slider/>

  

    </>
  );
}

export default App;
