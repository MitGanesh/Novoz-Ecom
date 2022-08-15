import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Pay from './pages/Pay';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Success from './pages/Success';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(state => state.user.currUser);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products/:category" element={<ProductList />} />
          <Route exact path="/product/:id" element={<Product />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/login" element={user ? <Navigate to="/" replace={true} /> : <Login />} />
          <Route exact path="/register" element={user ? <Navigate to="/" replace={true} /> : <Register />} />
          <Route exact path="/pay" element={<Pay />} />
          <Route exact path="/success" element={<Success />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
