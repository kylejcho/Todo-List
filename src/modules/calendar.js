import { getDaysInMonth, getDay , startOfMonth, format} from "date-fns";

const calendar = document.querySelector('#calendar');

export const getDaysMonth = (date) => {
    return getDaysInMonth(date);
}

export const getDayOfWeek = () => {
    return getDay(startOfMonth(new Date));
}


const makeCalendar = (date) => {
    const startDay = getDayOfWeek();

    for (let i = 0; i < startDay; i++) {
        const calendarBlank = document.createElement('div');
        calendarBlank.className = "calendarBlank"
        calendar.append(calendarBlank);
    }

    const today = parseInt(format(date, 'd')) 
    const daysInMonth = getDaysMonth(date);
    const daysRemaining = daysInMonth - today + 1;

    let day = 1;
    for (let i = 0; i < today - 1; i++) {
        const calendarDay = document.createElement('div');
        calendarDay.className = "calendarDayPast";
        calendarDay.innerText = day;
        calendar.append(calendarDay);
        day++;
    }    
    for (let i = 0; i < daysRemaining; i++) {
        const calendarDay = document.createElement('div');
        calendarDay.className = "calendarDay";
        calendarDay.innerText = day;
        calendar.append(calendarDay);
        day++;
    }
}


export const resetCalendar = () => {
    const calendar = document.querySelector('#calendar');
    const inputCalendarOptions = document.querySelector('#inputCalendarOptions')
    calendar.remove();

    const newCalendar = document.createElement('div')
    newCalendar.id = 'calender';
    inputCalendarOptions.append(newCalendar);
}

export const stringToDate = (string) => {
    const words = string.split(' ')
    let monthStr = words[0];
    let day = words[1];

    let month;
    switch (monthStr){
        case 'Jan':
            month = 'January';
            break;
        case 'Feb':
            month = 'Febuary';
            break;
        case 'Mar':
            month = 'March';
            break;
        case 'Apr':
            month = 'April';
            break;
        case 'Jun':
                month = 'June';
                break;
        case 'Jul':
            month = 'July';
            break;
        case 'Aug':
            month = 'August';
            break;
        case 'Sep':
            month = 'September';
            break;
        case 'Oct':
            month = 'October';
            break;
        case 'Dec':
            month = 'December';
    }

    const year = format(new Date, 'yyyy')

    return new Date(`${month} ${day}, ${year}`);
}

export default makeCalendar;