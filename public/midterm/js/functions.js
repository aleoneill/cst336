$.ajax({
    method: "GET",
    url: "https://cst336.herokuapp.com/projects/api/videoLikesAPI.php?videoId=Bebe_jkkNGY",
    dataType: "json",
    data: {
        "likes": $("#likes").val(),
        "dislikes" : $("#dislikes").val()
    },
    success: function(result, status) {
        $("#likes").html(result.likes);
        $("#dislikes").html(result.dislikes);
    }
});

$(document).on("click", "#comments", function(e) {
    $.ajax({
        method: "GET",
        url: "https://cst336.herokuapp.com/projects/api/videoLikesAPI.php?videoId=xyz&action=action",
        dataType: "json",
        data: {
            "comment" : $("#comment").val(),
            "author" : $("#author").val(),
            "date" : $("#date").val(),
            "rating" : $("#rating").val()
        },
        success: function(result, status) {
            for (var i = 0; i < 3; i++) {
                var index = Math.floor(Math.random() * result.length);
                $(`#comment${i + 1}`).html(result[index].comment);
                $(`#author${i + 1}`).html(result[index].author);
                $(`#date${i + 1}`).html(result[index].date);
            }
        }
    });
});

$(document).on("click", "#like", function() {
    $.ajax({
        method: "GET",
        url: "https://cst336.herokuapp.com/projects/api/videoLikesAPI.php?videoId=Bebe_jkkNGY",
        dataType: "json",
        data: {"likes": $("#likes").val() },
        success: function(result, status) {
            $("#cancel-like").css("visibility", "visible");
            $("#like").css("visibility", "hidden");
        }
    });
});

$(document).on("click", "#dislike", function() {
    $.ajax({
        method: "GET",
        url: "https://cst336.herokuapp.com/projects/api/videoLikesAPI.php?videoId=Bebe_jkkNGY",
        dataType: "json",
        data: {"dislikes": $("#dislikes").val() },
        success: function(result, status) {
            $("#dislikes").html(result.dislikes);
            $("#cancel-dislike").css("visibility", "visible");
            $("#dislike").css("visibility", "hidden");
        }
    });
});

$(document).on("click", "#cancel-like", function() {
    $.ajax({
        method: "GET",
        url: "https://cst336.herokuapp.com/projects/api/videoLikesAPI.php?videoId=Bebe_jkkNGY",
        dataType: "json",
        success: function(result, status) {
            $("#cancel-like").css("visibility", "hiddden");
            $("#like").css("visibility", "visible");
        }
    });
});

$(document).on("click", "#cancel-dislike", function() {
    $.ajax({
        method: "GET",
        url: "https://cst336.herokuapp.com/projects/api/videoLikesAPI.php?videoId=Bebe_jkkNGY",
        dataType: "json",
        success: function(result, status) {
            $("#cancel-dislike").css("visibility", "hidden");
            $("#dislike").css("visibility", "visible");
        }
    });
});

$(document).on("click", "#answerQ", function(e) {
    $("#question").css("visibility", "visible");
});

$(document).on("change", "#answer", function() {
    if ($("#answer").val() == 'Tucker') {
        $("#feedback").html("<span style='background-color: green'>Correct!</span>");
    } else {
        $("#feedback").html("<span style='background-color: red'>Incorrect!</span>");
    }
});