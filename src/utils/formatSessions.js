const dayInitials = ["L", "M", "M", "J", "V", "S", "D"];

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
