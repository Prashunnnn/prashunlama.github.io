<?php
header('Cache-Control: public, max-age=600'); // Cache for 10 minutes
header('Expires: ' . gmdate('D, d M Y H:i:s', time() + 600) . ' GMT');


include('connect.php');
if(isset($_GET['city'])) {
    $city = $_GET['city']; 
} else {
    $city = 'Bury';
}

$API_KEY = '3265874a2c77ae4a04bb96236a642d2f'; 

$url = "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric";

$response = file_get_contents($url); 
$data = json_decode($response, true); 

if ($data) {
    $Temperature = ($data['main']['temp']);
    $Humidity = ($data['main']['humidity']);
    $Pressure = ($data['main']['pressure']);
    $Windspeed = ($data['wind']['speed']);
    $Description = $data['weather'][0]['description'];
    $Date = date('m-d-Y',$data['dt']);

    $sql = "INSERT INTO `prashun` (`Temperature`, `Humidity`, `Pressure`, `Windspeed`, `DateTime`, `Description`) VALUES ('$Temperature', '$Humidity', '$Pressure', '$Windspeed', NOW(), '$Description')";

    $result = mysqli_query($connect, $sql);

    if ($result) {
        echo "Data inserted successfully!";
    } else {
        echo "Error inserting data: " . mysqli_error($connect);
    }
} else {
    echo "Failed to fetch data from the API.";
}
?>


