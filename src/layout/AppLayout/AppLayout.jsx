import { Outlet } from "react-router-dom";

import TopBar from "../TopBar";
import VerticalBar from "../VerticalBar";

import styles from "./appLayout.module.scss";

const AppLayout = () => {
  return (
    <div className={styles.appLayout}>
      <VerticalBar />
      <TopBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
