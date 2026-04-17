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
      <div className="offers_my_container container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-lg-6 col-md-12 d-flex justify-content-center justify-content-md-center justify-content-sm-center justify-content-lg-start">
            <h4 className="title_section1">Special Offer</h4>
          </div>
          <p className="eslogan_offer col-lg-6 col-md-12 text-center text-md-center text-sm-center text-lg-start">
            Tu próxima escapada merece ser perfecta: aprovecha nuestras
            promociones exclusivas y convierte cada noche en una experiencia de
            descanso, confort y bienestar al mejor precio.
          </p>
        </div>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="title_section2 col-lg-6 col-md-12 col-sm-12">
              <h1 className="text-center text-sm-center text-md-center text-lg-start">
                Ofertas por tiempo limitado, no te los pierdas!
              </h1>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center justify-content-md-center justify-content-lg-start justify-content-sm-center">
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
                <div key={offer.id} className="col-lg-3 col-md-6 col-sm-12">
                  <div className="card border border-0">
                    <img className="rounded-3" src={offer.image} alt={offer.title} />
                    <div className="discount_offer position-absolute tanslate-middle text-white d-flex justify-content-center">{offer.descount}% Descuento</div>
                    <h5 className="mt-2">{offer.title}</h5>
                    <p><span className="bi bi-umbrella"></span> {offer.description}</p>
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
