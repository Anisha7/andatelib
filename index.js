class AnDate {
  constructor(...args) {
    this.date = new Date(...args);
  }
  // basic methods
  year() {
    return this.date.getFullYear();
  }

  month() {
    return this.date.getMonth();
  }

  day() {
    return this.date.getDate();
  }

  hours() {
    return this.date.getHours();
  }

  minutes() {
    return this.date.getMinutes();
  }

  seconds() {
    return this.date.getSeconds();
  }

  milliseconds() {
    return this.date.getMilliseconds();
  }

  // formatting functions
  fullDateString() {
    const day = this.day();
    return `${mapStringToLetter("Y")} ${mapStringToLetter(
      "M"
    )} ${mapStringToLetter("D")}`;
  }

  static mapStringToLetter(letter) {
    switch (letter) {
      case "Y":
        return this.year().toString();
      case "y":
        return (this.year() % 100).toString();
      case "M":
        return AnDate.months[this.month()];
      case "m":
        return AnDate.shortMonths[this.month()];
      case "D":
        const day = this.day();
        return (day < 10 ? "0" : "") + day.toString();
      case "d":
        return this.day();
      case "H":
        const hour = this.hours();
        return (hour < 10 ? "0" : "") + hour.toString();
      case "h":
        return this.hours();
      case "I":
        const minute = this.minutes();
        return (minute < 10 ? "0" : "") + minute.toString();
      case "i":
        return this.minutes();
      case "S":
        const second = this.seconds();
        return (second < 10 ? "0" : "") + second.toString();
      case "s":
        return this.seconds();
    }
  }
  // format date
  format(s = null) {
    if (s === null) {
      return this.fullDateString();
    }
    let result = "";
    s.forEach(letter => {
      result += AnDate.mapStringToLetter(letter);
    });
    return result;
  }

  // TODO: returns a human readble description of 'when' a date will occur
  when() {
    return;
  }

  // Takes an offset object with any of the following properties: years, months, days, hours, minutes, seconds, milliseconds
  consecutiveDates(date, repeat, offset) {
    const createDate = (date, offset) => {
      return new Date(
        date.getFullYear() + offset.years,
        date.getMonth() + offset.months,
        date.getDate() + offset.days,
        date.getHours() + offset.hours,
        date.getMinutes() + offset.minutes,
        date.getSeconds() + offset.seconds,
        date.getMilliseconds() + offset.milliseconds
      );
    };
    let offsetObject = {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    };
    offsetObject = { ...offsetObject, ...offset };

    let result = [];
    result.push(date);
    for (i = 1; i < repeat; i += 1) {
      result.push(createDate(result[i - 1], offsetObject));
    }
    return result;
  }
}

// Class variables
// TODO: can we make this private? What does static really do?
// TODO: would using prototype be better?
AnDate.shortMonths = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];
AnDate.months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

// Class functions

//
// TODO: Takes an array of dates, returns an array of ordered dates
// Stretch: Return an object containing three keys each holding an array of dates. The keys are: 

// - past: array of dates that happened before today
// - present: all dates that happen today
// - furture: all of the dates that will occur in the future

// { past: [...], present:[...], future:[...] }
//
AnDate.orderDates = function (dates) {
    return dates
}

//
// TODO: Given an array of dates find the date that will happen next. 
// That is the one closest to right now but not past.
//
AnDate.nextDate = function (dates) {
    // find the date that will happen next in dates
    // return the next date
  }


export default AnDate;