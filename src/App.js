import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import NotFount from "./Pages/Shared/NotFount/NotFount";
import Login from "./Pages/Login/Login/Login";
import Services from "./Pages/Services/Services/Services";
import Blogs from "./Pages/Blogs/Blogs/Blogs";
import About from "./Pages/About/About/About";
import Register from "./Pages/Login/Register/Register";
import CheckOut from "./Pages/Services/CheckOut/CheckOut";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import MoreInFo from "./Pages/Services/MoreInFo/MoreInFo";

function App() {
  // const auth = getAuth(app);
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/moreinfo/:moreinfoId" element={<MoreInFo></MoreInFo>}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }
        ></Route>
        <Route path="/NotFount" element={<NotFount></NotFount>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
