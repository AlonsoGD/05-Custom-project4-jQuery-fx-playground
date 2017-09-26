$(document).ready(function() {
    var $effectSelector = $("#effectSelector");
    var $dummy = $(".dummy");
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
        $liText = $(this).text();
        $effectSelector.children().first().text($liText);
        //
        
    });

    $applyBtn.click(function() {
        switch ($liText) {
            case "Resizable": 
                resizableFx();
                break;
            case "Draggable":
                draggableFx();
                break;
        };
    });
});