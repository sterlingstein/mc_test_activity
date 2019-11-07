const connection = new Postmonger.Session();
// JB will respond the first time 'ready' is called with 'initActivity'
connection.trigger('ready');
connection.on('initActivity', data => {
  console.log("called initActivity");
  document.getElementById('configuration').value = JSON.stringify(data, null, 2);
});
connection.on('clickedNext', () => {
  console.log("called clickedNext");
  const configuration = JSON.parse(document.getElementById('configuratin').value);
  // UpdateActivity saves our configuration into Journey Builder.
  connection.trigger('updateActivity', configuration);
});