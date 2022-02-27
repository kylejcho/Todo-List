import { getDaysInMonth, getDay , startOfMonth} from "date-fns";

const calendar = document.querySelector('#calendar');

export const getDaysMonth = () => {
    return getDaysInMonth(new Date());
}

export const getDayOfWeek = () => {
    return getDay(startOfMonth(new Date));
}


const makeCalendar = () => {
    const startDay = getDayOfWeek();
    console.log(startDay)
    for (let i = 0; i < startDay; i++) {
        const calendarBlank = document.createElement('div');
        calendarBlank.className = "calendarBlank"
        calendar.append(calendarBlank);
    }

    const daysInMonth = getDaysMonth();
    let day = 1;
    for (let i = 0; i < daysInMonth; i++) {
        const calendarDay = document.createElement('div');
        calendarDay.className = "calendarDay";
        calendarDay.innerText = day;
        calendar.append(calendarDay);
        day++;
    }    
}


export default makeCalendar;