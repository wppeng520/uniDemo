function timeformatting(time = null) {
	let timenow = null;
	if (time == null) {
		timenow = new Date()
	} else {
		time = time.substring(0, 19);
		time = time.replace(/-/g, '/'); //必须把日期'-'转为'/'
		timenow = new Date(time);
	}

	let year=timenow.getFullYear();
	let month = timenow.getMonth()+1;
	let day = timenow.getDate();
	let hour = timenow.getHours();
	let minute = timenow.getMinutes();
	let seconds = timenow.getSeconds();

	return {
		year,
		month,
		day,
		hour,
		minute,
		seconds,
		timeArrayShow:[`${year}`,`${month}`.padStart(2, "0"),`${day}`.padStart(2, "0"),`${hour}`.padStart(2, "0"),`${minute}`.padStart(2, "0"),`${seconds}`.padStart(2, "0")]
	}
}

export default timeformatting
