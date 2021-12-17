/*
  The api routes are defined as function taking route parameters, 
  and returning the string url of the route
 */

const user = ({ userId }) => `/user/${userId}`;
const userActivity = ({ userId }) => `${user({ userId })}/activity`;
const userSessions = ({ userId }) => `${user({ userId })}/average-sessions`;
const userPerformance = ({ userId }) => `${user({ userId })}/performance`;

const apiRoutes = { user, userActivity, userSessions, userPerformance };

export default apiRoutes;
