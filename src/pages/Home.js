import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import UserPhoneData from '../component/dataUser';
import '../css/main.css';
import { Outlet, Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState('');
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    let url = 'https://62b04a56e460b79df0423a2e.mockapi.io/aa/';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });

    let url_category = 'https://62b04a56e460b79df0423a2e.mockapi.io/name';

    fetch(url_category)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const doSearch = () => {
    let url =
      'https://62b04a56e460b79df0423a2e.mockapi.io/aa/?search=' + product;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProduct('');
        setData(data);
      });
  };

  var categories_list = [];

  if (categories != null) {
    categories_list = categories.map((item) => (
      <li>
        <Link to={'category/' + item.type_name}>{item.type_name}</Link>
      </li>
    ));
  }

  return (
    <>
      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" class="hero d-flex align-items-center section-bg">
        <div class="container">
          <div class="row justify-content-between gy-5">
            <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
              <h2 data-aos="fade-up">
                The Best vietnam
                <br />
                Real estate website
              </h2>
              <p data-aos="fade-up" data-aos-delay="100">
                Welcome to 99Bro website. This website provide infomation about
                real estate by the fastest way.
              </p>
              <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
                <a href="#book-a-table" class="btn-book-a-table">
                  Watch News
                </a>
                <a class="glightbox btn-watch-video d-flex align-items-center">
                  <i class="bi bi-play-circle"></i>
                  <span>Post News</span>
                </a>
              </div>
            </div>
            <div class="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
              <img
                src="https://i.imgur.com/ClWV26P.jpeg"
                class="img-fluid"
                alt=""
                data-aos="zoom-out"
                data-aos-delay="300"
              />
            </div>
          </div>
        </div>
      </section>
      {/* </section><!-- End Hero Section --> */}

      <div className="container">
        <div className="input-group mb-3">
          {/* ------------------------------------Search---------------------------------------- */}
        </div>

        {/* ------------------------------------Search---------------------------------------- */}

        {/* ____________________________________DATA_________________________________________ */}
        <div className="row mt-5">
          <div class="section-header">
            <h2>News</h2>
            <p>
              COMMON <span>NEWS</span>
            </p>
          </div>

          <div className="btn-group mt-3">
            <button
              className="btn btn-outline-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="true"
              aria-expanded="false"
            >
              Choose type
            </button>

            <ul className="dropdown-menu">{categories_list}</ul>
          </div>
          <UserPhoneData data={data} />
        </div>

        {/* ____________________________________DATA_________________________________________ */}
      </div>
    </>
  );
};

export default Home;
