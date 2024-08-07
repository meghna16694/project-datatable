import logo from './logo.svg';
import './App.css';
// import Fetch from './Components/Fetch';
import Bag from './Components/Bag';
import { AllRoutes } from './Components/AllRoutes';
import { Navbaar } from './Components/Navbaar';

function App() {
  return (
   <>
   <div style={{backgroundColor:'black'}}>
     <Navbaar/>
      <AllRoutes/>
      </div>
   </>
  );
}

export default App;
