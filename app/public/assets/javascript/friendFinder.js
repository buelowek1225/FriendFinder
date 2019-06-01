// click handler / on click event
$("#submitButton").on("click", function(event){
    event.preventDefault();
    // grab data
    // ajax call
    // initalize the object, setting up structure
    var scores = [];
    var newFriends = {
        "name": $("#userName").val().trim(),
        "photo": $("#userPhoto").val().trim(), 
        scores: scores
    }
     for (var i=1; i <= 10; i++) {
        var score = $("#q"+i).val().trim();
        // console.log(score);
        var numScore = parseInt(score.charAt(0));
        // console.log(numScore);
        scores.push(numScore);
     }

    $.post("/api/friends", newFriends, function(data){
        // console.log(data);
    })
    console.log(newFriends);
})

    // ========================= Pseudocode ==========================
    // if score is "" then through alert to fill in questions/modal
    // validate name
    // validate photo
    // upon closing match display modal call function to clear survey input