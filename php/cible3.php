<?php
if(isset($_POST['email'])){
    $subject = "Inscription ApiMemo";
    $to = "bienvenue@example.com";
    $from = addSlashes($_POST['email']);
    $prenom = addSlashes($_POST['prenom']);
    $tab = $_POST['case'];
    $infoUser = "From:". $prenom." mail : ".$from;
    $finalMessage = "Cette personne souhaite s'inscrire à ApiMemo : \n\r Prénom : ".$prenom." \n\r  case cochée : ".$tab." Elle affirme avoir pris connaissance de la Politique de confidentialité";

    mail ($to, $subject, $finalMessage, $infoUser);
    echo 'Votre inscription a bien été prise en compte. Merci!';
}
else{
    echo "Une erreur est survenue. Veuillez réessayer plus tard";
}
?>