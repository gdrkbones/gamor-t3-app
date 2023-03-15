import Categories from "~/component/Categories";
import GameInfoColumn from "~/component/GameInfoColumn";
import Navbar from "~/component/Navbar";
import PlatformSearchColumn from "~/component/PlatformSearchColumn";
import PresentationColumn from "~/component/PresentationColumn";
import styles from "./index.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <section>
        <main className={styles.main}>
          <PresentationColumn />
          <GameInfoColumn />
          <PlatformSearchColumn />
        </main>
      </section>
      <section>
        <Categories />
      </section>
    </>
  );
}
