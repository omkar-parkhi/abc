<?php  
header('Access-Control-Allow-Origin:*');
  require_once "connect.php";
  $select_query="select count(*) from tbl_placement where status=1";
  $limit=16;
  if($con){
    $slc=mysqli_query($con,$select_query) or die(mysqli_error($con));
    $count=mysqli_fetch_array($slc);
    $no_of_records= $count['0'];
    if(isset($_POST['mylimit'])){
      $limit=$_POST['mylimit'];
    }else{
      $limit=16;
    }
      $query="select * from tbl_placement where status=1 order by pl_id DESC LIMIT $limit";
    $sql=mysqli_query($con,$query) or die(mysqli_error($con)); ?>
      <input type="hidden" value="<?php echo $no_of_records ?>" id="count">
      <div class='row'>
    <?php
    while($row=mysqli_fetch_assoc($sql)){
      ?>
    <figure class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="holder-place-image placement-cell">
      <img src="https://www.ecti.co.in/placementimages/<?php echo $row['stud_image']; ?> " alt="">
      <figcaption>
        <p class="mt-3"><?php echo $row['student_name'] ?></p>
        <h5><?php echo $row['company']; ?></h5>
        <p class="mb-0"><?php echo $row['job_descr'] ?></p>
        <p><?php $date=$row['jdate'];
              echo date('F, Y', strtotime($date));
        ?></p>
      </figcaption>
      </div>
    </figure>
      <?php
    }

    ?>
    </div>
    <?php




  }
   
 
  else{
    echo "There is an error while connecting to the database".mysqli_error($con);
  }
?>