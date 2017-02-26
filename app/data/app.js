


    // Chosen jQuery Plugin CSS
var config = {
        // '.chosen-select'           : {},
        '.chosen-select-deselect'  : {allow_single_deselect:true},
        '.chosen-select' : {disable_search_threshold:10},
        '.chosen-select-width'     : {width:"95%"}
    };
for (var selector in config) {
    $(selector).chosen(config[selector]);
}

// Capture the form inputs
$("#submit").on("click", function(){

    // Form validation
    function validateForm() {

        // Form good to go if true
        var isValid = true;
        $('.form-control').each(function() {

            // False if input on form empty (to keep bad data out of system)
            if ( $(this).val() === '' )
                isValid = false;
        });

        $('.chosen-select').each(function() {

            // False if question on form blank (to keep bad data out of system)
            if( $(this).val() === "")
                isValid = false
        })
        return isValid;
    }

    // If all required fields are filled the form is considered valid | can start process
    if (validateForm() == true)
    {
        // Create an object for the user's data so data is in same format this way it can be compared to data stored on server
        var userData = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val(), ]
        }


        // Grab the URL
        var currentURL = window.location.origin;

        // AJAX post the data to the matches API to pass in the user data
        $.post(currentURL + "/api/matches", userData, function(data){

            // Test to see if working
            // alert("working!!");

            // Grab the result from the AJAX post so that the best match's name and photo are displayed.
            $("#matchName").text(data.name);
            $('#matchImg').attr("src", data.photo);

            // Show the modal with the best match
            $("#resultsModal").modal('toggle');

        });
    }
    else
    {
        // alert("Please fill out all fields before submitting!");
        $("#alertModal").modal('toggle');
    }

    return false;
});