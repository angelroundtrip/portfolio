import '../App.css';
import { Routes, Route } from "react-router-dom";
import FrontPage from './FrontPage';


function App() {

  return (
    <div>

    <Routes>

      <Route path="/" element={<FrontPage />}/>

    </Routes>
    
  </div>
  );
}

export default App
