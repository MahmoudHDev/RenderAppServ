$('h1').fadeOut(500, () => {
    $('h1').fadeIn();
});

$("h1").hover(
    function () {
        $('h1').fadeOut(500);
    }, function () {
        $('h1').fadeIn(500);
    }
);