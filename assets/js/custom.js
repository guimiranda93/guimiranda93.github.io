$(document).ready(function(){

  if($('.home-slider').length > 0){
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
  }

  if($('.precos-slider').length > 0){
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
  }

  var SPMaskBehavior = function (val) {
    return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
  },
  spOptions = {
    onKeyPress: function(val, e, field, options) {
        field.mask(SPMaskBehavior.apply({}, arguments), options);
      }
  };

  $('#telefone-input').mask(SPMaskBehavior, spOptions);



})

$('#ligamos').click(function(e){
  e.preventDefault();

  $('#ligamos-modal').modal();
})

$('#enviaremail').click(function(e){
  e.preventDefault();

  var nome = $('#nome-input').val();
  var telefone = $('#telefone-input').val();

  if(nome == '' || telefone == ''){
    alert('Preencha o nome e o telefone.');
  }
  else{
    $.ajax({
      url:'sendmail.php',
      method:'POST',
      data:{nome:nome, telefone:telefone},
      success:function(result){
        alert('Aguarde que entraremos em contato.')
        $('#ligamos-modal').modal('hide');
        $('#nome-input').val('');
        $('#telefone-input').val('');
      },
      error:function(error){
        console.log(error);
      }
    })
  }



})
