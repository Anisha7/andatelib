/* eslint-disable no-undef */
// const f = require('./index.js');
// const f = require('./umd/andatelib.js');
const f = require('./esm/index.js');

test('year', () => {
    expect(new f.AnDate(2019, 2, 2).year()).toBe(2019);
    expect(new f.AnDate('9/26/1965').year()).toBe(1965);
});

test('month', () => {
    expect(new f.AnDate(2019, 2, 2, 4, 20, 10, 30).month()).toBe(2);
});

test('day', () => {
    expect(new f.AnDate(2019, 2, 3, 4, 20, 10, 30).day()).toBe(3);
});

test('hours', () => {
    expect(new f.AnDate(2019, 2, 2, 4, 20, 10, 30).hours()).toBe(4);
});

test('minutes', () => {
    expect(new f.AnDate(2019, 2, 2, 4, 20, 10, 30).minutes()).toBe(20);
});

test('seconds', () => {
    expect(new f.AnDate(2019, 2, 2, 4, 20, 10, 30).seconds()).toBe(10);
});

test('milliseconds', () => {
    expect(new f.AnDate(2019, 2, 2, 4, 20, 10, 30).milliseconds()).toBe(30);
});

test('getTime', () => {
    expect(new f.AnDate(2019, 2, 2, 4, 20, 10, 30).getTime()).toBe(1551529210030)
})

test('fullDateString', () => {
    expect(new f.AnDate(2019, 2, 2, 4, 20, 10, 30).fullDateString()).toBe('2019 March 02');
})

test('format', () => {
    const d = new f.AnDate(2017, 0, 2, 3, 4, 5)
    expect(d.format()).toBe('2017 January 02')
    expect(d.format('y/m/d')).toBe('17/Jan/2')
    expect(d.format('H:I:S')).toBe('03:04:05')
    expect(d.format('h:i:s')).toBe('3:4:5')
    expect(d.format('Y-M-D h:I:S')).toBe('2017-January-02 3:04:05')
});

test('when', () => {
    // mock date.now
    const DATE_TO_USE = new Date(2019, 10, 22, 2, 41);
    const realDateNow = Date.now.bind(global.Date);
    const dateNowStub = jest.fn(() => DATE_TO_USE);
    global.Date.now = dateNowStub;
    let d = new f.AnDate(2019, 0, 2, 3, 4, 5)
    expect(d.when()).toBe('10 months ago')
    d = new f.AnDate(2019, 9, 2, 3, 4, 5)
    expect(d.when()).toBe('1 month ago')
    d = new f.AnDate(2024, 9, 2, 3, 4, 5)
    expect(d.when()).toBe('5 years from now')
    d = new f.AnDate(2019, 10, 30, 3, 4, 5)
    expect(d.when()).toBe('8 days from now')

    // reset date.now
    global.Date.now = realDateNow;
});

test('consecutiveDates', () => {
    const result = new f.AnDate(2019, 0, 1).consecutiveDates(3, {'years': 1, 'months': 1})
    expect(result[0].toLocaleDateString()).toBe('2019-1-1')
    expect(result[1].toLocaleDateString()).toBe('2020-2-1')
    expect(result[2].toLocaleDateString()).toBe('2021-3-1')
});

test('nextDate', () => {
    let dates = [new f.AnDate(2019, 0, 1), new f.AnDate(2019, 10, 22), new f.AnDate(2019, 11, 1)]
    expect(f.AnDate.nextDate(dates)).toBe(dates[2])
    dates = [new f.AnDate(2019, 0, 1), new f.AnDate(2019, 10, 20), new f.AnDate(2012, 11, 1)]
    expect(f.AnDate.nextDate(dates)).toStrictEqual(new f.AnDate())
})

