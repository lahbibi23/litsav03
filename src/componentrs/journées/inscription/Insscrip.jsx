import { useState } from 'react';
import Navig from '../../navigation/Navig';
import './insscrip.css';
import { useDropzone } from 'react-dropzone';
import { useForm, ValidationError } from '@formspree/react';

function Insscrip() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fullName, setFullName] = useState('');
  const [fonction, setFonction] = useState('');
  const [université, setUniversité] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('');
  const [theme, setTheme] = useState('');
  const [communicationMethod, setCommunicationMethod] = useState('');
  const [email, setEmail] = useState('');
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [state, handleSubmitFormspree] = useForm("xgegeqpj")
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  const onDrop = (acceptedFiles) => {
    setSelectedFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('fonction', fonction)
    formData.append('université', université)
    formData.append('phoneNumber', phoneNumber);
    formData.append('theme', theme);
    formData.append('communicationMethod', communicationMethod);
    formData.append('email', email);
    selectedFiles.forEach((file, index) => {
      formData.append(`file${index + 1}`, file);
    });

    try {
      const response = await handleSubmitFormspree(e);

      if (response.ok) {
        setSubmissionMessage('Votre formulaire a été soumis avec succès !');
        console.log('Formulaire envoyé avec succès !');
        setFullName('');
        setFonction('')
        setUniversité('')
        setPhoneNumber('');
        setTheme('');
        setCommunicationMethod('');
        setEmail('');
        setSelectedFiles([]);
      } else {
        setSubmissionMessage('Erreur lors de la soumission du formulaire. Veuillez réessayer.');
      }
    } catch (error) {
      setSubmissionMessage('Erreur lors de la soumission du formulaire. Veuillez réessayer.');
    }
  };

  return (
    <div>
      <Navig />

      <div className="divider"  style={{marginTop:"5rem",marginBottom:"1rem"}} />
         <div  className="tittle "> Formulaire d'inscription (à remplire soigneusement)</div> 
       <div className="divider"  style={{marginTop:"2rem",marginBottom:"1rem"}} />



      <section className="contact-us  ">
      {/* nom et prénom */}

        <form className="form  " onSubmit={handleSubmit}>
          <div className="form-field flex">
            <label htmlFor="fullName">Nom et Prénom:</label>
            <input autoComplete="off" required type="text" name="fullName" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Nom et prénom" />
          </div>

          {/* mail */}

          <div className="form-field flex">
            <label htmlFor="email">Email Address:</label>
            <input autoComplete="off" required type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@example.com" />
          </div>
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />

          {/* numéro de téléphone */}



          <div className="form-field flex">
            <label htmlFor="phoneNumber">Numéro de téléphone:</label>
            <input required type="text" name="phoneNumber" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder=" +216  123456789" />
          </div>







          {/* fonction  */}
          <div className="form-field flex">
            <label htmlFor="fonction">Fonction et grade:</label>
            <input autoComplete="off" required type="text" name="fonction" id="fonction" value={fonction} onChange={(e) => setFonction(e.target.value)} placeholder=" Fonction et Grade" />
          </div>

          <div className="form-field flex">
            <label htmlFor="université">Université/Institution/Organisme ou laboratoire de recherche :<span style={{ color: "white" }}>......</span></label>
            <input autoComplete="off" required type="text" name="université" id="université" value={université} onChange={(e) => setUniversité(e.target.value)} placeholder="" />
          </div>




          {/* cheackbox theme */}

          <div className="form-field flex " >
            <div style={{ color: "rgb(70, 68, 68)", margin: "1rem" }}>
              <div style={{ marginBottom: "1rem" }}>Thème :</div>
              <div >
                <label htmlFor="theme1"> Valorisation des ressources naturelles en Nutrition fonctionnelle <span style={{ color: "white" }}>.....</span></label>
                <input className='cheakbox' type="radio" id="theme1" name="theme" value="Theme 1" onChange={(e) => setTheme(e.target.value)} /><br />
                <label htmlFor="theme2">L’exploitation durable des ressources naturelles en Agroalimentaire</label>
                <input className='cheakbox' type="radio" id="theme2" name="theme" value="Theme 2" onChange={(e) => setTheme(e.target.value)} />
              </div>
            </div>
          </div>



          {/* cheakbox communication  */}

          <div className=" form-field flex">
            <div style={{ color: "rgb(70, 68, 68)", margin: "1rem" }}>
              <div style={{ marginBottom: "1rem" }}>Communication :</div>
              <div >
                <label htmlFor="oral">Orale<span style={{ color: "white" }}>........</span> </label>
                <input className='cheakbox' type="radio" id="oral" name="communicationMethod" value="Orale" onChange={(e) => setCommunicationMethod(e.target.value)} /> <br />
                <label htmlFor="display">Par affiche</label>
                <input className='cheakbox' type="radio" id="display" name="communicationMethod" value="Affichage" onChange={(e) => setCommunicationMethod(e.target.value)} />
              </div>
            </div>
          </div>

          {/* Soumission */}


          <div className=" fichier flex ">

            <div className='' style={{ color: "rgb(70, 68, 68)" }}>  Fichier de soumission :</div>

            <div {...getRootProps()} >
              <input {...getInputProps()} />
              <button type="button" className="submit"> Choisir un fichier </button>
            </div>
          </div>

               {/* Soumettre */}

          <button type="submit" className="submit2">
            Soumettre
          </button>

          {submissionMessage && <p>{submissionMessage}</p>}
          {submissionMessage === 'Votre formulaire a été soumis avec succès !' && (
            <p style={{ color: 'rgb(70, 68, 68)'}}>Merci ! Votre formulaire a été soumis avec succès.</p>
       
       )}
        </form>
      </section>
    </div>
  );
}

export default Insscrip;
