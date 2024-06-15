import HeroBanner from "@/components/homeHeroSection";
import styles from "./page.module.scss"
import OptimizeImage from "@/components/optimizeImage/optimizeImage";

export default function Home() {
  return(
    <>
      <HeroBanner/>
      <div className={styles.agencyInfo}>
        <p>Proin efficitur, mauris vel condimentum pulvinar, velit <br /> orci consectetur ligula, eget egestas magna mi ut arcu. <br /> Phasellus nec odio orci.</p>
      </div>
      <div className={styles.exploreMore}>
        <div className={styles.exploreMain}>
              <div className={styles.waves +" "+ styles.wave1}></div>
              <div className={styles.waves +" "+ styles.wave2}></div>
              <div className={styles.waves +" "+ styles.wave3}></div>
          <a href={'/'} className={styles.exploreMoreBtn}>
          <span>
            <OptimizeImage
              className={styles.shapeBg1}
              alt="img"
              src={"/assets/svg/send.svg"}
          />
            
            Explore <br /> More
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
