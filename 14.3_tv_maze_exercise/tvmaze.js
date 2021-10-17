/** Given a query string, return array of matching shows:
 *     { id, name, summary, episodesUrl }
 */


/** Search Shows
 *    - given a search term, search for tv shows that
 *      match that query.  The function is async show it
 *       will be returning a promise.
 *
 *   - Returns an array of objects. Each object should include
 *     following show information:
 *    {
        id: <show id>,
        name: <show name>,
        summary: <show summary>,
        image: <an image from the show data, or a default imege if no image exists, (image isn't needed until later)>
      }
 */
async function searchShows(query) {
  // TODO: Make an ajax request to the searchShows api.  Remove
  // hard coded data.
  
  let response = await axios.get("http://api.tvmaze.com/search/shows", {
    params: {
      q: query,
    }
  });
  
  // Loop through response data and pull out formatted data
  let data = response.data;
  let shows = [];
  
  for (let current of data) {
    // Create a new show object 
    let currentShow = {
      id: current.show.id,
      name: current.show.name,
      summary: current.show.summary,
      image: current.show.image.medium,
    }
    
    // Add current show to shows array 
    shows.push(currentShow);
  }

  return shows;
}



/** Populate shows list:
 *     - given list of shows, add shows to DOM
 */

function populateShows(shows) {
  const $showsList = $("#shows-list");
  $showsList.empty();

  for (let show of shows) {
    let image = show.image == undefined ? "" : show.image;
    let $item = $(
      `<div class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
         <div class="card" data-show-id="${show.id}">
           <div class="card-body">
             <img class="card-img-top" src="${show.image}"/>
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.summary}</p>
             <button id="${show.id}-button" data-showId="${show.id}" class="card-button">Episodes</button>
           </div>
         </div>
       </div>
      `);

    $showsList.append($item);
  }
}


/** Handle search form submission:
 *    - hide episodes area
 *    - get list of matching shows and show in shows list
 */

$("#search-form").on("submit", async function handleSearch (evt) {
  evt.preventDefault();

  let query = $("#search-query").val();
  if (!query) return;

  $("#episodes-area").hide();

  let shows = await searchShows(query);

  populateShows(shows);
  
  // Add Episodes Button Event Handler 
  $(".card-button").on("click", async function handleEpisodes (e) {
    
    // Get show Id 
    let showId = e.target.dataset.showid;
    
    // Get Episode Information 
    let episodes = await getEpisodes(showId);
  
    // Populate episodes area 
    populateEpisodes(episodes);
    
    
  });
});


/** Given a show ID, return list of episodes:
 *      { id, name, season, number }
 */

async function getEpisodes(id) {
  // TODO: get episodes from tvmaze
  //       you can get this by making GET request to
  //       http://api.tvmaze.com/shows/SHOW-ID-HERE/episodes
  let response = await axios(`http://api.tvmaze.com/shows/${id}/episodes`);
  
  // TODO: return array-of-episode-info, as described in docstring above
  let data = response.data;
  let episodes = [];
  
  // Add episodes to episodes array 
  for (let episode of data) {
    
    // Create episode object 
    let currentEpisode = {
      id: episode.id,
      name: episode.name,
      season: episode.season,
      number: episode.number
    }
    
    // Add episode object to episodes array 
    episodes.push(currentEpisode);
    
  }
  
  // Return episodes 
  return episodes;
  
}


function populateEpisodes(episodes) {
  // Get episodes List DOM element 
  const $episodesList = $("#episodes-list");
  $episodesList.empty(); 
  
  // Add each episode to episodes list 
  for (let episode of episodes) {
    let $episode = $( `<li>${episode.name} - (Season ${episode.season}, Number ${episode.number})</li>` );
    
    $episodesList.append($episode);
  }
  
  // Show episodes area 
  const $episodesArea = $("#episodes-area");
  $episodesArea.css("display", "block");
}



