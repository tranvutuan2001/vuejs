const countDownDate = new Date("Nov 27, 2021 00:00:00").getTime();
const start = new Date("Nov 6, 2021 21:30:00").getTime();

duration = (countDownDate - start) / 1000;
console.log(duration);
const now = new Date().getTime();
const left_org = (countDownDate - now) / 1000;

let width_full = (left_org / duration) * 100;

document.getElementById("hp").style.width = width_full.toString() + "%";
setInterval(() => {
  const now1 = new Date().getTime();
  let left = (countDownDate - now1) / 1000;

  width_full = (left / duration) * 100;
  console.log(width_full);

  document.getElementById("hp").style.width = width_full.toString() + "%";
}, 1000);
