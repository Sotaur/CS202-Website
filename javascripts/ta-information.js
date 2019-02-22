const TAS = [
    new TA("Ryan",
        "ryandremer@gmail.com",
        // image url
        "assets/RyanRemer.jpg",
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

