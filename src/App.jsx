import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
import NotFoundPage from "./pages/NotFoundPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Protect from "./components/Protect";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/add" element={<AddTask></AddTask>}></Route>
        <Route
          path="/edit/:id"
          element={
            <Protect>
              <EditTask></EditTask>
            </Protect>
          }
        ></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        {/* <AddTask></AddTask>
        <EditTask></EditTask>
        <NotFoundPage></NotFoundPage>
        <SignIn></SignIn>
        <SignUp></SignUp> */}
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
