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
