<?php
  $user_input = $_POST['user_input'];
  $file = fopen("user_input.txt", "a");
  fwrite($file, $user_input . "\n");
  fclose($file);
?>