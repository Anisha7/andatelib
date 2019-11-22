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

#### Get the year
`new AnDate(2019, 2, 4).year() // 2019`

#### Get the month
`new AnDate(2019, 2, 4).month() // 2`

#### Get the day
`new f.AnDate(2019, 2, 3, 4, 20, 10, 30).day() // 3`


#### Get the hours'
`new f.AnDate(2019, 2, 2, 4, 20, 10, 30).hours() // 4`


#### Get the minutes
`new f.AnDate(2019, 2, 2, 4, 20, 10, 30).minutes() // 20`

#### Get the seconds
`new f.AnDate(2019, 2, 2, 4, 20, 10, 30).seconds() // 10`

#### Get the milliseconds
`new f.AnDate(2019, 2, 2, 4, 20, 10, 30).milliseconds() // 30`

#### Get the fullDateString
`new f.AnDate(2019, 2, 2, 4, 20, 10, 30).fullDateString() // '2019 March 02'`

#### format string
```
const d = new f.AnDate(2017, 0, 2, 3, 4, 5)
d.format() // '2017 January 02'
d.format('y/m/d') // '17/Jan/2'
d.format('H:I:S') // '03:04:05'
d.format('h:i:s') // '3:4:5'
d.format('Y-M-D h:I:S') // '2017-January-02 3:04:05'
```

#### How long until the date occurs using 'when'
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

#### Get consecutiveDates
```
const result = new f.AnDate(2019, 0, 1).consecutiveDates(3, {'years': 1, 'months': 1})
result[0].toLocaleDateString() // '2019-1-1'
result[1].toLocaleDateString() // '2020-2-1'
result[2].toLocaleDateString() // '2021-3-1'
```


