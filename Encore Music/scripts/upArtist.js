 var usr =[];
 SC.initialize({
    client_id: 'G0KafUUyQg2qCqyfp1YswhR4TZZA35Tc',
    // redirect_uri: 'http://example.com/callback'
  });

 SC.get('/users',{limit:10}).then(function(users){
  // console.log(users[0].username);
  
  usr = users;
  // console.log(usr[0].followers_count);
  // console.log(usr);

});
