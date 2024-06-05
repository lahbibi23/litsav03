
import { useNavigate } from "react-router"
import "./hero.css"
import Navig from "../../navigation/Navig"

function Hero() {

    
    const navigate = useNavigate()
    return (
        <>
        <Navig/>
        <div className='hero-section  flex'>
         
             <div className="hero-left-section  flex border" style={{position:"relative"}} >
                 <p className="sub-title  "  style={{textAlign:"center", alignSelf:"center"}}>Le Laboratoire de Recherche : Innovation Technologique et Sécurité
                     Alimentaire (LITSA) organise : <br />  <br />
                     Les 1 ères Journées Scientifiques sur la :<br />
                     Valorisation des Bioressources et Nutrition Fonctionnelle <br /> <br />
                     le 1 er et 2 Mars 2024 à l’Ecole Supérieure des Industries
                     Alimentaires de Tunis (ESIAT)
                     </p>
                 <button className="plus" onClick={() => { navigate("/inscription") }}>S'inscrire</button>
            
                 </div>
            
             <section className='hero-right-section  '>
            
                <  img src="/images/image2.jpg" alt="" />
            
             </section>
             
            

       




        </div>
        </>
    )
}

export default Hero