# CsvToJson

#### Purpose

This project uses the Node.js 'readline' API in order to reformat a comma separated values file with a line structured like this:

`10,3,john,100,marie,150,katie,120`

into a file of json strings which are suitable for importing to a MongoDB database collection. This repository is created specifically to assist a user asking how to programmatically reformat comma separated values lines into json for his/her specific criteria.

In the above example line of comma separated values strings:

1. The '10' is a string 'department number' field.
2. The 3 represents the number of employees in department 10. It needs to be converted to an integer.
3. A list representing the names of the 3 employees and their salaries starts here. 'john' is the first employee and his salary is 100. 'marie' is the second employee and her salary is 150. 'katie' is the third employee and her salary is 120. The requirement is to convert this list of employee names and corresponding salaries into a json array suitable for importing into MongoDB.

#### Solution

All examples given below assume you are using the Linux command line.

The readline API in Node.js is easy to use, and does not require importing external code to reformat the input file into suitable json output. Example usage:

`node reformatfile.js`

Will cause the input file csvdata2.csv to be reformatted to json and the output echoed to the console. 

`The input file to reformat is hardcoded inside the reformatfile.js script. You can edit the filename to reformat as needed.`

You can redirect the json output to a file:

`node reformatfile.js > json_data.json` 

You may need to edit the json_data.json to remove non-json lines at the bottom of the file.

The json file can then be imported into a MongoDB collection using the mongoimport utility:

`mongoimport --db test --collection t1 --file cleaned_up_test2.json`

#### Required Software

+Node.js version 10.16.3 or higher.
+MongoDB server, Community or Enterprise editions, version 4.x. 
+mongoimport version r4.0.12 or higher.

Note that in this use case, json data will not import successfully into MongoDB server version 2.x. This is because the "salary" field above is reformatted as a Decimal128 data type, and early versions of MongoDB server do not support Decimal128. 

#### Acknowledgements

The author would like to thank Paige Niedringhaus for [a great article](https://itnext.io/using-node-js-to-read-really-really-large-files-pt-1-d2057fe76b33) which helped me get a quick sense of how to code readline. She also has [a GitHub repository](https://github.com/paigen11/file-read-challenge) and I copied some of her code into the executable reformatfile.js script.
 
