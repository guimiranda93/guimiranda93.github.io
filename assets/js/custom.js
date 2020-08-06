$(document).ready(function(){
  var slider = tns({
    mode: 'carousel',
    container: '.home-slider',
    items: 1,
    gutter:10,
    controlsText: ['<ion-icon name="chevron-back" class="botao-slider" size="large"></ion-icon>', '<ion-icon name="chevron-forward" class="botao-slider" size="large"></ion-icon>'],
    nav:false,
    slideBy:'page',
    responsive: {
      900: {
        items: 3
      }
    }
  });

  var slider_precos = tns({
    mode: 'carousel',
    autoHeight:true,
    container: '.precos-slider',
    items: 1,
    gutter:20,
    controlsText: ['<ion-icon name="chevron-back" class="botao-slider-preco" size="large"></ion-icon>', '<ion-icon name="chevron-forward" class="botao-slider-preco" size="large"></ion-icon>'],
    nav:false,
    loop:false,
    slideBy:'page',
    responsive: {
      900: {
        items: 3
      }
    }
  });
})
