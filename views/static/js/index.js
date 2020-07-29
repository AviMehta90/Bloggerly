function menuOpen(){
    $('#menuBtn').toggleClass("change");
    if($('#navig').hasClass('navbar')){
        $('#navig').toggleClass('show');
        if($('header').innerHeight(50) || !($('#navig').hasClass('show'))){
                $('header').innerHeight('fit-content');
        }else{
            $('header').innerHeight('fit-content');
        }
    }
}

jQuery(document).ready(function() {
    var alterClass = function() {
        var w = window.innerWidth;
        if (w > 700) {
            $('#navig').removeClass('show');
            $('#menuBtn').removeClass('change');
        }
    }
    $(window).resize(function(){
        alterClass();
    });
    alterClass();
});