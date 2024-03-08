// Progress bar with date
function getDaysRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return days;
}

function getTimeSince(starttime) {
    var t = Date.parse(new Date()) - Date.parse(starttime);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var weeks = Math.floor(days / 7);
    var daysOfWeek = days % 7;
    return {
        'weeks': weeks,
        'days': daysOfWeek
    };
}

function humaniseSince(weeks, days) {
    var text = weeks.toString();
    if (days > 0) text = text.concat('+', days.toString());
    text = text.concat(' weeks pregnant');
    return text;
}

function getPercentage(starttime, endtime) {
    startDate = Date.parse(starttime);
    endDate = Date.parse(endtime);

    diff = endDate - startDate;
    totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

    var progressDiff = Date.parse(new Date()) - Date.parse(starttime);
    var progressDays = Math.floor(progressDiff / (1000 * 60 * 60 * 24));

    decimal = progressDays / totalDays;

    percentage = Math.floor(decimal * 100);
    return percentage
}

var startDate = '2022-01-31';
var endDate = '2022-02-30';

var timeGone = getTimeSince(startDate);
var daysLeft = getDaysRemaining(endDate);
var sinceText = humaniseSince(timeGone['weeks'], timeGone['days'])
var percentComplete = getPercentage(startDate, endDate);

document.getElementById('progressbarlinear').style.width = percentComplete.toString() + '%';