class ScheduleValue {

    preClassPrefix() {
        return 'assignments/preclass/';
    }

    inClassPrefix() {
        return 'assignments/inclass/';
    }

    constructor(name, preClassAssignment, inClassAssignment) {
        this.name = name;
        this.preClassAssignment = this.preClassPrefix() + preClassAssignment;
        this.inClassAssignment = this.inClassPrefix() + inClassAssignment;
    }
}