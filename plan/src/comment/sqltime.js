function padDate (value){
	return value <10? "0"+value:value;
}
function formatDate (value,item){
	let date=new Date(value);
	let year=date.getFullYear();
	let month=padDate(date.getMonth()+1);
	let day=date.getDate();
	return year+"-"+month+"-"+day
}
export default formatDate;