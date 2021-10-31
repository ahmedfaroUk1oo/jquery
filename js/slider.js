var $links = $(".itemLinks");


$links.click(function(e){
    $links.removeClass("active");
    var clickedLink = e.target; //element that active
    clickedLink = $(clickedLink);
    var position = clickedLink.attr("data-pos"); // 0 or 1 or 2 or 3
    var translateValue = "translateX("+ position * 25 + "%)";
    $("#wrapper").css({
        transform :translateValue
    });

    clickedLink.addClass("active");
});

$($links[0]).addClass("active"); // لما الصفحه تحمل لاول مرا اول عنصر يكون اللي ظاهر