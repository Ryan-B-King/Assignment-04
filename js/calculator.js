window.addEventListener("load", init);

function init() {
    let $ = function (id) {
                "use strict";
                return window.document.getElementById(id);
            };
    let buttons = $("buttons");
    let result = $("result");
    let equal = $("equal");
        // handles all of the event listeners for every button
// let $;  // anon helper function that get element from DOM 

// buttons.addEventListener("click", function enter(val) {
    //click actions go here for all 16 buttons

    // function enter(val) { // to be called for each bttn by the equal sign
        //function called for all but ENTER value  --  $("one").value
        //get result text box by ID and set its value plue equal to the val para passed in
        // should be live streaming the ongoing values -- concatonate string
    // }

    buttons.addEventListener("click", enter);
    function enter(e) {
        window.console.log(e.target.value);
        result.value = e.target.value;

        do {

        }
        while (result.value !== equal);

        window.console.log("Loop Ended");
    };
// });

};

// ouside of INIT()
// function calculate(){ // activates with hitting the "=" bttn

    // eval() can be used to calculate when passing arg is string

// }

