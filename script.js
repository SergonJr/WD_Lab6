$(".results").on("click", ".video", function(e) {
  e.preventDefault();

  if (e.target.id === "title")
  {
    window.open('https://www.codexworld.com', '_blank');
  }
});

$("#youtubeForm").on("submit", function(e)
{
  e.preventDefault();

  let keyword = $("#kwordID").val();

  let APIKEY = "AIzaSyDixNeUJuqAl7ik_yTZHDIfvXNFrGqVhlA";

  let APIurl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${keyword}&type=video&maxResults=11&key=${APIKEY}`;

  $.ajax({
    url: APIurl,
    method: "GET",
    datatype: "json",
    success: function(responseJSON){
      for (let i = 0; i <= 10; i++)
      {
        $(".results").append(`<div class="video"><h3 id="title" onClick="openVideo({${responseJSON.items[i].id.videoId})">${responseJSON.items[i].snippet.title}</h3><img class="image" src=${responseJSON.items[i].snippet.thumbnails.default.url} /></div>`);        
      }    
    }
  })
});
