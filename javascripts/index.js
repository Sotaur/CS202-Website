var professors = [
    new Professor(
        "Dr. Jerod Wilkerson",
        "https://cs.byu.edu/sites/default/files/styles/faculty_listing/public/pictures/picture-27467-1534965535.jpg?itok=kZC3pHdB",
        "jwilkerson@cs.byu.edu",
        "(801)422-7776",
        new Office(
            "2218 TMCB",
            [
                new OfficeHour(DayOfWeek.MONDAY, 8,12)
            ]
        ),
        "Email"
    )
];

var announcements = [
    new Announcement(
        "Welcome to Class!",
        `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie semper justo vitae consectetur. Ut
        sed iaculis ex. Integer volutpat tellus semper nunc ultrices, eu suscipit dui tincidunt. Aliquam massa
        risus, elementum id nibh eget, condimentum sodales erat. Donec tempus urna sit amet dui pharetra, sit amet
        rutrum est aliquet. Cras tincidunt at elit sit amet rhoncus. Suspendisse elit massa, interdum ac nisi
        sagittis, molestie ornare orci. Donec semper tellus a scelerisque posuere.</p>`,
        new Date(2019, 1, 22)
    )
]

$(document).ready(function () {
    drawAnnouncements(announcements);
    drawProfessors(professors);
})

function drawAnnouncements(announcements) {
    for (let i = 0; i < announcements.length; i++){
        $("#announcements").append(
            getAnnouncementHtml(announcements[i])
        );
    }
}

function getAnnouncementHtml(announcement) {
    if (announcement instanceof Announcement){
        return '<small class="float-right">Posted ' + getDateString(announcement.timeStamp) + '</small>' +
        '<h4>'+ announcement.title +'</h4>'+
        announcement.bodyHtml +
        '<hr>'
    }
}

function getDateString(date){
    if (date instanceof Date){
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString("en-US", options);
    }
}

function drawProfessors(professors) {
    for (let i = 0; i < professors.length; i++) {
        $("#professor_rows").append(
            getProfessorHtml(professors[i])
        );
    }
}

function getProfessorHtml(professor) {
    if (professor instanceof Professor) {
        return '<div class="prof_row">' +
            '<div class="row">' +
            '<div class="col-2">' +
            '<img src="' + professor.picture + '" class="rounded-circle prof_img">' +
            '</div>' +
            '<div class="col-6">' +
            '<h3>' + professor.name + '</h3>' +
            '<p>' +
            '<span class="font-weight-bold"> Email: </span>' + professor.email + '<br>' +
            '<span class="font-weight-bold"> Phone: </span>' + professor.phone + '<br>' +
            '<span class="font-weight-bold"> Office: </span>' + professor.office.location + '<br>' +
            getOfficeHoursHTML(professor) +
            '<span class="font-weight-bold"> Best Contacted By: </span>' + professor.bestContactMethod + '<br>' +
            '</p>' +
            '</div>' +
            '</div>' +
            '</div>'
    }
    return "";
}

function getOfficeHoursHTML(professor) {
    if (professor instanceof Professor) {
        var officeHours = professor.office.officeHours;
        var html = "";
        for (let i = 0; i < officeHours.length; i++) {
            html += getOfficeHourHTML(officeHours[i]) + "<br>"
        }
        return html;
    }
}

function getOfficeHourHTML(officeHour) {
    if (officeHour instanceof OfficeHour) {
        var html = "";
        switch (officeHour.dayOfWeek) {
            case DayOfWeek.MONDAY:
                html += "Monday "
                break;
            case DayOfWeek.TUESDAY:
                html += "Tuesday "
                break;
            case DayOfWeek.WEDNESDAY:
                html += "Wednesday "
                break;
            case DayOfWeek.THURSDAY:
                html += "Thursday "
                break;
            case DayOfWeek.FRIDAY:
                html += "Friday "
                break;
            case DayOfWeek.SATURDAY:
                html += "Saturday "
                break;
        }

        html += getTimeString(officeHour.startHour);
        html += '-';
        html += getTimeString(officeHour.stopHour);
        return html;
    }
}

function getTimeString(hour) {
    if (hour < 12) {
        return hour + ":00am"
    } else if (hour == 12) {
        return "12:00pm"
    } else {
        return (hour - 12) + ":00pm"
    }
}