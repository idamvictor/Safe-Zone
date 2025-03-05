export const timeFormat = (time: string) => {
  const timeString = new Date(time).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return timeString;
};
