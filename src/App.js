import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LandingPage from './Component/LandingPage/LandingPage';
import Service from './Component/Service/Service';
import Topbar from './Component/Topbar/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <LandingPage/>
      <Service/>
    </div>
  );
}

export default App;
