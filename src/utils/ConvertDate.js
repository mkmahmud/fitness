const { format } = require("date-fns");

export const convertedDate = (timestamp) => {
  const date = new Date(timestamp);
  const formattedDate = format(date, "yyyy-MM-dd");
  return formattedDate;
};
