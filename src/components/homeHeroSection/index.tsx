"use client";
import styles from "./styles.module.scss"
import React from "react";
import Slider from "react-slick";
import OptimizeImage from "../optimizeImage/optimizeImage";

const HeroBanner = () => {
    var settings = {
        speed: 500,
      arrows: true,
      infinite: false,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      };
  return (
    <>
    <section className={styles.heroBanner}>
        <OptimizeImage
            className={styles.shapeBg1}
            alt="img"
            src={"/assets/svg/shapeBg1.svg"}
        />
      <div className="container mx-auto relative">
        <OptimizeImage
            className={styles.shape3 +" "+ "animRotate"}
            alt="img"
            src={"/assets/svg/shape2.svg"}
        />
        <OptimizeImage
            className={styles.shape4 +" "+ "animRotate"}
            alt="img"
            src={"/assets/svg/shape3.svg"}
        />
        <OptimizeImage
            className={styles.shape5}
            alt="img"
            src={"/assets/svg/shape4.svg"}
        />
      </div>
      <Slider {...settings}>
            <div className={styles.sliderItems}>
               <div className="container mx-auto">
               <div className={styles.title}>
                    <h1>WE ARE <span>WEb Design</span></h1>
                    <OptimizeImage
                        className={styles.shape1 +" "+ "move1"}
                        alt="img"
                        src={"/assets/svg/superToroid.svg"}
                    />
                    <OptimizeImage
                        className={styles.shape2}
                        alt="img"
                        src={"/assets/svg/shape1.svg"}
                    />
                    
                </div>
                <h2>Agency</h2>
                <div className="relative">
                <OptimizeImage
                    className={styles.slideImg}
                    alt="img"
                    src={"/assets/svg/img1.svg"}
                />
                </div>
                <div className="flex justify-between">
                    <div className={styles.caption}>
                        <small>induction</small>
                        <h3>Creative <span>Design</span></h3>
                        <OptimizeImage
                            className={styles.line1}
                            alt="img"
                            src={"/assets/svg/line.svg"}
                        />
                    </div>
                </div>
               </div>
            </div>
            <div className={styles.sliderItems}>
               <div className="container mx-auto">
               <div className={styles.title}>
                    <h1>WEb<span>Design</span></h1>
                    <OptimizeImage
                        className={styles.shape2}
                        alt="img"
                        src={"/assets/svg/shape1.svg"}
                    />
                    
                </div>
                <h2>Agency</h2>
                <div className="relative">
                <OptimizeImage
                    className={styles.slideImg}
                    alt="img"
                    src={"/assets/svg/img1.svg"}
                />
                </div>
                <div className="flex justify-between">
                    <div className={styles.caption}>
                        <small>induction</small>
                        <h3>Creative <span>Design</span></h3>
                        <OptimizeImage
                            className={styles.line1}
                            alt="img"
                            src={"/assets/svg/line.svg"}
                        />
                    </div>
                </div>
               </div>
            </div>
        </Slider>
    </section>
    </>
  );
};

export default HeroBanner;
