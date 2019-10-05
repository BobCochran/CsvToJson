# CsvToJson

#### Purpose

This project uses the Node.js 'readline' API in order to reformat a comma separated values file with a line structured like this:

`10,3,john,100,marie,150,katie,120`

into a file of json strings which are suitable for importing to a MongoDB database collection. This repository is created specifically to assist a user asking how to programmatically reformat comma separated values lines into json for his/her specific criteria.

In the above example line of comma separated values strings:

1. The '10' is a string 'department number' field.
2. The 3 represents the number of employees in department 10. It needs to be converted to an integer.
3. A list representing the names of the 3 employees and their salaries starts here. 'john' is the first employee and his salary is 100. 'marie' is the second employee and her salary is 150. 'katie' is the third employee and her salary is 120. The requirement is to convert this list of employee names and corresponding salaries into a json array suitable for importing into MongoDB.

