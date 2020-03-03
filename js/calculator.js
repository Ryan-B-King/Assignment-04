window.addEventListener("load", init, false);

function init() {
    let $ = function (id) {
                "use strict";
                return window.document.getElementById(id);
            };
    // let $$ = function (class) {
    //             "use strict"
    //             return document.getElementsByClassName(class);
    //         };

    let buttons = $("buttons");
    let result = $("result");

    buttons.addEventListener("click", function enter(e) {
        "use strict";
        window.console.log(e.target.value);

            if (e.target.value !== "=" && e.target.value !== "C") {

            result.value += e.target.value;

            } else if (e.target.value === "C") {
                result.value = ""
            } else if (e.target.value === "=") {
                calculate();
            }
    });
};

function calculate(){
"use strict";
result.value = eval(result.value);
};






    // function enter(val) { // to be called for each bttn by the equal sign
        //function called for all but ENTER value  --  $("one").value
        //get result text box by ID and set its value plue equal to the val para passed in
        // should be live streaming the ongoing values -- concatonate string
    // }

        // result.value.appendNumber(e.target.value);

        // debugger;
        // result = string.concat(result += result.value)


    //     while (result.value !== "=") { //equal triggers calc()
    //         // result += result.value;
    //         ;
    // }


        // result = string.concat(result + result.value);
        // result.value = result;
        // result = string.concat(result + result.value);
        // do {
        // }
        // while ();
        // window.console.log("Loop Ended");