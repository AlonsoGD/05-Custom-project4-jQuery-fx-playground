$(document).ready(function() {
    var $effectSelector = $("#effectSelector"); //dropdown button
    var $dummy = $(".dummy"); //the blue square that is going to be used to show the animations.
    var $applyBtn = $("#applyBtn");
    var $resetBtn = $("#resetBtn");
    var $liText = "";
    var $resizableSwitch = $("#resizableSwitch");
    var $drageableSwitch = $("#drageableSwitch");
    //This is the array where I store all the effects that are going to be usable. Later I explain why I did it in this way.
    var effectsArr = [
        function draggableFx() {
            $dummy.draggable({
                containment: ".playground",
                disabled: false,
            });
        },

        function resizableFx() {
            $dummy.resizable({
                containment: ".playground",
                disabled: false,
            });
        },   
               
        function bounceFx() {
            $dummy.toggle( "bounce", { times: 3 }, "slow" );
        },
        
        function clipFx() {
            $dummy.toggle( "clip" );
        },

        function pulsateFx() {
            $dummy.toggle( "pulsate" );
        },

        function scaleFx() {
            $dummy.toggle( "scale" );
        },

        function shakeFx() {
            $dummy.effect( "shake" );
        },

        function foldFx() {
            $dummy.toggle( "fold" );
        },

        function explodeFx() {
            $dummy.toggle( "explode" );
        },

        function fadeFx() {
            $dummy.toggle( "fade" );
        },

        function puffFx() {
            $dummy.toggle( "puff" );
        },

        function slideFx() {
            $dummy.slideToggle( "slow" );
        },
    ];

    function reseting() {
        var $dummyClass = $dummy.attr("class");
        var $dummyStyle = $dummy.css("display");
        if ($dummyClass !== "dummy" || $dummyStyle === "none") { //This "or" opperator let reset button work if a effect has set the display css property hidden the div from the screen
            $dummy.parent().html('<div class="dummy"></div>'); //it removes the current "dummy" div and creates a new one with the css class dummy. So it effectively reset its position and style
        };
        $dummy = $(".dummy"); //refresh the $dummy variable to the new div created by the function
        $drageableSwitch.prop("checked", false); //set the swich buttons to off
        $resizableSwitch.prop("checked", false); //set the swich buttons to off
    };
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $resetBtn.click(function() {
        reseting();        
    });
    
    //This code is for the 2 switch buttons functionality
    $resizableSwitch.click(function() {
        if ($resizableSwitch.prop("checked") === false) {
            $dummy.resizable({
                disabled: true,
            });
        } else {
            effectsArr[1]();
        }
    });

    $drageableSwitch.click(function() {
        if ($drageableSwitch.prop("checked") === false) {
            $dummy.draggable({
                disabled: true,
            });
        } else {
            effectsArr[0]();
        }
    });

    // This code changes the content of the Dropdown selector button according to the choice made in the menu.
    // Also sets the variable $liText that will allow the apply button to apply the selected effect.
    $("li").click(function() {
        $liText = $(this).text();
        $effectSelector.children().first().text($liText);
        $liText = $liText.toLowerCase() + "Fx";
    });

    //My first implementation was a switch function (see the code commented below) but once I realize how tedious was to add new effects to the list, I decided to add all effects into an Array 
    //and thenmake the apply button loop trough the array to find if there is a function with the same name as the $liText variable. This way, no matter how may effects you add to the array,
    //if you maintain the same "naming rule" for the fuction (same text than the li menu item  + Fx) the apply button will always work. So to add a new effect, you just have to write the fuction
    //into the array and add the <li> item in the dropdown menu following the naming rule for the function.
    $applyBtn.click(function() {     
        for (var i = 0; i < effectsArr.length; i++) {
            if (effectsArr[i].name === $liText) {
                effectsArr[i]();
                break;
            };
        }       
    });
});

    // $applyBtn.click(function() {
    //     switch ($liText) {
    //         case "Resizable": 
    //             resizableFx();
    //             break;
    //         case "Draggable":
    //             draggableFx();
    //             break;
    //         case "Bounce":
    //             bounceFx();
    //             break;
    //         case "Clip":
    //             clipFx();
    //             break;         
    //     };
    // });