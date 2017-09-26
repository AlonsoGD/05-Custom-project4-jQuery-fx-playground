$(document).ready(function() {
    var $effectSelector = $("#effectSelector"); //dropdown button
    var $dummy = $(".dummy"); //the blue square that is going to be used to show the animations.
    var $applyBtn = $("#applyBtn");
    var $resetBtn = $("#resetBtn");
    var $liText = "";

    function draggableFx() {
        $dummy.draggable({
            containment: ".playground",
        });
    };

    function resizableFx() {
        $dummy.resizable({
            containment: ".playground",
        });
    };   
    
    function bounceFx() {
        $dummy.toggle( "bounce", { times: 3 }, "slow" );
    };

    function clipFx() {
        $dummy.toggle( "clip" );
    };

    function reseting() {
        var $dummyClass = $dummy.attr("class");

        if ($dummyClass !== "dummy") {
            $dummy.parent().html('<div class="dummy"></div>');
        };
        $dummy = $(".dummy");
    };

    function effectFx() {
        
    };

    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    $resetBtn.click(function() {
        reseting();        
    });

    $("li").click(function() {
        // This code changes the content of the Dropdown selector button according to the choice made in the menu.
        // Also sets the variable $liText that will allow the apply button to apply the selected effect.
        $liText = $(this).text();
        $effectSelector.children().first().text($liText);
    });

    $applyBtn.click(function() {
        switch ($liText) {
            case "Resizable": 
                resizableFx();
                break;
            case "Draggable":
                draggableFx();
                break;
            case "Bounce":
                bounceFx();
                break;
            case "Clip":
                clipFx();
                break;
            case "Bounce":
                bounceFx();
                break;
            case "Bounce":
                bounceFx();
                break;               
        };
    });
});