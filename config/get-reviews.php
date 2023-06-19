<?php

    require_once "connect.php";


    $sql="select * from tbl_reviews";

    $query=mysqli_query($con,$sql) or die (mysqli_error($con));

    // print_r($query);
    while($row=mysqli_fetch_row($query))
    {   
        echo "<div class='review-container'>";
        echo "<p>";
            echo $row[3];
        echo "</p>";
        // $row[1];
        echo "<div class='review-person-container d-flex'>";
        echo "<div class='r-image'>";
        $new_img=substr($row[4],5);
        echo "<img src='https://www.ecti.co.in/".$new_img."' alt='".$row[1]."' title='".$row[1]."'/>";
        echo "</div>";
        echo "<div class='r-info'>";
        echo "<h5>".$row[1]."</h5>";
        echo "</div>";
        echo "<div class='quotes'><i class='fa-solid fa-quote-right'></i></div>";
        echo "</div>";
        echo "</div>";
    }
    // print_r($row);



?>