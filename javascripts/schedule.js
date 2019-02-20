var classes = [
    new ScheduleValue('What is Software Engineering?', null),
    new ScheduleValue('UI Design Basics', 'https://docs.google.com/document/d/1RZ7O4ySqMvLBCcE-jWCM_1Ba_z2AvpjMOcn-gsYemNs/edit?usp=sharing'),
    new ScheduleValue('Creating Wireframe and Screenflow Diagrams with LucidChart', null),
    new ScheduleValue('UML Overview. UML Class Diagrams.', null),
    new ScheduleValue('UML Sequence Diagrams', null),
    new ScheduleValue('Java Overview', null),
    new ScheduleValue('Writing and generating Javadoc', null),
    new ScheduleValue('Source control, intro to Git, simple git commands', null),
    new ScheduleValue('Git: additional commands', null),
    new ScheduleValue('Coding Style (Java), Intellij configuration', null),
    new ScheduleValue('Using Checkstyle', null),
    new ScheduleValue('Code review process', null),
    new ScheduleValue('Debugging / Logging from the command line', null),
    new ScheduleValue('Using an IDE Debugger', null),
]

function fillTable() {
    for (let i = 0; i < classes.length; i++) {
        $('#table_body').append(
            '<tr>' +
            '<td>' + classes[i].name + '</td>' +
            '<td>' + getPreReading(classes[i]) + '</td>' +
            '</tr>'
        );
    }
}

function getPreReading(scheduleValue) {
    if (scheduleValue.assignment == null) {
        return '';
    } else {
        return '<a href="' + scheduleValue.assignment + '"> ' + 'Pre-Class Assignment' + ' </a>';
    }
}


$(document).ready(function() {
    fillTable();
})