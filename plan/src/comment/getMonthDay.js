function getMonthDay(rem) {
  let year=rem.substr(0,4);
  let month=rem.substr(5, 6);
  let days = new Date(year, month, 0).getDate()
  let sert=[];
  for(let i=1;i<=days;i++){
  	sert.push(i)
  }
  return sert
}
export default getMonthDay