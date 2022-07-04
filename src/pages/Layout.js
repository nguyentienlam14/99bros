import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header id="header" class="header fixed-top d-flex align-items-center">
        <div class="container d-flex align-items-center justify-content-between">
          <a
            href="index.html"
            class="logo d-flex align-items-center me-auto me-lg-0"
          >
            {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
            <img src="assets/img/logo.png" alt="" />
            <h1>
              Yummy<span>.</span>
            </h1>
          </a>

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              s
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#events">Events</a>
              </li>
              <li>
                <a href="#chefs">Chefs</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li class="dropdown">
                <a href="#">
                  <span>Drop Down</span>{' '}
                  <i class="bi bi-chevron-down dropdown-indicator"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li class="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{' '}
                      <i class="bi bi-chevron-down dropdown-indicator"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <a class="btn-book-a-table" href="#book-a-table">
            Book a Table
          </a>
          <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </div>
      </header>
      {/* <!-- End Header --> */}

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">
            <Link
              to="/"
              className="text-decoration-none"
              style={{ color: 'black' }}
            >
              <img
                src="https://i.imgur.com/5Dv6G0O.jpeg"
                alt=""
                width="200"
                height="60"
              />
            </Link>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/* ------------------------------------Search---------------------------------------- */}
              <li className="nav-item ms-auto me-auto">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control mt-3"
                    placeholder="Search"
                  />
                  <button className="btn btn-success mt-3" type="submit">
                    Search
                  </button>
                </div>
              </li>

              <li className="nav-item"></li>
              <li className="nav-item">
                <span className="nav-link">
                  <Link
                    to="/collection"
                    className="text-decoration-none ms-3"
                    style={{ color: 'black' }}
                  >
                    Admin
                  </Link>
                </span>
              </li>

              <li className="nav-item">
                <span className="nav-link">
                  <Link
                    to="/buy"
                    className="text-decoration-none"
                    style={{ color: 'black' }}
                  >
                    Cart
                  </Link>
                </span>
              </li>

              <li className="nav-item">
                <span className="nav-link">
                  <Link
                    to="/aboutMe"
                    className="text-decoration-none"
                    style={{ color: 'black' }}
                  >
                    About Me
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
