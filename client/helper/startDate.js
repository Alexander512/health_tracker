function startDate() {  
  let date = new Date();
  date.setDate(date.getDate() - 30);

  let startYear  = date.getUTCFullYear();
  let startMonth = date.getUTCMonth() + 1;
  let startDay   = date.getUTCDate();

  startYear  = startYear.toString();
  startMonth = startMonth.toString();
  startDay   = startDay.toString();

  if (startMonth.length === 1) {
    startMonth = '0' + startMonth;
  }
  if (startDay.length === 1) {
    startDay = '0' + startDay;
  }

  const startDate = startYear + '-' + startMonth + '-' + startDay;
  return startDate;
}

export default startDate;
