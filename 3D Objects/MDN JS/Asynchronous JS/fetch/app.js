// const episodes = fetch("https://api.tvmaze.com/shows/2");
// console.log(episodes);

// episodes
//     .then((response) => {
//         console.log("PASSED", response);
//         return response.json();
//     })
//     .then((res) => {
//         console.log("Series: " + res.name.toUpperCase());
//         return fetch("https://api.tvmaze.com/shows/2/episodes");
//     })
//     .then((res) => {
//         console.log("Passed Step-2");
//         return res.json();
//     })
//     .then((res) => {
//         console.log("TOTAL EPISODES: " + res.length);
//         console.log("Episode 1: " + res[0].name);
//         return fetch("https://api.tvmaze.com/shows/2993/episodes");
//     })
//     .then((response) => {
//         return response.json();
//     })
//     .then((res) => {
//         console.log("TOTAL EPISODES: " + res.length);
//         console.log("Episode 1: " + res[0].name);
//     })
//     .catch((e) => {
//         console.log("ERROR", e);
//     });

// METHOD-2 => Using async-await
// const movieAPI = async (id) => {
//     try {
//         let request = await fetch(`https://api.tvmaze.com/shows/${id}`);
//         let seriesName = await request.json();
//         console.log("SERIES: " + seriesName.name);
//         let reqEpisodes = await fetch(
//             `https://api.tvmaze.com/shows/${id}/episodes`
//         );
//         let reqJson = await reqEpisodes.json();
//         console.log("TOTAL EPISODES: " + reqJson.length);
//         console.log("EPISODE-1: " + reqJson[0].name);
//     } catch (e) {
//         console.log("Error: " + e);
//     }
// };

// movieAPI(2);
// movieAPI(2993);

// METHOD-3 => Using axios
// Advantage of using axios => do not need to use .json() to get json data. It is already available by .data
const getMovies = async (id) => {
    try {
        const movie = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        console.log("MOVIE NAME: " + movie.data.name);
        const episodes = await axios.get(
            `https://api.tvmaze.com/shows/${id}/episodes`
        );
        console.log("Total Episodes: " + episodes.data.length);
        console.log("Episode-1: " + episodes.data[0].name);
        return episodes.data;
    } catch (e) {
        console.log(e);
    }
};

const seriesName = document.querySelector(".series_name");
const ol = document.querySelector("ol");
const btn = document.querySelector("button");
const search = document.querySelector("#series");

btn.addEventListener("click", async () => {
    try {
        if (document.querySelector("img") !== null) {
            document.querySelector("img").remove();
        }
        searchValue = search.value.split(" ").join("%20");
        let series = await axios.get(
            `https://api.tvmaze.com/search/shows?q=${searchValue}`
        );
        let id = series.data[0].show.id;
        let img = series.data[0].show.image.medium;
        let imgx = document.createElement("img");
        imgx.setAttribute("src", img);
        imgx.setAttribute("alt", series.data[0].show.name);
        seriesName.insertAdjacentElement("afterend", imgx);
        seriesName.innerHTML = series.data[0].show.name;
        ol.innerHTML = "";
        let episodes = await getMovies(id);
        for (let episode of episodes) {
            let li = document.createElement("li");
            li.innerText = episode.name;
            ol.appendChild(li);
        }
        search.value = "";
        search.focus();
    } catch (e) {
        ol.innerHTML = "";
        seriesName.innerHTML = "Try again, wrong input!!";
    }
});
// getMovies(2993);

// Setting headers
const dadJokes = async () => {
    const config = { headers: { Accept: "application/json" } };
    const apiCall = await axios.get("https://icanhazdadjoke.com/", config);
    console.log(apiCall);
    console.log(apiCall.data);
    console.log(apiCall.data.joke);
};
