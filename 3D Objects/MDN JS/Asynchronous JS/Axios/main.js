axios
    .get("https://swapi.dev/api/people/1")
    .then((res) => {
        console.log(res);
        console.log(res.data);
    })
    .catch((e) => console.log(e));

const fetchStarWars = async (id) => {
    try {
        const webUrl = `https://swapi.dev/api/people/${id}`;
        const getAPIRequest = await axios.get(webUrl);
        const APIData = getAPIRequest.data;
        console.log(APIData);
    } catch (e) {
        console.log("Error, " + e);
    }
};

fetchStarWars(2);
