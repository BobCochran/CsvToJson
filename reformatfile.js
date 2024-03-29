/* Code to reformat a file line by line into a json
 * string. A lot of this code was copied from Paige
 * Niedringhaus' post appearing in 
 * https://itnext.io/using-node-js-to-read-really-really-large-files-pt-1-d2057fe76b33
 * */
var fs = require('fs')

var readline = require('readline')

var stream = require('stream')

/* Change the filename for instream if you wish to 
process a different file. */
var instream = fs.createReadStream('csvdata2.csv')

var outstream = new stream()

var rl = readline.createInterface(instream, outstream)

var myFlds = [];

var jstring = "";

var numberEmps = 0;

var n1Str = "NumberInt(\""                   //This is a mongoDB data type 

var sdet = " \"salaryDetails\" \: \[ "       // Begin the salary details line

var sAmt = "\{\"\$numberDecimal\" \: \""      // This is another mongoDB data type

var nm1 = "\{ \"name\" \: "            // key for employee name

var sal1 = "\"salary\" \: "         // key for employee salary

var nEndArr = " \] \}"               //terminate employee salary array

//Count number of lines read in
var lineCount = 0;

rl.on('line', function(line) {

	//increment line counter
	lineCount++
	
	//Don't process empty lines

	if (line.length > 6) {
		
		//split the line on commas

		var flds = line.split(',')
	
		var st1 = flds[0]            //department number

		var st2 = flds[1]           //Number of employees in the department

		var j = 2                   //point to name of first employee

		var k = 3                   //point to salary of first employee

		numberEmps = parseInt(st2);  //Number of employees converted to integer.

		jstring = "{ \"deptno\" : " + "\"" + st1 + "\"" + "\, \"numbEmployees\" : " + n1Str + st2 + "\"" + "\)\," + sdet

		if (numberEmps > 0) {

			for (i = 0; i < numberEmps; i++) {

				jstring = jstring + nm1 + "\"" + flds[j] + "\"\," + " " + sal1 + sAmt + flds[k] + "\.00\"\} \}"

				j = j + 2

				k = k + 2

				var m = i + 1;

				if (m < numberEmps) {

					jstring = jstring + "\, "

				}

				if (m === numberEmps) {

					jstring = jstring + nEndArr

				} 

		}  
	}  

	console.log(jstring)

} } )

rl.on('close', function() {

	console.log("The line count is " + lineCount)

})

