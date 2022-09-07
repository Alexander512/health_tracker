function endDate() {  
  let date = new Date();

  const endYear  = date.getUTCFullYear();
  const endMonth = date.getUTCMonth() + 1;
  const endDay   = date.getUTCDate();

  const endDate = endYear + '-' + endMonth + '-' + endDay;

  return endDate;
}

export default endDate;
