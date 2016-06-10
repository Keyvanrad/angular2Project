<?php
    header("Access-Control-Allow-Origin: *");
    header('Content-type: image/jpeg');

    $movieId = $_GET["movieId"];
    $isMovieTitle = $_GET["isMovieTitle"];

    $byTitleUrl = "http://www.omdbapi.com/?r=json&t=";
    $byIdUrl = "http://www.omdbapi.com/?r=json&i=tt";

    $result = NULL;
    $finalResult = NULL;
    $resultJson = NULL;
    $thePoster = NULL;

    if ($isMovieTitle == "true") {
        $movieId = str_replace(' ', '%20', $movieId);
        $result = $byTitleUrl . $movieId;
    } else {
        $result = $byIdUrl . $movieId;
    }
    $finalResult = file_get_contents($result);

    $resultJson = json_decode($finalResult, true);
    $imgUrl = $resultJson['Poster'];

    $thePoster = file_get_contents($imgUrl);

    if (empty($thePoster)) {
        $thePoster = file_get_contents("http://tordnet.com/angular/assets/noposter.jpg");
    }
    echo($thePoster);

?>