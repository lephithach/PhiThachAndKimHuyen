var DateDiff = {
  inDays: (dateStart, dateEnd) => {
    let t2 = dateEnd.getTime();
    let t1 = dateStart.getTime();

    return Math.floor((t2 - t1) / (24 * 3600 * 1000));
  },

  inWeeks: (dateStart, dateEnd) => {
    let t2 = dateEnd.getTime();
    let t1 = dateStart.getTime();

    return parseInt((t2 - t1) / (24 * 3600 * 1000 * 7));
  },
};

const convertDateForIos = (date) => {
  var arr = date.split(/[- :]/);
  date = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5]);
  return date;
};

const formatDate = (date) => {
  let day, month, year;

  day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

const dateInit = "2022-2-12 00:00:00";

var dateStart = new Date(convertDateForIos(dateInit));
var dateEnd = new Date();

document.querySelector("h2.date").innerText = `${DateDiff.inDays(
  dateStart,
  dateEnd
)} ngày`;

document.querySelector("p.week").innerText = `(${DateDiff.inWeeks(
  dateStart,
  dateEnd
)} tuần)`;

document.querySelector(".dateEnd").innerText = `${formatDate(
  dateStart
)} - ${formatDate(dateEnd)}`;
