export default function (date) {
    if (Number.isNaN((new Date(date)).valueOf())) {
        alert("Please enter a valid date");
        return false;
    }
    return true;
}