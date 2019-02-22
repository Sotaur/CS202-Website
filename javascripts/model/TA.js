class TA {
    constructor(name, email, picture, taTimeSlots) {
        this.name = name;
        this.email = email;
        this.picture = picture;
        this.taTimeSlots = taTimeSlots
    }

    isWorking(dayOfWeek, hour) {
        for (let i = 0; i < this.taTimeSlots.length; i++) {
            var currentTAHour = this.taTimeSlots[i];
            if (currentTAHour.dayOfWeek == dayOfWeek &&
                currentTAHour.startHour <= hour &&
                hour < currentTAHour.stopHour) {
                return true
            }
        }
        return false;
    }
}

class TATimeSlot {
    // start and stop hours are from 0-23
    constructor(dayOfWeek, startHour, stopHour) {
        this.dayOfWeek = dayOfWeek;
        this.startHour = startHour;
        this.stopHour = stopHour;
    }
}

const DayOfWeek = {
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
    FRIDAY: 5,
    SATURDAY: 6,
}

