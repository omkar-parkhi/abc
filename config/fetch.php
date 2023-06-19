<?php

    require_once "connect.php";

    $query="select count(*) from tbl_placement where status=1";
    $limit=7;

    
    $slc=mysqli_query($con,$query) or die(mysqli_error($con));
    $count=mysqli_fetch_array($slc);
    $no_of_records= $count['0'];


    if(isset($_POST['mylimit'])){
      $limit=$_POST['mylimit'];
      // echo $_POST['mylimit'];
      // echo "Hello";
    }else{
      $limit=20;
    }
      $query="select * from tbl_placement where status=1 order by pl_id DESC LIMIT $limit";

    $sql=mysqli_query($con,$query) or die(mysqli_error($con));
    while($row=mysqli_fetch_assoc($sql)){

        echo "<figure class='item placement-cell'><img src='https://ecti.co.in/placementimages/".$row['stud_image']."'/>";
        echo "<figcaption class='placement-caption'>";
        echo "<p>".$row['student_name']."</p>";
        echo "<h5>".$row['company']."</h5>";
        echo "<p>".$row['job_descr']."</p>";
        $date=$row['jdate'];
        echo "<p>".$tr_date= date('F,Y',strtotime($date))."</p>";
        echo "</figcaption>";
        echo "</figure>";

    }
  
?>