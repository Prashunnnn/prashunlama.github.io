<?php
include('connect.php');

$sql = "SELECT * FROM `prashun` ORDER BY `DateTime` DESC";
$result = mysqli_query($connect, $sql);

$data = array();

if ($result) {
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    echo json_encode($data);
} else {
    echo "Error fetching data: " . mysqli_error($connect);
}
?>
