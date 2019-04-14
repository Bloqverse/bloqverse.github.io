var bloqverse_web = {
    init: function()
    {
        bloqverse_web.realign();
        bloqverse_web.music();
    },
    music: function()
    {
        var sound = new Howl({
            src: ['bg.mp3', 'bg.wma', 'music.wav'],
            autoplay: true,
            loop: true,
            volume: 0.5,
        });
        sound.play();
    },
    realign: function()
    {
        $('#credits').height('auto');
        var h = $('#meta').height();
        var w = window.innerHeight / 2;
        var d = (h - w) + 145;
        var g = $('#grid').height();
        var c = $('#credits').height();
        $('#container').height(h + 150);
        $('#head').height(g + d);
        $('#grid').css({'top': d + 'px'});
        $('#credits').css({'height': ((c * 2) + 160) + 'px'});
    }
};

$(document).ready(function(e)
{
    bloqverse_web.init();
    $(window).resize(function(e)
    {
        bloqverse_web.realign();
    });
});