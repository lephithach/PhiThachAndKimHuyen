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

const dateInit = "2022-2-12";

var dateStart = new Date(dateInit);
var dateEnd = new Date();

document.querySelector("h2.date").innerText = `${DateDiff.inDays(
  dateStart,
  dateEnd
)} ngày`;
