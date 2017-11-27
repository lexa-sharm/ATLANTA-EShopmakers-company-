<?php


define("DB_HOST","localhost");
define("DB_NAME","world"); //Имя базы
define("DB_USER","root"); //Пользователь
define("DB_PASSWORD",""); //Пароль
define("PREFIX",""); //Префикс если нужно

$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
$mysqli -> query("SET NAMES 'utf8'") or die ("Ошибка соединения с базой!");

if(!empty($_POST["serchinput"])){
	$serchinput = $_POST["serchinput"];
}elseif(!empty($_GET["serchinput"])){
	$serchinput = $_GET["serchinput"];
}else{
	return null;
}



$referal = trim(strip_tags(stripcslashes(htmlspecialchars($serchinput))));

$db_referal = $mysqli->query("SELECT Name FROM city WHERE Name LIKE '%".$referal."%' LIMIT 10");
//$db_referal = $mysqli->query("SELECT Name FROM city");

$list = array();
while ($row = $db_referal -> fetch_array()) {
   //echo "\n<li>".$row['Name']."</li>"; //$row["name"] - имя поля таблицы
	$list[] = "\"".$row['Name']."\"";
}

echo "[".implode(",", $list)."]";


?>