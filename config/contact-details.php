<?php
    require_once "connect.php";
    if(isset($_POST['fname'])&& isset($_POST['lname'])&&isset($_POST['phno'])&&isset($_POST['cr']) && $_POST['email']){
        $fname=$_POST['fname'];
        $lname=$_POST['lname'];
        $cr=$_POST['cr'];
        $phno=$_POST['phno'];
        $email=$_POST['email'];

        $query="insert into table_contact(first_name,last_name,course,phno,email) values('$fname','$lname','$cr','$phno','$email')";
  mysqli_query($con,$query) or die(mysqli_error($sql));
        echo "<p class='text-success'>Thanks! We will get in touch with you within next 3 business days!</p>";
    }else{
        echo "Error";
    }




?>