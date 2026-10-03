import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Empleos from "./pages/Empleos";
import Footer from "./components/Footer";
import Empresas from "./pages/Empresas";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Salarios from "./pages/Salarios";
import Publicar from "./pages/Publicar";
import Perfil from "./pages/Perfil";
import JobDescription from "./pages/JobDescription";
import "./styles/index.css";
import PageNotFound from "./pages/PageNotFound";
import EnConstruccion from "./pages/EnConstruccion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empleos" element={<Empleos />} />
        <Route path="/empleos/:id" element={<JobDescription />} />
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/salarios" element={<Salarios />} />
        <Route path="/publicar" element={<Publicar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/construccion" element={<EnConstruccion />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
