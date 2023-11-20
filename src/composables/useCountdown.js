export function useCountdown () {
  
  function getTimeBeforeNewYear () {
    const newYearDate = new Date(new Date(new Date().getFullYear() + 1, 0, 1, 0).toISOString()).getTime()
  
    const diffMs = newYearDate - Date.now();
  
    const days = Math.floor(diffMs / (24 * 60 * 60 * 1000));
    const daysMs = diffMs % (24 * 60 * 60 * 1000);
    const hours = Math.floor(daysMs / (60 * 60 * 1000));
    const hoursMs = diffMs % (60 * 60 * 1000);
    const minutes = Math.floor(hoursMs / (60 * 1000));
    const minutesMs = diffMs % (60 * 1000);
    const seconds = Math.floor(minutesMs / 1000);
  
    return { days, hours, minutes, seconds }
  }

  return { getTimeBeforeNewYear }
}