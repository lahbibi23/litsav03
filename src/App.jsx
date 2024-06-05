import Acceuil from "./componentrs/acceuil/Acceuil";
import Insscrip from "./componentrs/journées/inscription/Insscrip";
import Contact from "./componentrs/journées/Contact";
import Hero from "./componentrs/acceuil/hero/Hero";
import Journées from "./componentrs/journées/presentation/Journées";
import  Com  from "./componentrs/journées/comité/Com";
import { Route, Routes } from "react-router-dom";
import Footer from "./componentrs/footer/Footer";
import Accmain from "./componentrs/acceuil/accmain/Accmain";
import Manifestations from "./componentrs/manifestations/Manifestations";
import Appel from "./componentrs/journées/appel/Appel";
import Insaa from "./componentrs/journées/Instructions aux auteurs/Insaa";
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="actualités" element={<Hero />} />
        <Route path="Présentation" element={<Accmain />} />
        <Route path="premiere edition" element={<Journées />} />
        <Route path="inscription" element={<Insscrip />} />
        <Route path="contact" element={<Contact />} />
        <Route path="participation" element={<Appel />} />
        <Route path="Manifestations" element={<Manifestations />} />
        <Route path="Instructions aux auteurs" element={<Insaa />} />
        <Route path="comités" element={< Com/>} />
      </Routes>

      <div
        className="divider"
        style={{ marginTop: "10rem", marginBottom: "1rem" }}
      />
      <Footer />
    </div>
  );
}

export default App;
