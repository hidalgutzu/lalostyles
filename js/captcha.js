<script src="https://www.google.com/recaptcha/api.js?render=6Ld3WcUUAAAAAM6Ldb8hxp5RsFGufTBobsT_18CA"></script>
<script>
grecaptcha.ready(function() {
    grecaptcha.execute('6Ld3WcUUAAAAAM6Ldb8hxp5RsFGufTBobsT_18CA', {action: 'homepage'}).then(function(token) {
       ...
    });
});
</script>
<script type="text/javascript">
  var onloadCallback = function() {
    alert("grecaptcha is ready!");
  };
</script>
<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
    async defer>
</script>