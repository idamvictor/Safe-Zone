export const timeFormat = (time: string): string => {
  const date = new Date(time);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  if (diffInDays === 0) {
    const timeString = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return timeString;
  } else if (diffInDays === 1) {
    return "1 day ago";
  } else if (diffInDays <= 7) {
    return `${diffInDays} days ago`;
  } else if (diffInDays <= 30) {
    const diffInWeeks = Math.floor(diffInDays / 7);
    return `${diffInWeeks} week${diffInWeeks > 1 ? "s" : ""} ago`;
  } else if (diffInDays <= 365) {
    return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`;
  } else {
    return `${diffInYears} year${diffInYears > 1 ? "s" : ""} ago`;
  }
};
