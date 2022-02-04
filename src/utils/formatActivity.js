import { counter } from "./counter";

/**
 * Formater function for the activity data comming from the api.
 * It will replace invalid dates by a negative integer, and valid dates by the day of the month 
 * @param {*} data 
 * @returns the formated data
 */
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
