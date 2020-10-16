function padDate (value){
			return value <10? "0"+value:value;
		}
function formatDate (value,item){
	let date=new Date(value);
	let year=date.getFullYear();
	let month=padDate(date.getMonth()+1);
	let day=padDate(date.getDate());
	let hours=padDate(date.getHours());
	let minutes=padDate(date.getMinutes());
	let seconds=padDate(date.getSeconds());
	if(item==="yyyy-MM-dd hh:mm:ss"){
		return year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds
	}else if(item==="yyyy-MM"){
		return year+"-"+month
	}else{
		return year+"-"+month+"-"+day
	}
}
export default formatDate;