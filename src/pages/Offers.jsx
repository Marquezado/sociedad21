import { useState } from "react";
import data from "../../content.json";
import "./Offers.css";

function Offers() {
  const [showOffers, setShowOffers] = useState(false);

  const offers = data.offers;

  const handleClick = () => {
    setShowOffers((prev) => !prev);
  };
  return (
    <>
      <div className="offers_my_container">
        <div className="container-fluid row">
          <div className="col-lg-6 col-md-12 d-flex justify-content-md-center justify-content-sm-center justify-content-lg-start">
            <h4 className="title_section1">Special Offer</h4>
          </div>
          <p className="col-lg-6 col-md-12 text-md-center text-sm-center text-lg-start">
            Tu próxima escapada merece ser perfecta: aprovecha nuestras
            promociones exclusivas y convierte cada noche en una experiencia de
            descanso, confort y bienestar al mejor precio.
          </p>
        </div>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="title_section2 col-lg-6 col-md-12 col-sm-12">
              <h1 className="text-sm-center text-md-center text-lg-start">
                Ofertas por tiempo limitado, no te los pierdas!
              </h1>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-md-center justify-content-lg-start justify-content-sm-center">
              <button
                id="offer_button"
                className="offer_button"
                onClick={handleClick}
              >
                {showOffers
                  ? "Ocultar Ofertas"
                  : "Mira todas las Ofertas Especiales"}
              </button>
            </div>
          </div>
          <div className="offers_toggle container-fluid row pt-3">
            {showOffers &&
              offers.map((offer) => (
                <div key={offer.id} className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card">
                    <img src={offer.image} alt={offer.title} />
                    <h5>{offer.title}</h5>
                    <p>{offer.description}</p>
                    <span>$ {offer.price}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Offers;
