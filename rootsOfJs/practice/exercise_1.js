const dayStart = "07:30";
const dayEnd = "17:45";

function calculateEndTime(startTime, durationMinutes) {
  const startTimeHours = Number(startTime.slice(0, 2));
  const startTimeMinutes = Number(startTime.slice(3, startTime.length));
  const endTimeConvertedMins =
    startTimeHours * 60 + startTimeMinutes + durationMinutes;
  const endTimeHours = String(Math.floor(endTimeConvertedMins / 60)).padStart(
    2,
    "0"
  );
  const endTimeMinutes = String(
    endTimeConvertedMins - endTimeHours * 60
  ).padStart(2, "0");
  return `${endTimeHours}:${endTimeMinutes}`;
}

function scheduleMeeting(startTime, durationMinutes) {
  startTime = startTime.padStart(5, "0");
  const endTime = calculateEndTime(startTime, durationMinutes);
  if (startTime >= dayStart && endTime <= dayEnd) {
    console.log("true");
    return true;
  }
  console.log("false");
  return false;
}

scheduleMeeting("7:00", 15); // false
scheduleMeeting("07:15", 30); // false
scheduleMeeting("7:30", 30); // true
scheduleMeeting("11:30", 60); // true
scheduleMeeting("17:00", 45); // true
scheduleMeeting("17:30", 30); // false
scheduleMeeting("18:00", 15); // false
