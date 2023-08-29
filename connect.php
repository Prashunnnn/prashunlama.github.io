<?php
  $username = "root";
  $servername = "localhost";
  $password = "";
  $dbname= "lama";

  $connect = mysqli_connect($servername,$username,$password,$dbname);

  if(!$connect){
    echo"Unsuccessful connection";
  }
?>