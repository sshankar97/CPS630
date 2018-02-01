
window.onload = function(){
var artId;
var img;
var prev = document.getElementById('prev');
};

 


 function getArtist(){
    artId = document.getElementById('query').value;
    
    $.ajax(
        {
            tpye:'GET',
            dataType: "json",
            url:'https://api.spotify.com/v1/search?q=' +artId + '&type=track,artist&market=US',
            success: function(data){
            // console.log(data.artists.items[0].name, data.artists.items[0].id);
            var artist =  data.artists.items[0].id;
            sendArtist(artist);
        }
        });

}  

function sendArtist(artist){
      
      $.ajax(
        {
            tpye:'GET',
            dataType: "json",
            url:'https://api.spotify.com/v1/artists/'+artist+'/top-tracks?country=US',
            success: function(data){
            // console.log('Success!',data.tracks);
            var tracks= data.tracks;
            // console.log(tracks[0].album.images[0].url);
            // console.log(tracks);
            processTracks(tracks);        
        }
        });
}

function processTracks(tracks){
    var songs=[];
    var songImg=[];
    var songPrev=[];
    songPrev.length = songs.length;

    for(i=0; i < tracks.length;i++){
          songImg.push(tracks[i].album.images[0].url);
          songs.push(tracks[i].name);
          songPrev.push(tracks[i].preview_url);
          //console.log(songPrev);
      };
    aud = document.createElement("AUDIO");

for(i=0; i < songs.length;i++){
    
    var x = document.createElement("FIGURE");
    x.setAttribute("id", "myFigure");
    document.body.appendChild(x);
    var z = document.createElement("FIGCAPTION");
    z.id = 'cap';
    z.setAttribute("value",songs[0]);
    z.innerHTML = songs[i];
    var y = document.createElement("IMG");
    y.id = "album";
    y.title =  songs[i];
    y.src = songImg[i];
    y.setAttribute("width", "204");
    y.setAttribute("width", "128");
    aud.src = songPrev[i];
    aud.id = "prev";
    y.onclick = function () {
      aud.play();
      console.log(aud);
      console.log(aud.textTracks.length);
    }
   
      x.appendChild(y);
      x.appendChild(z);
      x.appendChild(aud);
}
    // console.log(songPrev);

    
};


  