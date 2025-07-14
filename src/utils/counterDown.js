export function calcTimeLeft(targetDate) {
  if (!targetDate) {
    targetDate = new Date().setHours(23, 59, 59, 999);
  }
  const one_hour_ms = 60 * 60 * 1000;
  const one_minute_ms = 60 * 1000;
  const one_second_ms = 1000;

  const timeLeft = targetDate - new Date().getTime();
  if (timeLeft > 0) {
    const hour_left = Math.trunc(timeLeft / one_hour_ms);
    const minute_left = Math.trunc((timeLeft % one_hour_ms) / one_minute_ms);
    const second_left = Math.trunc(
      ((timeLeft % one_hour_ms) % one_minute_ms) / one_second_ms
    );
    return { hour_left, minute_left, second_left };
  } else {
    return { hour_left: 0, minute_left: 0, second_left: 0 };
  }
}
