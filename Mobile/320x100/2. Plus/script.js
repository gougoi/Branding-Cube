let closeBtn = document.querySelector( ".box_close_box" );
        let bidrichCube = document.getElementById( 'b-cube-box' );

        function box_close(){
            bidrichCube.style.display = "none"
        }

        $(window).scroll(function() {           
        if($(document).scrollTop() > 50){
                $(bidrichCube).addClass("bidrich-fixed");
                $(closeBtn).fadeIn(300);
            }else if($(document).scrollTop() == 0){
                bidrichCube.style.display = "flex"
                $('#advertis_icon').removeClass('bidrichBlock')
            }
            else {
                $(bidrichCube).removeClass("bidrich-fixed");
                $(closeBtn).fadeOut(200);
            }
        });

        
// bidrich infomark
function infoOpen(){
    $('#advertis_icon').toggleClass('bidrichBlock')
}

