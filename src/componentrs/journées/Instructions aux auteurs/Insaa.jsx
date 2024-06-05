
import Navig from '../../navigation/Navig'
import './insaa.css'
// import { saveAs } from "file-saver";

function Insaa() {
    
    const onDownload = () => {

        fetch("../../testFile.docx").then((response) => {
            response.blob().then((blob) => {
              let url = window.URL.createObjectURL(blob);
              let a = document.createElement("a");
              a.href = url;
              a.download = "Modèle de résumé.docx";
              a.click();
            });
          });
         // Approche2
        // saveAs("../../Modèle de résumé.docx", "Modèle de résumé.docx");
      };

    return (
        <>
            <Navig />
            <div className=' instruction '>
                Quelque soit le type de communication (orale ou affichée), vous êtes invités à soumettre un
                résumé en français ou en anglais, en précisant le thème. <br /> Le résumé doit être rédigé en suivant
                le modèle suivant.
            </div>
            <button   className='download'    onClick={()=>onDownload()}>
                Télécharger le résumé 
            </button>
        </>
    )
}

export default Insaa