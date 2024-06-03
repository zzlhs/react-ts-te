import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import Data from "./pages/Paper/Data";
// import Views from "./pages/Paper/Views";
import User from "./pages/User";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="home" element={<Home />}>
          <Route index path="index" element={<h1>欢迎使用应用同步</h1>} />
          <Route index path="user" element={<User />} />
          <Route index path="list" element={<Data />} />
        </Route>


      </Routes>
    </BrowserRouter>
  );
}
