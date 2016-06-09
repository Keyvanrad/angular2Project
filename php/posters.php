<?php
    header("Access-Control-Allow-Origin: *");
//    header("Content-Type: application/json; charset=UTF-8");

    $movieId = $_GET["movieId"];
    $isMovieTitle = $_GET["isMovieTitle"];

    $byTitleUrl = "http://www.omdbapi.com/?r=xml&t=";
    $byIdUrl = "http://www.omdbapi.com/?r=json&i=tt";

    $result = NULL;
    $finalResult = NULL;

    if ($isMovieTitle == "true") {
        $result = $byTitleUrl . $movieId;
    } else {
        $result = $byIdUrl . $movieId;
    }
    $finalResult = file_get_contents($result);
    echo($finalResult);
?>