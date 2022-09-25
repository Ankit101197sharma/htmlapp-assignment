import React from "react";
import classes from "./LandingPage.module.css";
import imgCraousal from "../../Assests/Banner1.jpg";
import img1 from "../../Assests/air.png";
import img2 from "../../Assests/cms.png";
import img3 from "../../Assests/insurance.png";
import img4 from "../../Assests/ledger.png";
import img5 from "../../Assests/utility.png";
import img6 from "../../Assests/wallet.png";

const LandingPage = () => {
  const iconSet = [
    {
      iconName: "AIR",
      IconSrc: `${img1}`,
    },
    {
      iconName: "CMS",
      IconSrc: `${img2}`,
    },
    {
      iconName: "Insurance",
      IconSrc: `${img3}`,
    },
    {
      iconName: "Ledger",
      IconSrc: `${img4}`,
    },
    {
      iconName: "Utility",
      IconSrc: `${img4}`,
    },
    {
      iconName: "Wallet",
      IconSrc: `${img5}`,
    },
  ];

  return (
    <div className={classes.mainDiv}>
      <div
      className={classes.landingDiv}
       
      >
        {iconSet.map((item) => {
          return (
            <div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img
                  style={{ width: "50px", height: "50%" }}
                  src={item.IconSrc}
                />
                <div className={classes.diamondIcon}></div>
                <span>{item.iconName}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <div
          style={{
            padding: "20px",
            width:"100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <div
            id="carouselExampleDark"
            class="carousel  carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                style={{borderRadius:'50%', width:'10px', height:'10px'}}
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                style={{borderRadius:'50%', width:'10px', height:'10px'}}
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                style={{borderRadius:'50%', width:'10px', height:'10px'}}
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src={imgCraousal}
                    class="d-block w-100 h-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={imgCraousal}
                    class="d-block w-100 h-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={imgCraousal}
                    class="d-block w-100 h-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div>
            <div
              class="card text-dark  mb-3"
              style={{ maxWidth: "14rem", border: "none", height: "15.4rem" }}
            >
              <div style={{ color: "#fff" }} class="card-header bg-success ">
                Latest Update
              </div>
              <div class="card-body">
                <p class="card-text ">
                  Some quick example text to build on the card title.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
