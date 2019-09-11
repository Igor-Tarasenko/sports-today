<?php
$curl = curl_init();
$url = 'http://eventregistry.org/api/v1/article/getArticles?query=%7B%22%24query%22%3A%7B%22%24and%22%3A%5B%7B%22conceptUri%22%3A%22http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSport%22%7D%2C%7B%22categoryUri%22%3A%22dmoz%2FSports%22%7D%2C%7B%22lang%22%3A%22eng%22%7D%5D%7D%7D&dataType=news&resultType=articles&articlesSortBy=date&articlesCount=20&articleBodyLen=-1&includeConceptImage=true&includeConceptDescription=true&includeSourceRanking=true&apiKey=43bc7e72-0cc7-4d12-a388-f01a9cba9833';

// OPTIONS:
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

// EXECUTE:
$result = curl_exec($curl);
curl_close($curl);
$decodedData = json_decode($result, TRUE);
var_dump($decodedData);
die();
$encodedData = json_encode($decodedData[‘articles’]);
$data_writing = file_put_contents("news.json", $encodedData);
curl_close($curl);
?>
