import Error404 from "components/Error404";
import Error504 from "components/Error504";
import Footer from "components/Footer";
import Header from "components/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import Airtime from "scenes/Airtime";
import Dashboard from "scenes/Dashboard";
import Help from "scenes/Help";
import Login from "scenes/Login";
import Transaction from "scenes/Transaction";
import User from "scenes/User";


function App() {
const location = useLocation();

const isErrorPage = 
    location.pathname === '/404' || 
    location.pathname === '/504' || 
    location.pathname === '/'; 

  return (
   <>
   {!isErrorPage && <Header/>}
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/Airtime-to-Cash" element={<Airtime/>}/>
      <Route path="/Transaction-History" element={<Transaction/>}/>
      <Route path="/Help&Support" element={<Help/>}/>
      <Route path="/User-settings" element={<User/>}/>
      <Route path="/404" element={<Error404/>}/>
      <Route path="/504" element={<Error504/>}/>
    </Routes>
    {!isErrorPage && <Footer/>}
   </>
  );
}

export default App;
