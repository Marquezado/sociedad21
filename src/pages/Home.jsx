import "./Home.css";

function Home() {
  return (
    <>
      <div className="home_my_container d-flex flex-column">
        <div className="header1 row align-items-center">
          <div className="col-6 col-md-4 namebussines">
            <a href="/">Sociedad21</a>
          </div>

          <div className="col-6 col-md-4 offset-md-4 user_actions d-flex justify-content-end">
            <button>Sign Up</button>
            <button>Log In</button>
            <button>+</button>
          </div>
        </div>

        <div className="header2 row mt-3">
          <div className="col-12 col-md-6">
            <h4>Your rest is our priority, so each day begins renewed.</h4>
          </div>

          <div className="col-12 col-md-6 menu_hotel d-flex flex-wrap justify-content-md-end align-items-center">
            <button>Spaces</button>
            <button>Offers</button>
            <button>Plans</button>
          </div>
        </div>

        <div className="flex-grow-1"></div>

        <div className="footer row align-items-center">
          <div className="col-12 col-md-7 eslogan text-center text-md-start">
            <h1>
              More than a stay. It's a journey that you'll remember forever
            </h1>
          </div>

          <div className="col-12 col-md-5 d-flex justify-content-center justify-content-md-end mt-4 mt-md-0">
            <div className="search-bar">
              <input
                type="search"
                placeholder="Search Destination"
                className="search-bar__input"
              />
              <button type="submit" className="search-bar__btn">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
