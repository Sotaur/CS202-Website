var classes = [
    new ScheduleValue('What is Software Engineering?', null, null),
    new ScheduleValue('UI Design Basics', 'pages/preclass_assignments/UI Design Basics.pdf', 'pages/inclass_assignments/Lab_ Mr. Music Shop (Part 1).pdf'),
    new ScheduleValue('Creating Wireframe and Screenflow Diagrams with LucidChart', null, null),
    new ScheduleValue('UML Overview. UML Class Diagrams.', null, null),
    new ScheduleValue('UML Sequence Diagrams', null, null),
    new ScheduleValue('Java Overview', null, null),
    new ScheduleValue('Writing and generating Javadoc', null, null),
    new ScheduleValue('Source control, intro to Git, simple git commands', null, null),
    new ScheduleValue('Git: additional commands', null, null),
    new ScheduleValue('Coding Style (Java), Intellij configuration', null, null),
    new ScheduleValue('Using Checkstyle', null, null),
    new ScheduleValue('Code review process', null, null),
    new ScheduleValue('Debugging / Logging from the command line', null, null),
    new ScheduleValue('Using an IDE Debugger', null, null),
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
            '</div>' 
            + '</td>' +
            '</tr>'
        );
    }
}

function getPreClassAssignment(scheduleValue) {
    if (scheduleValue instanceof ScheduleValue){
        if (scheduleValue.preClassAssignment == null) {
            return '';
        } else {
            return '<a href="' + scheduleValue.preClassAssignment + '" target="_blank" class="btn class_link" role="button">Pre-class Assignment</a>';
        }
    }
}

function getInClassAssignment(scheduleValue) {
    if (scheduleValue instanceof ScheduleValue){
        if (scheduleValue.inClassAssignment == null) {
            return '';
            // return '<a href="#" target="_blank" class="btn class_link" role="button">View Assignment</a>';
        } else {
            return '<a href="' + scheduleValue.inClassAssignment + '" target="_blank" class="btn class_link" role="button">In-class Assignment</a>';
        }
    }
}


$(document).ready(function() {
    fillTable();
})