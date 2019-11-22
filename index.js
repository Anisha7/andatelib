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

  getTime() {
    return this.date.getTime();
  }

  // formatting functions
  fullDateString() {
    return `${this.mapStringToLetter("Y")} ${this.mapStringToLetter(
      "M"
    )} ${this.mapStringToLetter("D")}`;
  }

  // helper function
  mapStringToLetter(letter) {
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
      default:
        return letter;
    }
  }
  // format date
  format(s = null) {
    if (s === null) {
      return this.fullDateString();
    }
    let result = "";
    s.split("").forEach(letter => {
      result += this.mapStringToLetter(letter);
    });
    return result;
  }

  // TODO: returns a human readable description of 'when' a date will occur
  when() {
    const now = new AnDate()

    const years = this.year() - now.year()
    if (years !== 0) {
        const s = Math.abs(years) == 1 ? 'year' : 'years'
        return years > 0 ? `${years} ${s} from now` : `${Math.abs(years)} ${s} ago`;
    }

    const months = this.month() - now.month()
    if (months !== 0) {
        const s = Math.abs(months) === 1 ? 'month' : 'months'
        return months > 0 ? `${months} ${s} from now` : `${Math.abs(months)} ${s} ago`;
    }

    const days = this.day() - now.day()
    if (days !== 0) {
        const s = Math.abs(days) == 1 ? 'day' : 'days'
        return days > 0 ? `${days} ${s} from now` : `${Math.abs(days)} ${s} ago`;
    }

    const hours = this.hours() - now.hours()
    if (hours !== 0) {
        const s = Math.abs(hours) == 1 ? 'hour' : 'hours'
        return hours > 0 ? `${hours} ${s} from now` : `${Math.abs(hours)} ${s} ago`;
    }

    const minutes = this.minutes() - now.minutes()
    if (minutes !== 0) {
        const s = Math.abs(minutes) == 1 ? 'minute' : 'minutes'
        return minutes > 0 ? `${minutes} ${s} from now` : `${Math.abs(minutes)} ${s} ago`;
    }

    const seconds = this.seconds() - now.seconds()
    if (seconds !== 0) {
        const s = Math.abs(seconds) == 1 ? 'second' : 'seconds'
        return seconds > 0 ? `${seconds} ${s} from now` : `${Math.abs(seconds)} ${s} ago`;
    }

    return "Right now!"
  }

  // Takes an offset object with any of the following properties: years, months, days, hours, minutes, seconds, milliseconds
  consecutiveDates(repeat, offset) {
    // Why doesn't this return the AnDate class object, with all its properties?
    const createDate = (date, offset) => {
      date = new AnDate(date)
      return new AnDate(
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
    result.push(this);
    for (let i = 1; i < repeat; i += 1) {
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
AnDate.orderDates = function(dates) {
  return dates;
};

//
// Given an array of dates find the date that will happen next.
// That is the one closest to right now but not past.
// If no dates are given or no future dates are given, it returns today
AnDate.nextDate = function(dates) {
  const today = new AnDate().getTime()
  if (dates.length == 0) {
    return new AnDate()
  }
  // find the date that will happen next in dates
  // return the next date
  let result = dates[0]

  // find the date
  dates.forEach(date => {
    const diff = date.getTime() - today
    const oldDiff = result.getTime() - today
    // if this date is closer to today, update value
    if ( (diff > 0 && diff < oldDiff) || (oldDiff < 0 && diff > oldDiff)) {
      result = date
    }
  })

  // ensure that result is not a past date, or return today
  if (result.getTime() - today < 0) {
    return new AnDate()
  }
  // found a valid date
  return result
};

module.exports.AnDate = AnDate;
