
function getDayName(dateString) {
    let dayName;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date(dateString);
    dayName = days[d.getDay()];
    return dayName;
}

console.log(getDayName("10/11/2009"));
