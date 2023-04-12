<?php
include("datas.php");
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Let's Blog</title>
        <link rel="stylesheet" href="StyleH.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">
        <script src="downloadal.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/file-saver@2.0.5/dist/FileSaver.min.js"></script>


    </head>
    <body>
        <div id="main">
            <h1>Let's Blog</h1>
            <div id="nav">
                <ul>
                    <li><a class="active" href="#">Home</a></li>
                    <li><a href="Add.html">Add</a></li>
                    <li><a href="Delete.html">Delete</a></li>
                    <li><a href="Login.html">Logout</a></li>
                </ul>
            </div>
            <div style="display:grid;grid-template-columns: auto auto auto;width:100%;">
            <?php
                foreach($fetchData as $data){
                    ?>

                    <div id="artGrid" style="color:#0f9b0f;margin:auto;margin-top:20px;padding:10px;width:400px;word-wrap: break-word;height:auto;text-align:center;box-shadow: 2px 5px 8px #0f9b0f;border-radius:10px">
                        <div style="font-size:10px;display:inline;"><?php echo $data['DT']??''; ?></div>
                        <div style="font-size:14px;display:inline;"><?php echo $data['userName']??''; ?></div><br>
                        <div style="font-size:16px;display:inline;"><u><?php echo $data['Title']??''; ?></u></div><br>   
                        <div style="font-size:10px;display:inline;"><?php echo $data['Article']??''; ?></div><br>
                        <button <?php echo "onclick='Alertt()'"?> style="width:40px;height:40px;border-radius:5px;border-color:white;background-color:white;box-shadow: 1px 3px 3px #0f9b0f;"><img src="assets/download.png" width=25px></button>
                    </div>
                    
                    <?php
            }?>
            </div>
        </div>
    </body>
</html>