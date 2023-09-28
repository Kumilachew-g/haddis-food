import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import OrdersPage from './pages/OrdersPage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/cart' exact element={<CartPage />} />
          <Route path='/register' exact element={<Register />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/orders' exact element={<OrdersPage />} />
          <Route path='/admin/*' element={<AdminPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
