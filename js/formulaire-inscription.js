$(document).ready(function() {
    var form = $('#formMail');
    var msgBox = $('#popupMsg');
    var msgText = "";
    msgBox.css({
        'display': 'none',
        'opacity': 0
    });

    function openClosePopupMsg(pMessage) {
        msgBox.children('p').text(pMessage);
        msgBox.css({
            'display': 'block'
        }).animate({
            'opacity': 1
        }, 500, function() {
            msgBox.delay(5000).animate({
                'opacity': 1
            });
        });
    }
    form.submit(function(event) {
        event.preventDefault();
        var that = $(this);
        $.ajax({
            url: that.attr('action'),
            type: that.attr('method'),
            data: that.serialize(),
            success: function(data) {
                msgText = "Votre inscription a bien été prise en compte. Vous serez informé dès la disponibilité de l'application.";
                openClosePopupMsg(msgText);
                $('#commentaire').css('display', 'none');
            },
            error: function(data) {
                msgText = "Une erreur est survenue. Veuillez réessayer plus tard";
                openClosePopupMsg(msgText)
            }
        });
    });
});