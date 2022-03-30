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
            }, 500, function() {
                msgBox.css({
                    'display': 'none'
                });
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
                msgText = 'Votre message a été envoyé. Merci!';
                openClosePopupMsg(msgText);
                setTimeout(function(){
                location.reload();
                },3000);
            },
            error: function(data) {
                msgText = "Votre message n'a pas pu être envoyé. Réessayez plus tard";
                openClosePopupMsg(msgText)
            }
        });
    });
});