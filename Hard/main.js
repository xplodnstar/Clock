$(document).ready(function () {
    var r = 0
    var g = 0
    var b = 0
    var interval = 50
    var increment = 10

    setInterval(function () {
        var red = pad(r.toString(16))
        var green = pad(g.toString(16))
        var blue = pad(b.toString(16))

        var hue = `#${red}${green}${blue}`
        $(".color").html(hue);
        $(document.body).css("background-color", hue)

        b += increment

        if (b >= 256) {
            b = 0
            g += increment
        }

        if (g >= 256) {
            g = 0
            r += increment
        }

        if (r >= 256) {
            r = g = b = 0
        }
    }, interval)


    function pad(str) {
        return str.length === 1 ? "0" + str : str
    }

});

// Basically Mike's code, but I helped a little.


