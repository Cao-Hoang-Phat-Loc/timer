export const formatTime = (time) => {
  const getSeconds = time % 60;
  const minutes = Math.floor(time / 60);
  const getMinutes = minutes % 60;
  const getHours = Math.floor(minutes / 60);

  const formatNumber = (number) => (number < 10 ? `0${number}` : number);

  return `${formatNumber(getHours)} : ${formatNumber(
    getMinutes
  )} : ${formatNumber(getSeconds)}`;
};
