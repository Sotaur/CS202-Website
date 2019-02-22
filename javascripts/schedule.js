var classes = [
    new ScheduleValue('What is Software Engineering?', '', ''),
    new ScheduleValue('UI Design Basics', 'UI Design Basics.pdf', 'Lab_ Mr. Music Shop (Part 1).pdf'),
    new ScheduleValue('Creating Wireframe and Screenflow Diagrams with LucidChart', '', ''),
    new ScheduleValue('UML Overview. UML Class Diagrams.', '', ''),
    new ScheduleValue('UML Sequence Diagrams', '', ''),
    new ScheduleValue('Java Overview', '', ''),
    new ScheduleValue('Writing and generating Javadoc', '', ''),
    new ScheduleValue('Source control, intro to Git, simple git commands', '', ''),
    new ScheduleValue('Git: additional commands', '', ''),
    new ScheduleValue('Coding Style (Java), Intellij configuration', '', ''),
    new ScheduleValue('Using Checkstyle', '', ''),
    new ScheduleValue('Code review process', '', ''),
    new ScheduleValue('Debugging / Logging from the command line', '', ''),
    new ScheduleValue('Using an IDE Debugger', '', ''),
]

function fillTable() {
    for (let i = 0; i < classes.length; i++) {
        $('#table_body').append(
            '<tr>' +
            '<td class="class_name">' + classes[i].name + '</td>' +
            '<td>' +
            '<div class="btn-group">' +
            getPreClassAssignment(classes[i]) +
            getInClassAssignment(classes[i]) +
            '</div>' +
            '</td>' +
            '</tr>'
        );
    }
}

function getPreClassAssignment(scheduleValue) {
    if (scheduleValue instanceof ScheduleValue) {
        if (scheduleValue.preClassAssignment == scheduleValue.preClassPrefix()) {
            return '';
        } else {
            return '<a href="' + scheduleValue.preClassAssignment + '" target="_blank" class="btn class_link" role="button">Pre-class Assignment</a>';
        }
    }
}

function getInClassAssignment(scheduleValue) {
    if (scheduleValue instanceof ScheduleValue) {
        if (scheduleValue.inClassAssignment == scheduleValue.inClassPrefix()) {
            return '';
        } else {
            return '<a href="' + scheduleValue.inClassAssignment + '" target="_blank" class="btn class_link" role="button">In-class Assignment</a>';
        }
    }
}


$(document).ready(function() {
    fillTable();
})