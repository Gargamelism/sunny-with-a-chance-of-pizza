
function getNextTimeDate(time: string) : Date {
  let [hours, minutes] = time.split(':');
  const hoursNum = parseInt(hours);
  const minutesNum = parseInt(minutes);

  const now = new Date();

  const nextTime = new Date();
  nextTime.setHours(hoursNum);
  nextTime.setMinutes(minutesNum);

  // the time has passed
  if(now.getHours() >= hoursNum && now.getMinutes() > minutesNum) {
    nextTime.setDate(now.getDate() + 1);
  }

  return nextTime;
}

function getMinutesToNextTime(time : string) : number {
  const now = new Date();
  const nextTimeDate = getNextTimeDate(time);

  const timeDiffMillisec = nextTimeDate.getTime() - now.getTime();
  const timeDiffMin = Math.round(timeDiffMillisec / (60 * 1000));

  return timeDiffMin;
}

export { getMinutesToNextTime }