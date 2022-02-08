import {format, addDays} from 'date-fns';

const getDate = () => {
    return today();
}


const today = (date) => {
    date = new Date();
    return date;
}

const tomorrow = (date) => {
    return date = addDays(date, 1)
}

export const nextWeek = (date) => {
    return addDays(date, 7)
}

export const formatDate = (date) => {
    const dateFormatted = format(date, 'MM/dd/yyyy');
    return dateFormatted;
}


export default getDate;
