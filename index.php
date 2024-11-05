<?php

require 'vendor/autoload.php';

use Twig\Loader\FilesystemLoader;
use Twig\Environment;

$loader = new FilesystemLoader('views');
$twig = new Environment($loader);

echo $twig->render('home.html');