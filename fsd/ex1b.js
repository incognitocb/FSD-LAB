//1. b) Code a Node.Js application using different timer functions.
//Source Code:
// Node.Js application using different timer function from Timers mobule.
var i=0;
console.log('variable i is initiated with:',i);
console.log('value of i before setTimeout activated is:',i);
setTimeout(function()
{
	console.log('value of i after setTimeout acivated is',i);
},5100);
var clrinterval=setInterval(function()
{
	i=i+1;
	console.log('value of i after 1second Interval:',i);
	if(i==5)
	{
		clearInterval(clrinterval);
		setImmediate(function(){
			i=i+1;
		});
	}
},1000);
