import "./App.css";
import Body from "./Body/Body";
import { ToastContainer } from 'react-toastify';
import LoaderHoc from "./hoc/loader";
import { Route, Routes } from "react-router-dom";
import Cart from "./Body/Cart";
import Signin from "./Signin";
import Register from "./Register";

function App() {

  return (
    <>
    <ToastContainer />
    <LoaderHoc />
    <Routes>
      <Route path="/" element={ <Body /> } />
      <Route path="/register" element={<Register />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" component={<Body />} />
    </Routes>
    </>
  );
}

export default App;
