import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <>
      <div>
        {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
        <div className="container my-5">
          {/* <!-- Footer --> */}
          <footer className="bg-dark text-center text-white">
            {/* <!-- Grid container --> */}
            <div className="container p-4">
              {/* <!-- Section: Social media --> */}
              <section className="mb-4">
                {/* <!-- Facebook --> */}
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                  <i className="fab fa-facebook-f"></i> 
                </a>

                {/* <!-- Twitter --> */}
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                  <i className="fab fa-twitter"></i>
                </a>

                {/* <!-- Google --> */}
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                  <i className="fab fa-google"></i>
                </a>

                {/* <!-- Instagram --> */}
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                  <i className="fab fa-instagram"></i>
                </a>

                {/* <!-- Linkedin --> */}
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                  <i className="fab fa-linkedin-in"></i>
                </a>

                {/* <!-- Github --> */}
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                  <i className="fab fa-github"></i>
                </a>
              </section>
              {/* <!-- Section: Social media --> */}

              {/* <!-- Section: Form --> */}
              <section>
                <form action="">
                  {/* <!--Grid row--> */}
                  <div className="row d-flex justify-content-center">
                    {/* <!--Grid column--> */}
                    <div className="col-auto">
                      <p className="pt-2">
                        <strong>Subscribe For More Intel </strong>
                      </p>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-md-5 col-12">
                      {/* <!-- Email input --> */}
                      <div className="form-outline form-white mb-4">
                        <input type="email" id="form5Example2" className="form-control" />
                        <label className="form-label" htmlFor="form5Example2">Email address</label>
                      </div>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-auto">
                      {/* <!-- Submit button --> */}
                      <button type="submit" className="btn btn-outline-light mb-4">
                        Subscribe
                      </button>
                    </div>
                    {/* <!--Grid column--> */}
                  </div>
                  {/* <!--Grid row--> */}
                </form>
              </section>
              {/* <!-- Section: Form --> */}

              {/* <!-- Section: Text --> */}
              <section className="mb-4">
                <p>
                  Here you can get quick look of all stocks in just one search <br /> 
                  We provide you the information that you need
                </p>
              </section>
              {/* <!-- Section: Text --> */}
            </div>
            {/* <!-- Grid container --> */}

            {/* <!-- Copyright --> */}
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              @ 2023
              {' '}
              <a className="text-white"> All Rights Reserved</a>
            </div>
            {/* <!-- Copyright --> */}
          </footer>
          {/* <!-- Footer --> */}
        </div>
        {/* <!-- End of .container --> */}
      </div>
    </>
  );
};

export default Footer;
