import React from "react";
import Featured1 from "../images/icon-here.jpg";
import { COMMON_CONSTANTS } from "../constants/constants";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const APIDataComponent = ({
  imgSrc = Featured1,
  titlefromAPI = "Lorem Ipsum",
  desc = COMMON_CONSTANTS.upperText,
  heading = "HEADING HERE",
  apiData,
  exception
}) => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    dotsContainer: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  };
  return (
    <>
      <div className="CustomComponent">
        <div className="CustomComponent__componentcontent">
          <div className="CustomComponent__cardlist my-5">
            <div className="container">
              <div className="row">
                <div className="section-title feature mb-5 CustomComponent__componentcontent--whitecolor">
                  <h1 className="field-title">{heading}</h1>
                </div>
                <React.Fragment>
                  <div style={{ overflow: "hidden" }}>
                    <OwlCarousel options={options}>
                      {apiData.length === 0 || exception
                        ? "No records to show.."
                        : apiData.slice(0, 10).map((item, i) => {
                            return (
                              <div
                                key={i}
                                className="item col-lg-3 col-md-3 col-xs-3"
                                style={{ margin: "16px" }}
                              >
                                <div className="CustomComponent__cardlist--Parent">
                                  <div className="cardlist__card d-flex flex-column">
                                    <img
                                      className="cardlist__card__thumb d-flex justify-content-center"
                                      src={imgSrc}
                                    />
                                    <div className="cardlist__card__info">
                                      <div className="cardlist__card__info__title field-title">
                                        {titlefromAPI}
                                      </div>
                                      <div className="cardlist__card__info__description field-description">
                                        {desc}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                    </OwlCarousel>
                  </div>
                </React.Fragment>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default APIDataComponent;
