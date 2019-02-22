class Professor {
    constructor(name, picture,  email, phone, office, bestContactMethod){
        this.name = name;
        this.picture = picture;
        this.email = email;
        this.phone = phone;
        this.office = office;
        this.bestContactMethod = bestContactMethod;
    }
}

class Office {
    constructor(location, officeHours){
        this.location = location;
        this.officeHours = officeHours;
    }
}

class OfficeHour {
    // Hours are from 0-23
    constructor(dayOfWeek, startHour, stopHour){
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
