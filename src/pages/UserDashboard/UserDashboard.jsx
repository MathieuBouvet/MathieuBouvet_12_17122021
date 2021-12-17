import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import apiRoutes from "../../services/apiRoutes";

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

  return (
    <div>
      {!allDataFetched ? (
        <div>Loading...</div>
      ) : (
        <div>user {userId} data all fetched</div>
      )}
    </div>
  );
};

export default UserDashboard;
