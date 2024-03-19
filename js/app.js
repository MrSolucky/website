function updateClock() {
  const now = new Date();
  const pacificTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));

  // Calculate the time remaining until midnight in Los Angeles (in milliseconds)
  const midnight = new Date(pacificTime);
  midnight.setHours(24, 0, 0, 0);
  const timeDiff = midnight - pacificTime;

  // Convert the time difference to hours, minutes, and seconds
  let hours = Math.floor(timeDiff / (1000 * 60 * 60));
  let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  document.getElementById('hours').innerText = formatTime(hours);
  document.getElementById('minutes').innerText = formatTime(minutes);
  document.getElementById('seconds').innerText = formatTime(seconds);
}

function formatTime(time) {
  return time.toString().padStart(2, '0');
}

// Update the clock every second
setInterval(updateClock, 1000);

// Update the clock initially when the page loads
updateClock();