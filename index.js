
class AnDate {
    // TODO: can we make this private? What does static really do?
    // TODO: would using prototype be better?
    static months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    static shortMonths = ["Jan", "Feb", "March", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    constructor(...args) {
        this.date = new Date(...args)
    }
    // basic methods
    year() {
        return this.date.getFullYear()
    }

    month() {
        return this.date.getMonth()
    }

    day() {
        return this.date.getDate()
    }

    hour() {
        return this.date.getHours()
    }

    minute() {
        return this.date.getMinutes()
    }

    second() {
        return this.date.getSeconds()
    }

    milliseconds() {
        return this.date.getMilliseconds()
    }

    // formatting functions
    fullDateString() {
        const day = this.day()
        return `${this.year().toString()} ${AnDate.months[this.month()]} ${(day < 10 ? '0' : '') + day.toString()}`
    }

    static mapStringToLetter(letter) {
        switch (letter) {
            case 'Y':
                return this.year().toString()
            case 'y':
                return (this.year()%100).toString()
            case 'M':
                return AnDate.months[this.month()]
            case 'm':
                return AnDate.shortMonths[this.month()]
            case 'D':
                const day = this.day()
                return (day < 10 ? '0' : '') + day.toString()
            case 'd':
                return this.day()
            case 'H':
                const hour = this.hour()
                return (hour < 10 ? '0' : '') + hour.toString()
            case 'h':
                return this.hour()
            case 'I':
                return //something
            case 'i':
                return //something
            case 'S':
                return //something
            case 's':
                return //something
        }
    }
    // format date
    format(s = null) {
        if (s === null) {
            return this.fullDateString()
        }
        let result = ''
        s.forEach(letter => {
            result += AnDate.mapStringToLetter(letter)
        })
        return result
    }
}