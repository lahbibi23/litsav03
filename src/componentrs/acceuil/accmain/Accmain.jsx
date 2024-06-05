import Navig from "../../navigation/Navig";
import "./accmain.css";

function Accmain() {
  const data = [
    {
      grade: "Professeurs",
      enseignants: [
        {
          nom: "HASSOUNA Mnasser",
          etablissement: "ESIAT",
          universite: "Carthage",
          image: "path/to/image1.jpg",
        },
        {
          nom: "CHEOUR Foued",
          etablissement: "ISBAM",
          universite: "Gabès",
          image: "path/to/image2.jpg",
        },
        {
          nom: "BOUDICHE Sonia",
          etablissement: "ESIAT",
          universite: "Carthage",
          image: "path/to/image3.jpg",
        },
        {
          nom: "KHALDI Raoudha",
          etablissement: "INRAT",
          universite: "Carthage",
          image: "path/to/image4.jpg",
        },
      ],
    },
    {
      grade: "Maitres de Conférences",
      enseignants: [
        {
          nom: "CHOUAIBI Moncef",
          etablissement: "ESIAT",
          universite: "Carthage",
          image: "path/to/image5.jpg",
        },
        {
          nom: "BEN MOUSSA Olfa",
          etablissement: "ESIAT",
          universite: "Carthage",
          image: "path/to/image6.jpg",
        },
        {
          nom: "BOULARES Mouna",
          etablissement: "ESIAT",
          universite: "Carthage",
          image: "path/to/image7.jpg",
        },
        {
          nom: "MANKAÏ Mélika",
          etablissement: "ESIAT",
          universite: "Carthage",
          image: "path/to/image8.jpg",
        },
        {
          nom: "BELFKI Hamdi",
          etablissement: "ISET-Zaghouan",
          universite: "DGET",
          image: "path/to/image9.jpg",
        },
      ],
    },
    {
      grade: "Maitres assistants",
      enseignants: [
        {
          nom: "LAKOUD atef",
          etablissement: "ESIAT",
          universite: "Carthage",
          image: "path/to/image10.jpg",
        },
        {
          nom: "ARAFA Soumaya",
          etablissement: "ESIAT",
          universite: "Carthage",
          image: "path/to/image11.jpg",
        },
      ],
    },
    {
      grade: "Assistants",
      enseignants: [
        {
          nom: "LAMINE Slim",
          etablissement: "ESIAT",
          universite: "Carthage",
          image: "path/to/image12.jpg",
        },
        {
          nom: "MAHMOUDI Imen",
          etablissement: "ESIAT",
          universite: "Carthage",
          image: "path/to/image13.jpg",
        },
        {
          nom: "ZAGHBIB Imen",
          etablissement: "ESIAT",
          universite: "Carthage",
          image: "path/to/image14.jpg",
        },
      ],
    },
  ];


  return (
    <>
      <Navig />
      <div className="" style={{ marginTop: "8rem" }}>
        <div
          className="divider"
          style={{ marginTop: "5rem", marginBottom: "1rem" }}
        />

        <h1 className="title">Création</h1>
        <div
          className="divider"
          style={{ marginTop: "2rem", marginBottom: "1rem" }}
        />
        <article className="flex ">
          <section
            className="right-section flex "
            style={{ justifyContent: "space-between" }}
          >
            <div className=" border rightSectionF">
              Directeur du laboratoire : <br />
              <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
                Pr. Mnasser HASSOUNA
              </span>
            </div>

            <img src="/images/im2.jpeg" alt="" />
          </section>
          <section className="left-section  sub-title">
            {/* <p className="sub-title"> */}
            L’Unité de Recherche « Bio-conservation et Valorisation des Produits
            Agro- alimentaires UR13 AGR02- ESIAT» a migré en 2022 en un
            Laboratoire de Recherche « Innovation Technologique et Sécurité
            Alimentaire LR22 AGR01-ESIAT ».
            <br />
            Depuis sa création en 2022, Le laboratoire de Recherche LITSA a
            représenté un acteur dynamique dans le secteur de la recherche en
            Industries Alimentaires.
            <br />
            Ses recherches se sont basées sur le fait de soulever une
            problématique économique et sociale bâtie sur la découverte de
            nouveaux procédés et outils afin de la résoudre. <br /> Les travaux
            prospectifs des chercheurs de ce laboratoire contribuent
            inévitablement à l’évolution du domaine des industries alimentaires
            et satisfaire le besoin des consommateurs.
            {/* </p> */}
          </section>
        </article>

        {/* section 2: activitè  */}
        <div>
          <div
            className="divider"
            style={{ marginTop: "2rem", marginBottom: "1rem" }}
          />

          <h1 className="title ">Activités</h1>
          <div
            className="divider"
            style={{ marginTop: "2rem", marginBottom: "1rem" }}
          />

          <div className=" activités ">
            <span
              style={{
                color: "blue",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              Axe de recherche 1 :
            </span>{" "}
            <span style={{ color: "transparent" }}>.....</span>Valorisation des
            ressources naturelles d’origine animale et végétale et formulation
            de nouveaux aliments fonctionnels <br />
            <span
              style={{
                color: "blue",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              Axe de recherche 2 :
            </span>{" "}
            <span style={{ color: "transparent" }}>.....</span> Bio-conservation
            et amélioration de la qualité des aliments"
            <br />
            <span
              style={{
                color: "blue",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              Axe de recherche 3 :
            </span>{" "}
            <span style={{ color: "transparent" }}>.....</span> Renforcement de
            la sécurité alimentaire en Tunisie par l’amélioration de la
            performance et de la compétitivité des filières agro-alimentaires{" "}
            <br />
          </div>
        </div>

        {/* section 3:  Staff */}
        <div>
          <div
            className="divider"
            style={{ marginTop: "2rem", marginBottom: "1rem" }}
          />

          <h1 className="title ">Membres du laboratoire</h1>
          <div
            className="divider"
            style={{ marginTop: "2rem", marginBottom: "1rem" }}
          />
          <div>
            <table>
              <tr>
                <th>Grade</th>
                <th>Image</th>

                <th>Nom et prénom</th>
                <th>Etablissement</th>
                <th>Université</th>
              </tr>
              
              <tr>
                <td rowSpan={4}>{data[0].grade}</td>
                {/*  <td rowSpan ={data[0].enseignants.length}*/}
                <td> {data[0].enseignants[0].image}</td>
                <td> {data[0].enseignants[0].nom}</td>
                <td> {data[0].enseignants[0].etablissement}</td>
                <td> {data[0].enseignants[0].universite}</td>
              </tr>
              <tr>
                
                <td> {data[0].enseignants[1].image}</td>
                <td> {data[0].enseignants[1].nom}</td>
                <td> {data[0].enseignants[1].etablissement}</td>
                <td> {data[0].enseignants[1].universite}</td>
              </tr>

              <tr>
               
                <td> {data[0].enseignants[2].image}</td>
                <td> {data[0].enseignants[2].nom}</td>
                <td> {data[0].enseignants[2].etablissement}</td>
                <td> {data[0].enseignants[2].universite}</td>
              </tr>

              <tr>
                
                <td> {data[0].enseignants[3].image}</td>
                <td> {data[0].enseignants[3].nom}</td>
                <td> {data[0].enseignants[3].etablissement}</td>
                <td> {data[0].enseignants[3].universite}</td>
              </tr>
            </table>
          </div> 
{/* 
           <div>
  <h1>Enseignants-chercheurs</h1>
  <table>
    <thead>
      <tr>
        <th>Grade</th>
        <th>Nom et prénom</th>
        <th>Etablissement</th>
        <th>Université</th>
        <th>Image</th>
      </tr>
    </thead>
    <tbody>
      {data.map((el, index) => (
        <div key={index}>
          {el.enseignants.map((es, idx) => (
            <tr key={idx}>
            
              {index === 0 && (
                <td rowSpan={el.enseignants.length}>{el.grade}</td>
              )}
              
              
              <td>{es.nom}</td>
              <td>{es.etablissement}</td>
              <td>{es.universite}</td>
              <td>
                <img src={es.image} alt={es.nom} style={{ width: '50px', height: '50px' }} />
              </td>
            </tr>
          ))}
        </div>
      ))}
    </tbody>
  </table>
           </div>  */}
        </div>
      </div>
    </>
  );
}

export default Accmain;
