import LeafletMap from "@/components/LeafletMap";
import styles from "./page.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>Pintu Air Monitoring</h1>
      <LeafletMap />
    </div>
  );
};

export default HomePage;
