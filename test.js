/* eslint-disable no-undef */
const f = require('./index.js');

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
    let d = new f.AnDate(2019, 0, 2, 3, 4, 5)
    expect(d.when()).toBe('6 months ago')
    d = new f.AnDate(2019, 9, 2, 3, 4, 5)
    expect(d.when()).toBe('3 months from now')
    d = new f.AnDate(2024, 9, 2, 3, 4, 5)
    expect(d.when()).toBe('5 years from now')
    d = new f.AnDate(2019, 6, 30, 3, 4, 5)
    expect(d.when()).toBe('3 days from now')
});

test('consecutiveDates', () => {
    const result = new  f.AnDate(2019, 0, 1).consecutiveDates(3, {'years': 1, 'months': 1})
    expect(result[0].toLocaleDateString()).toBe('2019-1-1')
    expect(result[1].toLocaleDateString()).toBe('2020-2-1')
    expect(result[2].toLocaleDateString()).toBe('2021-3-1')
});
