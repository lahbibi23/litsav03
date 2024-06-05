import Navig from "../navigation/Navig";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";



const Contact = () => {
  const [state, handleSubmit] = useForm("xgegeqpj");

  return (
  <>
  <Navig/>
      <section className="contact-Nous">
        <h1 className="tiitle">
          
          Contacter Nous
        </h1>
        <p className="sub-tiitle">
        Utilisez ce formulaire pour nous contacter. Votre adresse email ne sera pas publiée.
        </p>
    
        <div style={{ justifyContent: "space-between" }} className="flex">
          <form onSubmit={handleSubmit} className="">
            <div className="flex">
              <label htmlFor="email">Email Address:</label>
              <input
                autoComplete="off"
                required
                type="email"
                name="email"
                id="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
    
            <div className="flex" style={{ marginTop: "24px" }}>
              <label htmlFor="message">Your message:</label>
              <textarea required name="message" id="message"></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
    
            <button type="submit" disabled={state.submitting} className="submit">
              {state.submitting ? "Submitting ..." : "Submit"}
            </button>
    
            {state.succeeded && (
              <p
                className="flex"
                style={{ fontSize: "18px", marginTop: "1.7rem" }}
              >
             
                Your message has been sent successfully 👌
              </p>
            )}
          </form>
         
        </div>
      </section>
  </>
  );
};
export default Contact