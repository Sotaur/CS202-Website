var classes = [
    new ScheduleValue('What is Software Engineering?'),
    new ScheduleValue('UI Design Basics'),
    new ScheduleValue('Creating Wireframe and Screenflow Diagrams with LucidChart'),
    new ScheduleValue('UML Overview. UML Class Diagrams.'),
    new ScheduleValue('UML Sequence Diagrams'),
    new ScheduleValue('Java Overview'),
    new ScheduleValue('Writing and generating Javadoc'),
    new ScheduleValue('Source control, intro to Git, simple git commands'),
    new ScheduleValue('Git: additional commands'),
    new ScheduleValue('Coding Style (Java), Intellij configuration'),
    new ScheduleValue('Using Checkstyle'),
    new ScheduleValue('Code review process'),
    new ScheduleValue('Debugging / Logging from the command line'),
    new ScheduleValue('Using an IDE Debugger'),
]

function fillTable() {
    for (let i = 0; i < classes.length; i++) {
        $('#table_body').append(
            '<tr>' +
            '<td>' + classes[i].name + '</td>' +
            '<td>' + "" + '</td>' +
            '</tr>'
        );
    }
}


$(document).ready(function () {
    fillTable();
})