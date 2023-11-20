export function useTimeout () {
  let timerId = 0

  function setCountdown (func, interval = 1000) {
    const delay = interval

    timerId = setTimeout(async function tick () {
      func()
      timerId = setTimeout(tick, delay)
    }, delay)
  }

  function stopCountdown () {
    clearTimeout(timerId)
  }

  return { setCountdown, stopCountdown }
}