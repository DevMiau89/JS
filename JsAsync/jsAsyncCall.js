/**
 * Created by DevMiau on 23-Mar-18.
 */
window.addEventListener('DOMContentLoaded', function () {

    function handleError(jqXHR, textStatus, error) {
        console.log(error);
    }

    $.ajax({
        type: "GET",
        url: "data/friends.json",
        success: cbTweets,
        error: handleError
    });

    function cbTweets(data) {
        console.log(data);
        $.ajax({
            type: "GET",
            url: "data/tweets.json",
            success: cbVideos,
            error: handleError
        });
    }

    function cbVideos(data) {
        console.log(data);

         $.ajax({
            type: "GET",
            url: "data/videos.json",
            success: function (data) {
                console.log(data);
            },
            handleError
        });
    }

});

