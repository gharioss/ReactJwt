<?php

$secret = bin2hex(random_bytes(32));
echo "Secret: \n";
echo $secret;
echo "\nCopy this key to the .end file like this: \n";
echo "SECRET = " . $secret . "\n";
