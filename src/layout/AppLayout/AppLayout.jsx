import { Outlet } from "react-router-dom";

import TopBar from "../TopBar";
import VerticalBar from "../VerticalBar";

import styles from "./appLayout.module.scss";

const AppLayout = () => {
  return (
    <div>
      <VerticalBar />
      <TopBar />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
