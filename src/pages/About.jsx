import "./About.css";

function About() {
  return (
    <>
      <div className="about_my_container container-fluid">
        <div className="section_aboutUs text-center">
          <h4 className="text_section_aboutUs mx-auto">About Us</h4>
        </div>

        <div className="description_aboutUs row justify-content-center text-center">
          <div className="col-12 col-md-8 col-lg-6">
            <h1 className="title_text_aboutUs">Welcome to Sociedad21</h1>
            <p className="text_aboutUs">
              Creemos que cada estancia debe ser única. Nuestra misión es
              brindar una experiencia personalizada, donde cada huésped se
              sienta como en casa, mientras disfruta del lujo, la tranquilidad y
              la atención al detalle.
            </p>
          </div>
        </div>

        <div className="container_pictures row justify-content-center">
          <div className="col-12 col-md-10 col-lg-6">
            <div className="grid_pictures">
              <div className="img1" />
              <div className="img2" />
              <div className="img3" />
              <div className="img4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
