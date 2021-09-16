!(function() {


    setTimeout(() => {
        $("#loading_overlay").css("visibility", "hidden")
    }, 1)

    setInterval(update_time, 1000);

    setTimeout(() => {
        $('#start_time').html(moment(Date.now()).format("HH:mm a"));
    }, 500)
})();

function update_time() {
    $('#time').html(moment().format('HH:mm:ss a'));
}