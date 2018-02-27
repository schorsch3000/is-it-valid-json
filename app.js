$(document).ready(function () {
    var checkIt = function () {
        if($('#json').val().length === 0){
            $('#answer').removeClass("yes").removeClass("no").html("");
            return;
        }
        try {
            JSON.parse($('#json').val())
            $('#answer').addClass("yes").removeClass("no").html("YES");
        } catch (e) {
            $('#answer').addClass("no").removeClass("yes").html("NO");
        }
        console.log("check")
    }
    $('#json').val(window.location.hash.substring(1));
    checkIt();

    $('#json').on('change keyup keypress paste', function(){
        window.location.hash=$('#json').val();
        checkIt()
    })


})