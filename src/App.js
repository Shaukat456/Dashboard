import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';
import WelcomeBack from './components/WelcomeBack';
import Slider from './components/Slider';

function App() {
  return (
    <>
    <div className='lg:flex w-full  '>

  <Cards />
  <Cards />
  <Cards />
    </div>
  <WelcomeBack/>
  {/* <Slider/> */}
  

    </>
  );
}

export default App;
