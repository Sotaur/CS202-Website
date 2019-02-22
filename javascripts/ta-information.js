const TAS = [
    new TA("Ryan",
        "ryandremer@gmail.com",
        // image url
        "https://www.lds.org/api/mlu/scdn/v2/img/94b99b6c-dcf8-417d-8cb2-5b3572a0c75c/MEDIUM",
        [
            new TATimeSlot(DayOfWeek.TUESDAY, 12, 17),
            new TATimeSlot(DayOfWeek.THURSDAY, 14, 18),
        ]),
    new TA("John",
        "email@gmail.com",
        "https://openclipart.org/download/275133/persongeneric.svg",
        [
            new TATimeSlot(DayOfWeek.MONDAY, 8, 12),
            new TATimeSlot(DayOfWeek.FRIDAY, 8, 12)
        ]),
    new TA("Christian",
        "email@gmail.com",
        "https://openclipart.org/download/275133/persongeneric.svg",
        [
            new TATimeSlot(DayOfWeek.MONDAY, 8, 12),
            new TATimeSlot(DayOfWeek.THURSDAY, 8, 12)
        ]),
];

$(document).ready(function () {
    // in ta-table.js
    drawSchedule(TAS);
    drawTARows(TAS);
})

