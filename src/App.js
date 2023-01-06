import "./App.css";
import Header from "./Header/Header";
import Body from "./Body/Body";
import All from "./All";
import SignIn from "./SignIn";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Body />
    <Routes>
      <Route path="/all" element={ <All /> } />
      <Route path="/SignIn" element={<SignIn />} />
    </Routes>
    </>
  );
}

export default App;
