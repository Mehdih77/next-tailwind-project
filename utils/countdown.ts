export const countdown = () => {
  const eventDate = new Date("2023-11-24T20:00:00");
  const currentDate = new Date();
  const timeRemaining = eventDate.getTime() - currentDate.getTime();
  // Calc days, hours, minutes and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
};