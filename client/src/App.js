
import { useRoutes } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar";
import {routes} from './routes'


function App() {
  const elements = useRoutes(routes)
  return (
    <div>
      <NavBar/>
      {elements}
 
    </div>
  );
}

export default App;
