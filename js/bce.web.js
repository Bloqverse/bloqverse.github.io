var bce_web = {
    init: function()
    {
        bce_web.realign();
    },
    realign: function()
    {
        var h = $('#meta').height();
        var w = window.innerHeight / 2;
        var d = (h - w) + 145;
        var s = document.getElementById('grid').getBoundingClientRect();
        var g = $('#grid').height();
        console.log('s', s);
        console.log('g', g);
        $('#container').height(h + 150);
        $('#head').height(g + d);
        $('#grid').css({'top': d + 'px'});

        console.log('h', h);
        console.log('w', window.innerHeight);
    }
};

$(document).ready(function(e)
{
    bce_web.init();
    $(window).resize(function(e)
    {
        bce_web.realign();
    });
});