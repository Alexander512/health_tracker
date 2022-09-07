function startDate() {  
  let date = new Date();
  date.setDate(date.getDate() - 30);

  const startYear  = date.getUTCFullYear();
  const startMonth = date.getUTCMonth() + 1;
  const startDay   = date.getUTCDate();

  const startDate = startYear + '-' + startMonth + '-' + startDay;
  return startDate;
}

export default startDate;
