export const pad = (number, i) => {
    if(number.toString().length < i) {
        number = '0' + number;
        return pad(number, i);
    } else return number;
}