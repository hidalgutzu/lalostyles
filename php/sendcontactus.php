<?php
//Creamos las variables que recibiran a las variables enviadas con el metodo post. 
//la forma de recibir una variable por el metodo post es $_POST[STRING]
$nom=$_POST['name'];
$ma=$_POST['email'];
$loc=$_POST['location'];
$cell=$_POST['cellphone'];
$msg=$_POST['msg'];

//echo nos permite mostrar en pantalla
echo $nom;
//mostramos un salto de linea para que no se mire todo en un solo renglon.
echo "<br/>";
echo $ma;
echo "<br/>";
echo $loc;
echo "<br/>";
echo $cell;
echo "<br/>";
echo $msg;
?>