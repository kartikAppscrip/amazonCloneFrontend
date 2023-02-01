import "./App.css";
import Header from "./Header/Header";
import Body from "./Body/Body";
import All from "./All";
import SignIn from "./SignIn";
import { Route, Routes } from "react-router-dom";
import Cart from "./Body/Cart";
function App() {
  return (
    <>
      <Header />
    <Routes>
      <Route path="/" element={ <Body /> } />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </>
  );
}

export default App;
