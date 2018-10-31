//обработчик формы Быстрый Звонок
$(document).ready(function(){

  $('.landing-form', this).submit(function(){

    if($(this).data('formstatus') !== 'submitting'){

      var form = $(this),
          formData = form.serialize(),
          formUrl = form.attr('action'),
          formMethod = form.attr('method'),
          responseMsg = form.find('.response-site');

      form.data('formstatus','submitting');

      $.ajax({
        url: formUrl,
        type: formMethod,
        data: formData,
        success:function(data){

          var responseData = jQuery.parseJSON(data),
              klass = '';

          switch(responseData.status){
            case 'error':
              klass = 'response-error-site';
              break;
            case 'success':
              klass = 'response-success-site';
              break;
          }

          responseMsg.fadeOut(200,function(){
            //$('input[placeholder]').placeholder();
            if (klass == 'response-success-site') {
              //form.find('.reservation__input input[name="name"]').val('');
              //form.find('.reservation__input input[name="phone"]').val('');

              $(this).removeClass('response-waiting-site')
                  .addClass(klass)
                  .html(responseData.message)
                  .fadeIn(200,function(){
                    var url = "../thanks.html";
                    $(location).attr('href',url);
                    exit;
                    setTimeout(function(){
                      $(this).removeClass(klass);
                      form.data('formstatus','idle');
                    },2000)
                  });

              //yaCounter28632131.reachGoal('site_order');

              //document.forms['landing_form'].reset();
            }

            $(this).removeClass('response-waiting-site');

            if(responseData.type == 'name') {
              form.find('.reservation__input input[name="name"]').attr('placeholder', responseData.message);
              form.find('.reservation__input input[name="name"]').addClass('input-err');
            } else if(responseData.type == 'phone') {
              form.find('.reservation__input input[name="phone"]').attr('placeholder', responseData.message);
              form.find('.reservation__input input[name="phone"]').addClass('input-err');
            }

            if(form.find('.reservation__input input[name="name"]').val() != '') {
              form.find('.reservation__input input[name="name"]').removeClass('input-err');
            }
            if(form.find('.reservation__input input[name="phone"]').val() != '') {
              form.find('.reservation__input input[name="phone"]').removeClass('input-err');
            }

            setTimeout(function(){
              form.data('formstatus','idle');
            },2000);

          });
        }
      });
    }

    return false;
  });

});
