<?php
if(isset($_POST['email'])){
    $subject = "Message du site ApiMemo";
    $to = "contact@example.com";
    $from = addSlashes($_POST['email']);
    $nom = addSlashes($_POST['nom']);
    $message = addSlashes($_POST['message']);
    $infoUser = "From:" .$nom ." mail: ".$from;
    $finalMessage = "Cette personne vous envoie un message depuis le formulaire du site ApiMemo : \n\r ".$nom." : \n\r" .$message;

    mail ($to, $subject, $finalMessage, $infoUser);
    echo 'Votre message a été envoyé. Merci!';
}
else{
    echo "Votre message n'a pas pu être envoyé. Réessayez plus tard";
}
?>