
var	daysOfWeek	=	new	Array("Mon","Tues","Wed","Thur", "Fri");	
daysOfWeek.push("Sat");
daysOfWeek.unshift("Sun");

document.write("<table	border=1>"); 
document.write("<tr>");	

for	(var i = 0;	i < daysOfWeek.length; i++){	
    if (daysOfWeek[i].length < 4)	
day	= daysOfWeek[i];	
else	
day	= "<em>" + daysOfWeek[i] + "</em>";	   
    document.write("<th>" +	day	+ "</th>");	
}
document.write("</tr>");
document.write("<tr>");

for (i = 1; i <=30; i++) {
    document.write("<td>" +	i +"</td>");
if (i % 7 == 0 && i != 30) {
    document.write("</tr>");	
    document.write("</tr>");	
  }
}
document.write("</tr>");
document.write("</table");

//document.write(daysOfWeek+"<br>");
