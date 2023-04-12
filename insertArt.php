
<?php
    $conn = mysqli_connect("localhost", "root", "", "blogdb");
    if($conn === false){
        die("ERROR: Could not connect. ". mysqli_connect_error());
    }
    $userName =  $_REQUEST['Username'];
    $Title = $_REQUEST['Title'];
    $Article =  $_REQUEST['Article'];
    date_default_timezone_set('Asia/Kolkata');
    $DT=date("d/m/Y h:i:sa");

    $sql = "INSERT INTO blogart VALUES ('$DT','$userName','$Title','$Article')";

    if(mysqli_query($conn, $sql)){
        echo '<script>alert("Added successfully");</script>';
        include 'Home.php';
    }
    else{
        echo "ERROR: Hush! Sorry $sql. ". mysqli_error($conn);
    }

    mysqli_close($conn);
?>
