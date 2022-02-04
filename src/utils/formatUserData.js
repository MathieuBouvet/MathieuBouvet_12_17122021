/**
 * The formater function of the user data comming from the api
 * It will fix the api inconsistency regarding the naming of the user score attribute
 * @param {*} data 
 * @returns the formated user data
 */
function formatUserdata(data) {
  const { id, keyData, userInfos, score, todayScore } = data;
  return {
    id,
    keyData,
    userInfos,
    score: todayScore ?? score,
  };
}

export { formatUserdata };
