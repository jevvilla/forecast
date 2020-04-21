export const timeNormalization = (time: number) => {
  return time.toString().length === 1 ? `0${time}` : time;
};

export const getTimeFromTimestamp = (timestamp: number) => {
  const date = new Date(timestamp * 1000);

  return `${timeNormalization(date.getHours())}:${timeNormalization(date.getMinutes())}`;
};
