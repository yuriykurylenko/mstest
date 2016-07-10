Solution description
====================
Two problems have been solved - MakeChange and TinyHeap. Source code for each of them is located in the corresponding folder,
which has the following structure:

        ├── {{ProblemName}}
        │   ├── {{ProblemName}}.js
        │   ├── {{ProblemName}}.tests.js
        │   ├── {{ProblemName}}.tests.html

For the ease of being run in the browser, the solutions are in JavaScript and use QUnit, as a simple unit testing framework.
In order to run the tests, you have to download the source code, and simply open the file {{ProblemName}}/{{ProblemName}}.tests.html in your browser.


MakeChange
----------
Source code can be found in *MakeChange.js*.

The entry point here is function *MakeChange()*, which takes the amount and array of available denominations as parameters, and returns the minimal number of bills, that can be used for handing cash. 
In case if it is impossible to hand cash with existing denominations (f.ex., *134* can't be handed, using denominations *100, 50, 20, and 5*), the function returns *false*. In case if function gets the wrong input, the corrsponding exception is thrown.
All the test cases with possible wrong input can be found in *MakeChange.tests.js*.

TinyHeap
--------
Source code can be found in *TinyHeap.js*.

The class TinyHeap is implemented as a constructor function, and emulates a heap using the array of 0s and 1s (each array element represents a byte in memory, 0 in case if it is free, 1 if already allocated).
Instance of the class is initialized with the parameter *N*, which represents the length of the heap. As part of the solution, *allocateTinyHeap(), deleteTinyHeap(), tinyAlloc(), and tinyFree()* methods were imptemented.
All the test cases can be found in *TinyHeap.tests.js*.

Solutions tested in Google Chrome v. 51.0.2704.103 and Mozzila Firefox v. 45.0.1 on OSX El Capitan.
