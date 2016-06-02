<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    $listType = $_GET["listType"];
    $result = NULL;

    $openingUrl = "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/opening.json?apikey=pjjkpm57xrm7gs63spvvaumt&limit=5&country=ca";
    $boxUrl = "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?apikey=pjjkpm57xrm7gs63spvvaumt&limit=10";
    $upcomingUrl = "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json?page_limit=10&page=1&country=ca&apikey=pjjkpm57xrm7gs63spvvaumt";

    switch ($listType) {
        case "opening":
            $result = file_get_contents($openingUrl);
            break;
        case "boxoffice":
            $result = file_get_contents($boxUrl);
            break;
        case "upcoming":
            $result = file_get_contents($upcomingUrl);
            break;
        default:
            echo $result;
    }

    echo($result);
?>