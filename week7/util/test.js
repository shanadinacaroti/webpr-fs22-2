"use strict";

// find a solution for suite, test, assert


const Assert = () => {
    const ok = [];
    const equals = (actual, expected) => {
        const result = (actual === expected);
        ok.push(result);
        if ( false === result ) { // yoda conditional
            console.error("failed: got", actual, "expected", expected);
        }
    }
    return { equals }
}

/**
 * make a local scope in which to execute and report assertions
 */
const test = (origin, callback) => {
     const ok = [];
    const assert = Assert();// array of bools (die assert-solutions)
    callback(assert);       // push the assertions
    report(origin, ok); // report the result
}




// test result report
// report :: String, [Bool] -> DOM ()
function report(origin, ok) {
    const extend = 20;
    if ( ok.every( elem => elem) ) {
        document.writeln(" "+ padLeft(ok.length, 3) +" tests in " + padRight(origin, extend) + " ok.");
        return;
    }
    let reportLine = "    Failing tests in " + padRight(origin, extend);
    bar(reportLine.length);
    document.writeln("|" + reportLine+ "|");
    for (let i = 0; i < ok.length; i++) {
        if( ! ok[i]) {
            document.writeln("|    Test #"+ padLeft(i, 3) +" failed                     |");
        }
    }
    bar(reportLine.length);
}

function bar(extend) {
    document.writeln("+" + "-".repeat(extend) + "+");
}

// padRight :: String, Int -> String
function padRight(str, extend) {
    return "" + str + fill(str, extend);
}

function padLeft(str, extend) {
    return "" + fill(str, extend) + str;
}

function fill(str, extend) {
    const len = str.toString().length; // in case str is not a string
    if (len > extend) {
        return str;
    }
    return " ".repeat(extend - len);
}