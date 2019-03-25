$(document).ready(function(){
    $('.store_nobtn').click(function(){
        $(this).parent().find(".store_mb").css('display', 'block');
    })
    $('.store_mb').click(function(){
        $(".store_mb").css('display','none');
    })
    $('.nolike').click(function (event) {
        event.stopPropagation();
        var len = $(".store").length -1;
        $(this).parent().parent().insertAfter($('.store')[len]);
        $(this).parent().css('display','none');
    })
})

$(document).ready(function () {
    var box = $('.dmbox');
    var top;
    var boxW = parseInt(box.width()) / 100;
    var boxH = parseInt(box.height()) / 100;
    var text = [
        "123", "123", "123", "123", "123",
        "123", "123", "123", "123", "123",
        "123", "123", "123", "123", "123",
        "123", "123", "123", "123", "123"
    ]
    setInterval(() => {
        $.each(text, function (i, str) {
            setTimeout(() => {
                auto(str);
            }, (Math.random() * 10000));
        })
    }, (Math.random() * 1000));

    function auto(str) {
        var newSpan = $("<span></span>");
        newSpan.text(str);
        top = Math.random() * boxH;
        newSpan.css({
            'top': top + 'rem',
            'right': -1 + 'rem',
            'color': randomcolor()
        })
        box.append(newSpan);
        var spandom = $(".dmbox>span:last-child");
        spandom.animate({
            'right': '110%',
        }, (Math.random() * 3000 + 1000), function () {
            $(this).remove();
        })
    }
    function randomcolor() {
        var colorarr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        color = '';
        for (var i = 0; i < 6; i++) {
            color += colorarr[Math.floor(Math.random() * 14)];
        }
        return '#' + color;
    }
})