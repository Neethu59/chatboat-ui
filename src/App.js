
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
