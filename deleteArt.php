
<?php
    $conn = mysqli_connect("localhost", "root", "", "blogdb");
    if($conn === false){
        die("ERROR: Could not connect. ". mysqli_connect_error());
    }
    $userName =  $_REQUEST['Username'];
    $Title = $_REQUEST['Title'];

    $sql = "DELETE FROM blogart WHERE Title='$Title' and userName='$userName'";

    if(mysqli_query($conn, $sql)){
        echo '<script>alert("Removed successfully");</script>';
        include 'Home.php';
    }
    else{
        echo "ERROR: Hush! Sorry $sql. ". mysqli_error($conn);
    }

    mysqli_close($conn);
?>
