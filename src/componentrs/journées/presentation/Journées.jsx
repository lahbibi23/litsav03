import "./Journées.css";
import Navig from "../../navigation/Navig";

function Journées() {
  return (
    <>
      <Navig />
      {/* slide */}
      <div className="slide-container flex ">
        <img src="/images/imjourne.png" alt="" height={"50%"} width={"50%"} />
      </div>
      {/* presentation de l'évenement  */}
      <div
        className="divider"
        style={{ marginTop: "2rem", marginBottom: "1rem" }}
      />
      <h3>La 1 ère édition des « Journées Scientifiques LITSA »</h3>
      <div
        className="divider"
        style={{ marginTop: "2rem", marginBottom: "1rem" }}
      />

      <section className="presentation  ">
        Ces journées vont permettre la rencontre de jeunes chercheurs,
        d’éminents enseignants chercheurs nationaux et internationaux, ainsi que
        des professionnels et institutions œuvrant dans les domaines des
        industries alimentaires et de valorisation des résultats de recherche.{" "}
        <br /> <br />
        Les Journées Scientifiques LITSA permettront de mener divers contrats de
        recherche entre chercheurs et professionnels permettront de faire
        progresser leurs compétences méthodologiques et savoir scientifique.
      </section>

      <div
        className="divider"
        style={{ marginTop: "2rem", marginBottom: "1rem" }}
      />
      <h3>Thémes</h3>
      <div
        className="divider"
        style={{ marginTop: "2rem", marginBottom: "1rem" }}
      />

      <div className="themes-container   flex ">
        <div className="theme ">
          Nutrition fonctionnelle <br />
          <img src="" alt=" thème 1" />
        </div>
        <div className="theme  ">
          Technologies et procédés innovants <br />
          <img src="" alt=" thème 2 " />
        </div>
        <div className="theme ">
          Sécurité alimentaires <br />
          <img src="" alt=" thème 3 " />
        </div>
      </div>

      <div
        className="divider "
        style={{ marginTop: "2rem", marginBottom: "1rem" }}
      />
      <h3>Date et Lieu</h3>
      <div
        className="divider"
        style={{ marginTop: "2rem", marginBottom: "1rem" }}
      />

      <div className="détails flex  ">
        <section className=" ">
          <div className="flex  " style={{alignItems:"center"}} >
            <span className="icon-calendar1"></span>
            <span style={{color:"black",fontWeight:"bold"}}>Date</span>
          </div>
          <div className="presentation ">
            {" "}
            Les journées scientifiques du LITSA se tiendront <br /> le 1 et 2
            Mars 2024
          </div>
        </section>

        <section className=" ">
          <h4 className="flex " style={{ alignItems: "center" }}>
            <span className="icon-location_on"></span>
            <span style={{color:"black",fontWeight:"bold"}}>Lieu</span>
          </h4>
          <div className="presentation ">
            l`Ecole Supérieure des Industries Alimentaires de Tunis (ESIAT).
          </div>
        </section>
      </div>
    </>
  );
}

export default Journées;
