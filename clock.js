setInterval(() => {
  const d = new Date();
  const htime = d.getHours();
  const mtime = d.getMinutes();
  const stime = d.getSeconds();
  const hrotation = 30 * htime + mtime / 2;
  const mrotation = 6 * mtime;
  const srotation = 6 * stime;
  document.getElementById("hours").style.transform = ` rotate(${hrotation}deg)`;
  document.getElementById(
    "minutes"
  ).style.transform = `rotate(${mrotation}deg)`;
  document.getElementById(
    "seconds"
  ).style.transform = `rotate(${srotation}deg)`;

  const digitalClock = document.getElementById("digital-clock");
  const formattedTime = `${htime.toString().padStart(2, "0")}:${mtime
    .toString()
    .padStart(2, "0")}:${stime.toString().padStart(2, "0")}`;
  digitalClock.textContent = formattedTime;
}, 1000);
