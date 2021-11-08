function timestamp(time=null){
	let timestamp=null;
	if (time == null) {
		timestamp = Number(new Date())
	}else{
		time = time.substring(0,19);
		time = time.replace(/-/g,'/'); //必须把日期'-'转为'/'
		timestamp = new Date(time).getTime();
	}
	
	return timestamp
}

export default timestamp