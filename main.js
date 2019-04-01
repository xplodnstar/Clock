$(document).ready(function () {

    setInterval(function () {
        var curTime = moment()
        var curHrs = curTime.format('hh')
        var curMins = curTime.format('mm')
        var curSecs = curTime.format('ss')

        var time = curHrs + ":" + curMins + ":" + curSecs

        $(".clock").html(time);

        // $('.clock').html(curTime.format('hh:mm:ss')) Mike being funny

    }, 1000)

});

