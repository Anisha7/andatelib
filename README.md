# andatelib
 Javascript date library

## Instructions
 `npm install andatelib`

## How to use
#### Create a date
You can pass in year, month, day, hour, minute, seconds in this order.
You can pass in just milliseconds.
You can pass in a string.

```
const d = new AnDate(2019, 2, 4) // year: 2019, month: March, day: 4
const d2 = new AnDate('9/26/1965').year() // year: 1965, month: 9, day: 26
```

#### year()
Returns the year

`new AnDate(2019, 2, 4).year() // 2019`

#### month()
Returns the month number (0-11)

`new AnDate(2019, 2, 4).month() // 2`

#### day()
Returns the day of the month (from 1-31)

`new f.AnDate(2019, 2, 3, 4, 20, 10, 30).day() // 3`


#### hours()
Returns the hour (from 0-23)

`new f.AnDate(2019, 2, 2, 4, 20, 10, 30).hours() // 4`


#### minutes()
Returns the minutes (from 0-59)

`new f.AnDate(2019, 2, 2, 4, 20, 10, 30).minutes() // 20`

#### seconds()
Returns the seconds (from 0-59)

`new f.AnDate(2019, 2, 2, 4, 20, 10, 30).seconds() // 10`

#### milliseconds()
Returns the milliseconds (from 0-999)

`new f.AnDate(2019, 2, 2, 4, 20, 10, 30).milliseconds() // 30`

#### getTime()
Returns the number of milliseconds since midnight Jan 1 1970, and a specified date

`new f.AnDate(2019, 2, 2, 4, 20, 10, 30).getTime() // 1551529210030`

#### fullDateString()
Converts the date into a readable string

`new f.AnDate(2019, 2, 2, 4, 20, 10, 30).fullDateString() // '2019 March 02'`

#### format() or format(s)
Formats the date into a string based on given string formatter.
Keys for '01 July, 2019 05:08:04':
'Y' -> 2019
'y' -> 19
'M' -> July
'm' -> Jul
'D' -> 01
'd' -> 1
'H' -> 05
'h' -> 5
'I' -> 08
'i' -> 8
'S' -> 04
's' -> 4

```
const d = new f.AnDate(2017, 0, 2, 3, 4, 5)
d.format() // '2017 January 02'
d.format('y/m/d') // '17/Jan/2'
d.format('H:I:S') // '03:04:05'
d.format('h:i:s') // '3:4:5'
d.format('Y-M-D h:I:S') // '2017-January-02 3:04:05'
```

#### when()
This returns how much time has passed or is left until the created date.
The metrics are in years, months, days, hours, minutes, or seconds.

```
let d = new f.AnDate(2019, 0, 2, 3, 4, 5)
d.when() // '6 months ago'

d = new f.AnDate(2019, 9, 2, 3, 4, 5)
d.when() // '3 months from now'

d = new f.AnDate(2024, 9, 2, 3, 4, 5)
d.when() // '5 years from now'

d = new f.AnDate(2019, 6, 30, 3, 4, 5)
d.when() // '3 days from now'
```

#### consecutiveDates(repeat, offset)
Takes an offset object with any of the following properties: years, months, days, hours, minutes, seconds, milliseconds and returns repeat amount of consecutive dates.
  
```
const result = new f.AnDate(2019, 0, 1).consecutiveDates(3, {'years': 1, 'months': 1})
result[0].toLocaleDateString() // '2019-1-1'
result[1].toLocaleDateString() // '2020-2-1'
result[2].toLocaleDateString() // '2021-3-1'
```

#### Get Andate.nextDate(dates)
Given an array of dates, it returns the date that occurs next after today 
If all dates occur before today or no dates are provided, this returns today's date

```
let dates = [new f.AnDate(2019, 0, 1), new f.AnDate(2019, 10, 22), new f.AnDate(2019, 11, 1)]
f.AnDate.nextDate(dates) // dates[2]
dates = [new f.AnDate(2019, 0, 1), new f.AnDate(2019, 10, 20), new f.AnDate(2012, 11, 1)]
f.AnDate.nextDate(dates) // today's date
```
