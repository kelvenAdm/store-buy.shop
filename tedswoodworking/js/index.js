$( document ).ready(function() {
    exit1 = Bounceback.init({
        aggressive: true,
        storeName: "bounceback-visited-original",
        onBounce: function() {
            $('#ex1').modal('show');
        }
    });

    $("#continueWatching").on('click', function() {
        console.log("Continue watching");
        $('.close-modal ').click();
    });
});