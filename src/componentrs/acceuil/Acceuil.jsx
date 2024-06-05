import { useNavigate } from "react-router";
import {useState}  from "react";
import Navig from "../navigation/Navig";
import  DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import "./acceuil.css";
import Carousel from "react-bootstrap/Carousel";


function Acceuil() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    };
  



  return (
    <div>
      <Navig />

      {/* introduction */}
      <div className=" top-section  ">
        <div className="tittre  ">
          Laboratoire de Recherche « Innovation Technologique et Sécurité
          Alimentaire » <br />
          LR22 AGR01-ESIAT
        </div>
        <img src="/images/labo.jpg" alt="" />
        <button onClick={() => navigate("Présentation")} className="Suite">
          Savoir plus
        </button>
      </div>

      {/* Actualités */}

      <div
        className="divider"
        style={{ marginTop: "5rem", marginBottom: "1rem" }}
      />

      <div className=" flex ">
        <div className="heroSection  flex">
          <h3>Actualités</h3>
          <div
            className="divider"
            style={{ marginTop: "2rem", marginBottom: "1rem" }}
          />

          <div
            className="heroLeftSection  flex "
            style={{ position: "relative" }}
          >
            <p className="subtitle  ">
              <a href="/premiere edition">
                Les 1 ères Journées Scientifiques sur : la 
                Valorisation des Bioressources et Nutrition Fonctionnelle <br />
              </a>
            </p>
            {/* <button
              className="plus"
              onClick={() => {
                navigate("premiere edition");
              }}
            >
              Savoir plus
            </button> */}
          </div>

          <section className="heroRightSection  ">
            <img src="/images/Affiche.jpg" alt="" />
          </section>
        </div>

        <div className="calendarSection  ">

          <h3>Calendrier des événements</h3>
          <div
            className="divider"
            style={{ marginTop: "2rem", marginBottom: "1rem" }}
          />
           <DatePicker calendarClassName="Calender "
      selected={startDate} className="flex"
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      inline
    />
        </div>
 
      </div>

      {/* carousels */}

      <div className="divider" />
      <h3>Galerie</h3>
      <div className=" carousel">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              style={{ width: "742.4px", height: " 334.562px" }}
              className="d-block w-100"
              src="images/im1.jpeg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/im2.jpeg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/im3.jpeg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/im4.jpeg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/im5.jpeg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/im6.jpeg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/im7.jpeg"
              alt="Third slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/im8.jpeg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/im9.jpeg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/im10.jpeg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Acceuil 
