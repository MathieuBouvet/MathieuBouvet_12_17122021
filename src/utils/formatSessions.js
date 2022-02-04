const dayInitials = ["L", "M", "M", "J", "V", "S", "D"];

/**
 * Formater function for the session data comming from the api.
 * It will replace the day of the week by its initial in french
 * @param {*} data 
 * @returns the formated data
 */
function formatSessions(data) {
  return {
    ...data,
    sessions: data.sessions.map(session => ({
      ...session,
      day: dayInitials[session.day - 1],
    })),
  };
}

export { formatSessions };
