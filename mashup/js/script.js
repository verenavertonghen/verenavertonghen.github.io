/* q-music mashup script.js
=========================================================*/
//Code omtrent qmusic api, facebook api, youtube api.

//q-music
//Basisurl afbeeldingen: http://images.q-music.be/
//Basisurl REST: http://api.q-music.be/1.2/

/* Extensions
=========================================================*/

//Extesion voor :contains zodat er ook gezocht kan worden op uppercase letters. 
//Gebruik hiervoor :containsNC
//Snippet van Stack Overflow.
$.extend($.expr[":"], {
  "containsNC": function(elem, i, match, array) {
  return (elem.textContent || elem.innerText || "")
  .toLowerCase().indexOf((match[3] || "")
  .toLowerCase()) >= 0;
  }
});

/* Functions
=========================================================*/

//Haalt alle liedje op van alle edities van een bepaalde hitlijst
function getAllSongIds(lijstId){
  var songTracks = [];
  $.ajax({
    url: "http://api.q-music.be/1.2/lists/"+lijstId+"/editions/",   
    dataType: "jsonp",
    async: false,
    success: function(json){
      for (i in json.editions) {
        $.ajax({
          url:"http://api.q-music.be/1.2/lists/"+lijstId+"/editions/"+json.editions[i].id,
          dataType:"jsonp",
          async: false,
          success: function(json2){
            for(j in json2.tracks){
              if(songTracks.indexOf(json2.tracks[j].selector_code) === -1){
                songTracks.push(json2.tracks[j].selector_code);

                var songDiv = $('<div>');
                songDiv.attr('id',json2.tracks[j].artist.name +" - " +json2.tracks[j].title)
                .attr('class','song-div');

                $("<img>")
                .attr('id',json2.tracks[j].selector_code)
                .attr('src','http://images.q-music.be/'+json2.tracks[j].thumbnail)
                .attr('class','small-img')
                .appendTo(songDiv);

                $("<input>")
                .attr('id',json2.tracks[j].selector_code)
                .attr('value',json2.tracks[j].artist.name +" - " +json2.tracks[j].title)
                .attr('type','checkbox')
                .attr('class','check-style')
                .appendTo(songDiv);

                $("<label>")
                .attr('for',json2.tracks[j].selector_code)
                .text(json2.tracks[j].artist.name +" - " +json2.tracks[j].title)
                .appendTo(songDiv);

                songDiv.appendTo('#song-form');
              }
            }
          }
        })
      }
    }
  });
  return songTracks;
};  

//Youtube Playlist werking
/*
http://www.youtube.com/v/PRIMARYVIDEO_ID?version=3&loop=1&playlist=VIDEO_ID1,VIDEO_ID2
De eerste video id wordt toegevoegd op PRIMARYVIDEO_ID. 
Daarna voeg je bij playlist de volgende id's toe gescheiden door een komma.
Voorbeeld: 
ntC4nKb-4fU //reclame qmusic
yd8jh9QYfEs //rihanna
Ri7-vnrJD3k //adele
http://www.youtube.com/v/ntC4nKb-4fU?version=3&loop=1&playlist=yd8jh9QYfEs,Ri7-vnrJD3k
*/

//Ophalen van de youtubeid's en hier een playlistlink mee creëren.
function getYoutubeIDs(){
  //http://api.q-music.be/1.2/tracks/
  console.log("getYoutubeIDs");
  var songIds = JSON.parse(sessionStorage.idArray);
  for(songId in songIds){
    $.ajax({
      url:"http://api.q-music.be/1.2/tracks/"+songIds[songId],
      dataType:"jsonp",
      async: true,
      success: function(song){
        console.log("success!");
        for(video in song.videos){
          if(song.videos[video].type === "youtube"){

            if(sessionStorage.youtubeIDs){
              sessionStorage.youtubeIDs = sessionStorage.youtubeIDs + "," + song.videos[video].id;
            }
            else{
              sessionStorage.youtubeIDs = "http://www.youtube.com/v/ntC4nKb-4fU?version=3&loop=1&playlist=" +  song.videos[video].id;
            }
          }
        }
      }
    });
  }
}

//De mixtape delen op facebook.
function shareOnFacebook(){
  //https://www.facebook.com/dialog/share?app_id=573772579411776&display=popup&href=http://qmusic.be/playlist&redirect_uri=http://qmusic.be/playlist
  FB.ui({
   method: 'feed',
   name: 'Facebook Dialogs',
   link: sessionStorage.youtubeIDs ,
   picture: 'http://verenavertonghen.mctantwerpen.kdg.be/img/mix4.png',
   caption: 'Flippin\' mixtape',
   description: 'Mixtape!',
   message: 'I made this mixtape, check it out! \n' + sessionStorage.youtubeIDs}
  ,function(response) {});
}

//Haalt de waarden op van de geselecteerde checkboxen en plaatst de value in de select-preview div.
function displayVals(){
  var valArray = $( "input:checkbox:checked" ).map(function(){ return this.value; }).get();

  //html5 sessionStorage om songIds in op te slaan + stringify om er array als paresable string op te slaan
  if(sessionStorage){
   sessionStorage.idArray = JSON.stringify($( "input:checkbox:checked" ).map(function(){ return this.id; }).get());
  }

  if(valArray.length !== 0){
    if (valArray.length <= 15){
      var liedjesData = "";
      for (i in valArray) {
        liedjesData = liedjesData + ('<p class="preview-p">' + valArray[i] + '</p>');

      }
      $('#select-preview').html('<h1 class="special-font big-title">Mixtape</h1>');
      $('#select-preview').append(liedjesData);
      $('#select-preview').append('<p><a href="#" id="submitbutton" class="my-btn my-btn-w special-font">Volgende stap  &raquo;</a></p>');
      $('#submitbutton').click(submitStap1);

        //html5 sessionstorage om liedjesnamen in op te slaan, spaart requests uit op stap2.
        if(sessionStorage){
          sessionStorage.liedjesData = liedjesData;
        }
    }
    else{
      alert("Je kan niet meer dan 15 nummers selecteren.");
    }
  }
}

//Submit mag niet gebeuren zolang er geen data in idArray zit.
function submitStap1(){
  if(sessionStorage.idArray){
    //Array uit string halen.
    var idArray = JSON.parse(sessionStorage.idArray);
    console.log("chosen numbers: " + idArray);
    //Redirect naar succes.html, de volgende pagina.
    window.location = "succes.html";
  }
}

//TinySort Plugin
function azSort(){
  $('#song-form > div').tsort('',{attr:'id'});
  console.log("azSort");
}

//TinySort Plugin
function zaSort(){
  $('#song-form > div').tsort('',{order:'desc',attr:'id'});
  console.log("zaSort");
}

//Zoek functie om zoektermen in te geven in de zoekbalk.
function zoek(){
  $('#zoekbalk').keyup(function(){
    var searchItem = $(this).val();
    $('#song-form div').hide();
    $('#song-form div:containsNC("'+searchItem+'")').show();
  });
}

//Toont de geselecteerde liedjes in de #select-preview div.
function showMixtapeSelection(){
  $('#select-preview').html('<h1 class="special-font big-title">Mixtape</h1>');
  $('#select-preview').append(sessionStorage.liedjesData);
}

/* $(document).ready(...);
=========================================================*/
$(document).ready(function(){

  //Call the functions per step
  var title = $("title").text();

  //Bij step1.html:
  if(title.indexOf("1") != -1){
    console.log("step1");
    getAllSongIds(18);
    $('#song-form').change(displayVals);
    $('#sort-az').click(azSort);
    $('#sort-za').click(zaSort);
    zoek();
  }

  else if(title.indexOf("Succes") != -1){
    console.log("step succes");
    getYoutubeIDs();
    showMixtapeSelection();
  }

  //Bij step2.html:
  else if(title.indexOf("2") != -1){
    console.log("step2");
    getYoutubeIDs();
    showMixtapeSelection();
    $("#mixtape-link").attr("href",sessionStorage.youtubeIDs);
    $("#youtube-link").attr("href",sessionStorage.youtubeIDs);
  } 

  //Bij step3.html:
  else if(title.indexOf("3") != -1){ 
    console.log("step3");
    showMixtapeSelection();

    //Facebook
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '573772579411776',
        xfbml      : true,
        version    : 'v2.0'
      });
    };

    (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];

     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "http://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    //Twitter
    $('#twitter-id')
    .attr("href","https://twitter.com/share?text=" + 
    encodeURIComponent("Check out the mixtape I made!") + 
    "&url=" + 
    encodeURIComponent(sessionStorage.youtubeIDs));
    $("#fb-id").click(shareOnFacebook);
    }
});