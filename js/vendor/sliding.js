$(document).ready(function () {

    $(".pol").itemslide({

    }); //initialize itemslide

    $(window).resize(function () {
        $(".pol").reload();

    }); //Recalculate width and center positions and sizes when window is resized
});
