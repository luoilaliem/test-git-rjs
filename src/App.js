import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Bookings from "./pages/bookings/Bookings";
import Hotels from "./components/Admin/Hotels";
import AdminPage from "./components/Admin/Test";
import Rooms from "./components/Admin/Rooms";
import TransactionList from "./components/Admin/TransactionList";
import ClientTrans from "./components/featuredProperties/ClientTransaction";
import Addhotels from "./components/Admin/Addhotels";
function App() {
  return (
    <BrowserRouter>
    
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/transaction" element={<ClientTrans/>}/>
        <Route path="/bookings" element={<Bookings/>}/>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/admin/dashboard" element={<AdminPage/>}/>
        <Route path="/admin/hotels" element={<Hotels/>}/>
        <Route path="/admin/rooms" element={<Rooms/>}/>
        <Route path="/admin/transactions" element={<TransactionList/>}/>
        <Route path="/admin/addhotels" element={<Addhotels/>}/>
      </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
