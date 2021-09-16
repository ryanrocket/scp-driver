!(function() {


    setTimeout(() => {
        $("#loading_overlay").css("visibility", "hidden")
    }, 0)

    setInterval(update_time, 1000);

    setTimeout(() => {
        $('#start_time').html(moment(Date.now()).format("HH:mm a"));
    }, 500)
})();

function update_time() {
    $('#time').html(moment().format('HH:mm:ss a'));
}

window.master = {
    status: (target, type, inner) => {
        $("#"+target).attr("status", type)
        $("#"+target).html(inner)
    },
    svgUpdate: (arr, color) => {
        var colors = {
            green: "#ff25ff",
            grey: "#666666",
            red: "#0dbed9"
        };
        var arrows = {
            stb: "arr2",
            mtb: "arr4",
            btm: "arr3",
            stm: "arr1"
        };
        var targetArrow = arrows[arr];
        var targetColor = colors[color];
        $("#"+targetArrow+"-1").attr("stroke", targetColor)
        $("#"+targetArrow+"-2").attr("stroke", targetColor)
        $("#"+targetArrow+"-2").attr("fill", targetColor)
    }
}