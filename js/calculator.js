window.addEventListener("load", init, false);

// FUNCTION TO HANDLE ALL EVENT LISTENERS FOR EVERY BUTTON IN CALCULATOR
function init() {

    // LOCAL VARIABLES
    let $ = function (id) {
                "use strict";
                return window.document.getElementById(id);
            };
    let buttons = $("buttons");
    let equal = $("equal");
    let clear = $("clear");
    let result = $("result");

    $("result").value = "0";

    // EVENT LISTENER TO CAPTURE BUTTON ENTRY 
    buttons.addEventListener("click", function enter(val) {
        "use strict";
        // IF STATEMENT UPDATING DISPLAY WITH INPUT
        // KEEPS "0" VALUE SHOWING IF INPUT IS "0" -- PREVENTS STRING TO HAVE MULTIPLE "00000" IN FROM OF OTHER DIGITS
        if (val.target.value === "0" &&
            val.target.value === "/" &&
            val.target.value === "*" &&
            val.target.value === "-" &&
            val.target.value === "+" && 
            $("result").value === "0"){

                $("result").value = "0";

        // IF FIRST KEY IS !== 0 THEN ARG WILL PASS AND COMPUTE
        } else if (val.target.value !== "=" && 
                   val.target.value !== "C" && 
                   val.target.value !== undefined) {
                    
            // THIS WILL OVERRIDE THE INITIAL "0" PLACEHOLDER
            if ($("result").value === "0") {
                $("result").value = val.target.value;
            } else if (val.target.value === "/" ||
                        val.target.value === "*" ||
                        val.target.value === "-" ||
                        val.target.value === "+") {
                if ($("result").value.includes("/") ||
                    $("result").value.includes("*") ||
                    $("result").value.includes("-") ||
                    $("result").value.includes("+")) {
                        $("result").value;
                } else {
                    $("result").value += val.target.value
                };
            } else {
                $("result").value += val.target.value;
            };
        } else {
            return;
        };
    });

    // EVENT LISTENER FOR "=" -- WILL CALCULATE ARITHMETIC
    equal.addEventListener("click", function calculate() {
        "use strict";
        // ARG WILL ONLY PASS IF CURRENT VALUE IS NOT BLANK
        if ($("result").value !== ""){
        $("result").value = eval($("result").value);
        };
    });

    // EVENT LISTENER FOR "C" -- WILL CLEAR THE "RESULT SCREEN"
    clear.addEventListener("click", () => {
        "use strict";
        $("result").value = "0";
    });

};
