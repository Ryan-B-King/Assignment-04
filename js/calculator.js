window.addEventListener("load", init, false);

function init() {
    let $ = function (id) {
                "use strict";
                return window.document.getElementById(id);
            };
    let buttons = $("buttons");
    let result = $("result");
    let equal = $("equal");

    // function enter(val) { // to be called for each bttn by the equal sign
        //function called for all but ENTER value  --  $("one").value
        //get result text box by ID and set its value plue equal to the val para passed in
        // should be live streaming the ongoing values -- concatonate string
    // }
    buttons.addEventListener("click", enter);
    function enter(e) {
        "use strict";
        window.console.log(e.target.value);
        result.value = e.target.value;
        // debugger;
        // result = string.concat(result += result.value)


    //     while (result.value !== "=") { //equal triggers calc()
    //         // result += result.value;
    //         ;
    // }
        calculate(result);

        // result = string.concat(result + result.value);
        // result.value = result;
        // result = string.concat(result + result.value);
        // do {
        // }
        // while ();
        // window.console.log("Loop Ended");


    };
// });


};

function calculate(result){ // activates with hitting the "=" bttn
"use strict";
result = String(result);
result = eval(result);
console.log(typeof result, "result: " + result);
// can be used to calculate when passing arg is string

};

