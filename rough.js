// What is a date? 

// Make a Date
const today = new Date() // Gets the time now
console.log(today)  // Print the date
console.log(today.getTime()) // It's really a number
// It's really the number of milliseconds since 1970
// get the number of years since 1970
console.log(today / 1000 / 60 / 60 / 24 / 365.25) 

console.log('-------- Age --------')

// You can make a date from almost any 
// human readable string for example: 

const bday = new Date('Sept 26, 1953')
const age = today - bday // find your age
console.log(age)

// console.log(bday.getTime())

// Calculate your age
console.log(age / 1000)


console.log('----------------')

// You can also initialize a date with 
// year, month, date, hours, mins, secs, ms
// (month is 0 indexed Jan == 0)

const newYear = new Date(2020, 0, 1)
// Get the components from a date
console.log(newYear.getFullYear(), newYear.getMonth(), newYear.getDate())
// To get the month by name you might: 
const months = ['Jan','Feb','Mar','Apr','May','Jun', 'Jul','Aug','Sep','Oct','Nov','Dec']
console.log(months[newYear.getMonth()])

// Get your bday month



console.log('----------------')

// Date offsets show the difference between two dates

const date = new Date()          // Get today 
const startDate = new Date(date) // copy the date
const dueDate = new Date(date)   // copy the date

// Start date have been 7 days ago
startDate.setDate(date.getDate() - 7) // 7/20

// Due date is 3 days from now
dueDate.setDate(date.getDate() + 3) // 7/30

console.log(startDate.getDate(), dueDate.getDate())

console.log('--------- Problem 1 --------')

// Try these problems 

// Schedule future dates - Given a date return a list of dates separated by a time

// Takes an offset of days
function consecutiveDates(date, repeat, offset) {
  let result = []
  result.push(date)
  const startDate = new Date(date)
  for (i = 1; i < repeat; i += 1) {
    startDate.setDate(startDate.getDate() + offset)
    result.push(new Date(startDate))
  }
  return result
}

const result1 = consecutiveDates(new Date(2019, 0, 1), 4, 3)
result1.forEach(date => {
  console.log(date.toLocaleString())
})
console.log('----------------')

// Should return an array with dates:
// 1. 1/1/2019
// 2. 1/4/2019
// 3. 1/7/2019
// 4. 1/10/2019

// Stretch goals 
// add a unit for time:
// consecutiveDates(new Date(2019, 0, 1), 3, 1, 'year')
// Should return an array of 3 dates separated by 1 year

// 1. 1/1/2019
// 2. 1/1/2020
// 3. 1/1/2021

// new Date(date.getFullYear() + years, date.getMonth() + months, getDate() + days, date.getHours() + hours, date.getMinutes() + minutes, date.getSeconds() + seconds, date.getMilliseconds() + milliseconds)
// new Date(year, month, day, hours, minutes, seconds, milliseconds)

function createDate(date, offset) {
  return new Date(date.getFullYear() + offset.years, date.getMonth() + offset.months, date.getDate() + offset.days, date.getHours() + offset.hours, date.getMinutes() + offset.minutes, date.getSeconds() + offset.seconds, date.getMilliseconds() + offset.milliseconds)
}

function getOffsetObject(offset, unit = 'day') {
  offsetObject = {
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
  }
  
  switch (unit.toLowerCase()) {
    case 'year':
      offsetObject.years = offset
      break
    
    case 'month':
      offsetObject.months = offset 
      break
    
    case 'day':
      offsetObject.days = offset 
      break
    
    case 'hour':
      offsetObject.hours = offset 
      break
    
    case 'minute':
      offsetObject.minutes = offset 
      break
    
    case 'second':
      offsetObject.seconds = offset 
      break
    
    case 'millisecond':
      offsetObject.milliseconds = offset 
      break
  }

  return offsetObject
}

// Takes a offset and a unit for offset
function consecutiveDatesFancy(date, repeat, offset, unit = 'day') {
  let result = []
  result.push(date)
  let offsetObject = getOffsetObject(offset, unit)
  for (i = 1; i < repeat; i += 1) {
    result.push(createDate(result[i-1], offsetObject))
  }
  return result
}

// const unit = 'Year'
// today['get'+unit]()
console.log('--------- Problem 1 FANCY --------')
const result2 = consecutiveDatesFancy(new Date(2019, 0, 1), 3, 1, 'year')
result2.forEach(date => {
  console.log(date.toLocaleString())
})
console.log('----------------')
// Should return an array of 3 dates separated by 1 year

// 1. 1/1/2019
// 2. 1/1/2020
// 3. 1/1/2021

// Takes an offset object with any of the following properties: years, months, days, hours, minutes, seconds, milliseconds
function consecutiveDatesFancier(date, repeat, offset) {
  let offsetObject = {
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
  }
  offsetObject = { ...offsetObject, ...offset }
  
  let result = []
  result.push(date)
  for (i = 1; i < repeat; i += 1) {
    result.push(createDate(result[i-1], offsetObject))
  }
  return result
}

console.log('--------- Problem 1 FANCIER --------')
const result3 = consecutiveDatesFancier(new Date(2019, 0, 1), 3, {'years': 1, 'months': 1})
result3.forEach(date => {
  console.log(date.toLocaleString())
})
console.log('----------------')

console.log('--------- Problem 2 --------')

// Write a function to order dates
// Takes an array of dates, returns an array of ordered dates

function orderDates(dates) {
  // orders the dates 
  // returns a new array of ordered dates
}

orderDates([today, dueDate, startDate, bday, newYear])

// [date, date, date, date]

// Stretch: Return an object containing three keys each holding an array of dates. The keys are: 

// - past: array of dates that happened before today
// - present: all dates that happen today
// - furture: all of the dates that will occur in the future

// { past: [...], present:[...], future:[...] }

console.log('--------- Problem 3 --------')

// Given an array of dates find the date that will happen next. 
// That is the one closest to right now but not past.

function nextDate(dates) {
  // find the date that will happen next in dates
  // return the next date
}

nextDate([today, dueDate, startDate, bday, newYear])

// Stretch Goal: Return a human readable string: 
// Your next appointment is 3 days from now. 

console.log('--------- Problem 4 --------')

// Birthday planner. Write a function that takes a date (your birthday) 
// and a year, and returns the day of the week for that date in that year. 

function whensYourParty(date, year) {
  // Find the day of the year for your birthday
}

whensYourParty(bday, 2022)

// Stretch Goal: Return an array listing all 
// the days when your birthday occured since 
// you were born. 



