define([
  'js/postmonger'
], function(
  Postmonger
) {
  'use strict';

  const connection = new Postmonger.Session();
  $(window).ready(onRender);

  function onRender() {
      // JB will respond the first time 'ready' is called with 'initActivity'
      connection.trigger('ready');
      connection.trigger('requestTokens');
      connection.trigger('requestEndpoints');
      connection.on('initActivity', data => {
        document.getElementById('configuration').value = JSON.stringify(data, null, 2);
      });
      connection.on('clickedNext', () => {
        const configuration = JSON.parse(document.getElementById('configuratin').value);
        // UpdateActivity saves our configuration into Journey Builder.
        connection.trigger('updateActivity', configuration);
      });
  }
});