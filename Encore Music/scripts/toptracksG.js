window.onload = function(){
      $.ajax(
        {
            tpye:'GET',
            dataType: "json",
            url:'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=490cd7b39124917b2255f13bc207997d&format=json&limit=1',
            success: function(data){
            console.log('Success!',data.tracks);
            var tracks= data.tracks;
            console.log(tracks);
            
        }
        });

}

function revGeo(){
      apiKey = 'AIzaSyCZLkadB2ynDyYUyw4c8xGamJfPkIvg-DA';
      url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+ output + '&key=' + apiKey;
      sendRequest(url);
}

function sendRequest(url){
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
            if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
                  var data = JSON.parse(xmlhttp.responseText);
                  var address = data.results[1].geometry;
                  console.log(address);
                  document.getElementById('fileLoc').innerHTML += address;
            }
      };

      xmlhttp.open("GET",url,true);
      xmlhttp.send();
}
