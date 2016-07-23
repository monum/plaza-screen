function showCurrentWeek(data){
for (var i = data.length - 1; i >= 0; i--) {
	if (data[i].startdate.length > 1){
		if (inCurrentWeek(data[i].startdate) == 1) { 
			data.splice(i, 1); }
			else  { continue; }
	}
	else
	{data.splice(i,1);}
}
 }
  
function inCurrentWeek(event) {
var returnVal; 
var curr = new Date; // get current date
var firstDay = (curr.getDate() - curr.getDay()); 
var firstDate = new Date(curr.setDate(firstDay));

var lastDate = new Date(curr.setDate(firstDate.getDate()+6));
var eventdate = new Date(event);
if (eventdate >= firstDate && eventdate <= lastDate) {
   //current week
   returnVal = 0;}
   else
   {
	returnVal = 1;} 
return returnVal;
  }