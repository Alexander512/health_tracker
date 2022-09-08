function endDate() {  
  let date = new Date();

  let endYear  = date.getUTCFullYear();
  let endMonth = date.getUTCMonth() + 1;
  let endDay   = date.getUTCDate();

  endYear  = endYear.toString();
  endMonth = endMonth.toString();
  endDay   = endDay.toString();

  if (endMonth.length === 1) {
    endMonth = '0' + endMonth;
  }
  if (endDay.length === 1) {
    endDay = '0' + endDay;
  }

  const endDate = endYear + '-' + endMonth + '-' + endDay;
  return endDate;
}

export default endDate;
