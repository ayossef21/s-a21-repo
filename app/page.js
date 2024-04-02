import Image from "next/image";
import styles from "./page.module.css";
import Caller from "../components/caller";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
        قَاتِلُوهُمْ يُعَذِّبْهُمُ اللَّهُ بِأَيْدِيكُمْ وَيُخْزِهِمْ وَيَنصُرْكُمْ عَلَيْهِمْ وَيَشْفِ صُدُورَ قَوْمٍ مُّؤْمِنِينَ
        </p>
      
      </div>

      <div className={styles.center}>
        <h1>
        سجيل
        </h1>
      </div>

      <div className={styles.grid}>
       <Caller></Caller>      
      </div>
    </main>
  );
}
