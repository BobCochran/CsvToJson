/* Code to reformat a file line by line into a json
 * string. A lot of this code was copied from Paige
 * Niedringhaus' post appearing in 
 * https://itnext.io/using-node-js-to-read-really-really-large-files-pt-1-d2057fe76b33
 * */
var fs = require('fs')

var readline = require('readline')

var stream = require('stream')

var instream = fs.createReadStream('csvdata2.csv')

var outstream = new stream()

var rl = readline.createInterface(instream, outstream)

var myFlds = [];

var jstring = "";

var numberEmps = 0;

var n1Str = "NumberInt(\""  //This is a mongoDB data type 

var sdet = " \"salaryDetails\" \: \[ "   // Begin the salary details line

var sAmt = "NumberDecimal(\""       // This is another mongoDB data type

var nm1 = "\{ \"name\" \: "            // key for employee name

var sal1 = "\"salary\" \: "         // key for employee salary

//Count number of lines read in
var lineCount = 0;

rl.on('line', function(line) {

	//increment line counter
	lineCount++

	//split the line on commas

	var flds = line.split(',')
	
	var st1 = flds[0]            //department number

	var st2 = flds[1]            //Number of employees in the department

	numberEmps = parseInt(st2);  //Number of employees converted to integer.

	jstring = "{ \"deptno\" : " + "\"" + st1 + "\"" + "\, \"numbEmployees\" : " + n1Str + st2 + "\"" + "\)\," + sdet

	if (numberEmps > 0) {

		for (i = 0; i < numberEmps; i++) {

			var j = i + 2

			jstring = jstring + nm1 + "\"" + flds[j] + "\"\," + " " + sal1

		}  
	}  

	console.log(jstring)

	myFlds.push(flds)
} )

rl.on('close', function() {

	console.log("The line count is " + lineCount)
	console.log("Example of what is in myFlds " + myFlds[1])

})

//console.log(data.toString('utf8'))

