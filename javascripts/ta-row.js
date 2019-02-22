function drawTARows(taArray) {
    for (let i = 0; i < taArray.length; i++) {
        $('#ta_rows').append(
            getTARow(taArray[i])
        );
    }
}

function getTARow(ta) {
    if (ta instanceof TA) {
        return '<div class="ta_row">' +
            '<div class="row">' +
            '<div class="col-2">' +
            '<img src="' + ta.picture + '" class="rounded-circle ta_img">' +
            '</div>' +
            '<div class="col-6">' +
            '<h3>' + ta.name + '</h3>' +
            '<p>' +
            '<span class="font-weight-bold"> Email: </span>' + ta.email + '<br>' +
            '<span class="font-weight-bold"> Working Hours: </span>' + getTimeSlotsString(ta) +
            '</p>' +
            '</div>' +
            '</div>' +
            '</div>'
    }
    return ""
}

function getTimeSlotsString(ta) {
    var timeSlotsString = "";
    if (ta instanceof TA) {
        for (let i = 0; i < ta.taTimeSlots.length; i++) {
            timeSlotsString += getTimeSlotString(ta.taTimeSlots[i]);

            if (i != ta.taTimeSlots.length - 1){
                timeSlotsString += ", "
            }
        }
    }
    return timeSlotsString;
}

function getTimeSlotString(timeSlot) {
    var timeSlotString = "";
    if (timeSlot instanceof TATimeSlot) {
        switch (timeSlot.dayOfWeek) {
            case DayOfWeek.MONDAY:
                timeSlotString += "Monday "
                break;
                case DayOfWeek.TUESDAY:
                timeSlotString += "Tuesday "
                break;
                case DayOfWeek.WEDNESDAY:
                timeSlotString += "Wednesday "
                break;
                case DayOfWeek.THURSDAY:
                timeSlotString += "Thursday "
                break;
                case DayOfWeek.FRIDAY:
                timeSlotString += "Friday "
                break;
                case DayOfWeek.SATURDAY:
                timeSlotString += "Saturday "
                break;
        }

        timeSlotString += getTimeString(timeSlot.startHour);
        timeSlotString += '-';
        timeSlotString += getTimeString(timeSlot.stopHour);
    }

    return timeSlotString;
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