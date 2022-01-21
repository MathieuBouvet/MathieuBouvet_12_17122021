import { counter } from "./counter";

function formatActivity(data) {
  const invalidDateCounter = counter({ start: -1, step: -1 });
  return {
    ...data,
    sessions: data.sessions.map(session => {
      const parsedDate = new Date(session.day);
      const day = !isNaN(parsedDate)
        ? parsedDate.getDate()
        : invalidDateCounter.next().value;
      return {
        ...session,
        day,
      };
    }),
  };
}

export { formatActivity };
