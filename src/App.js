import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import Admin from "./pages/Admin";
import Public from "./view/Public";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
