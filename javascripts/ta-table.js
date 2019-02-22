const WEEKDAY_START_TIME = 8;
const WEEKDAY_STOP_TIME = 17;

var tas = []

function drawSchedule(taArray) {
    tas = taArray;
    for (let hour = WEEKDAY_START_TIME; hour <= WEEKDAY_STOP_TIME; hour++) {
        $('#table_body').append(
            getTableRow(hour)
        );
    }
}

function getTableRow(hour) {
    return '<tr>' +
        '<td class="time_label">' + getTimeString(hour) + '</td>' +
        getTableEntry(DayOfWeek.MONDAY, hour) +
        getTableEntry(DayOfWeek.TUESDAY, hour) +
        getTableEntry(DayOfWeek.WEDNESDAY, hour) +
        getTableEntry(DayOfWeek.THURSDAY, hour) +
        getTableEntry(DayOfWeek.FRIDAY, hour) +
        getTableEntry(DayOfWeek.SATURDAY, hour) +
        '</tr>'
}

function getTimeString(hour) {
    if (hour < 12) {
        return hour + ":00am"
    } else if(hour == 12){
        return "12:00pm"
    }else {
        return (hour - 12) + ":00pm"
    }
}

function getTableEntry(dayOfWeek, hour) {
    var TAsWorking = getTAsWorking(dayOfWeek, hour);

    if (TAsWorking.length > 0) {
        return '<td class="working">' + getTANames(TAsWorking) + '</td>'
    } else {
        return '<td class="not_working"></td>'
    }
}

function getTAsWorking(dayOfWeek, hour){
    var TAsWorking = [];
    for (let i = 0; i < TAS.length; i++) {
        if (TAS[i].isWorking(dayOfWeek, hour)) {
            TAsWorking.push(TAS[i]);
        }
    }
    return TAsWorking;
}

function getTANames(taArray) {
    var nameString = ""
    for (let i = 0; i < taArray.length; i++) {
        nameString += taArray[i].name;
        if (i != taArray.length - 1) {
            nameString += ', '
        }
    }
    return nameString
}