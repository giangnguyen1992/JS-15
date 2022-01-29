const giveawayEndDateBox = document.querySelector(".giveaway");
const daysBox = document.querySelector(".days");
const hourBox = document.querySelector(".hours");
const minuteBox = document.querySelector(".minutes");
const secondBox = document.querySelector(".seconds");

const giveAwayEndDate = dayjs("2022-02-20 12:12");

giveawayEndDateBox.innerText = `Giveaway Ends On ${giveAwayEndDate.format(
  "dddd, DD MMMM YYYY, hh:mma"
)}`;

function dhm(ms) {
  const days = Math.floor(ms / (24 * 60 * 60 * 1000));
  const daysms = ms % (24 * 60 * 60 * 1000);
  const hours = Math.floor(daysms / (60 * 60 * 1000));
  const hoursms = ms % (60 * 60 * 1000);
  const minutes = Math.floor(hoursms / (60 * 1000));
  const minutesms = ms % (60 * 1000);
  const sec = Math.floor(minutesms / 1000);
  return {
    days,
    hours,
    minutes,
    sec,
  };
}

function setDiffTime() {
  const now = dayjs();

  const different = giveAwayEndDate.diff(now);
  daysBox.innerText = dhm(different).days;
  hourBox.innerText = dhm(different).hours;
  minuteBox.innerText = dhm(different).minutes;
  secondBox.innerText = dhm(different).sec;
}

setDiffTime();
setInterval(setDiffTime, 1000);
