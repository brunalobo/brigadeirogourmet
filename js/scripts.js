//<script src="js/jquery.min.js"></script>
//<script src="js/scripts.js"></script>

$(function() {
    //FUNÇÃO PARA ATIVAR O SCROOL SUAVE COM A class="scroll"
    $(".scroll").click(function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop:$(this.hash).offset().top - 80}, 1000);
    });
});
