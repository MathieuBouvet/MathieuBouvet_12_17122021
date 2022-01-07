import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import apiRoutes from "../../services/apiRoutes";

import Loader from "../../components/Loader";
import KeyData from "../../components/KeyData";
import UserScore from "../../components/UserScore";

import styles from "./userDashboard.module.scss";

const UserDashboard = () => {
  const { userId } = useParams();
  const userRoute = apiRoutes.user({ userId });
  const userActivityRoute = apiRoutes.userActivity({ userId });
  const userSessionsRoute = apiRoutes.userSessions({ userId });
  const userPerformanceRoute = apiRoutes.userPerformance({ userId });

  const { state: user } = useApi(userRoute);
  const { state: userActivity } = useApi(userActivityRoute);
  const { state: userSessions } = useApi(userSessionsRoute);
  const { state: userPerformance } = useApi(userPerformanceRoute);

  const allDataFetched = [
    user.data,
    userActivity.data,
    userSessions.data,
    userPerformance.data,
  ].every(data => data != null);

  if (allDataFetched) {
    console.log({
      user: user.data,
      activity: userActivity.data,
      sessions: userSessions.data,
      performance: userPerformance.data,
    });
  }

  return !allDataFetched ? (
    <div className={styles.loaderContainer}>
      <Loader />
    </div>
  ) : (
    <div className={styles.userDashboard}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          Bonjour{" "}
          <span className={styles.firstName}>
            {user.data.userInfos.firstName}
          </span>
        </h2>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className={styles.chartContainer}>
        <div className={styles.activity}>
          <div className={styles.wip}>activity chart</div>
        </div>
        <div className={styles.keyDataContainer}>
          <KeyData iconPath="/icons/calories.svg" label="Calories" unit="kCal">
            {user.data.keyData.calorieCount / 1000}
          </KeyData>
          <KeyData iconPath="/icons/protein.svg" label="Proteines" unit="g">
            {user.data.keyData.proteinCount}
          </KeyData>
          <KeyData iconPath="/icons/carbs.svg" label="Glucides" unit="g">
            {user.data.keyData.carbohydrateCount}
          </KeyData>
          <KeyData iconPath="/icons/fat.svg" label="Lipides" unit="g">
            {user.data.keyData.lipidCount}
          </KeyData>
        </div>
        <div className={styles.sessions}>
          <div className={styles.wip}>session chart</div>
          <div className={styles.wip}>performance chart</div>
          <UserScore>{user.data.score * 100}</UserScore>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
