const btn = document.querySelector("button");
const ul = document.createElement("ul");
document.body.appendChild(ul);
const createDadJoke = async () => {
    try {
        const config = { headers: { Accept: "application/json" } };
        const apiCall = await axios.get("https://icanhazdadjoke.com/", config);
        const joke = apiCall.data.joke;
        const li = document.createElement("li");
        li.textContent = joke;
        ul.appendChild(li);
    } catch (e) {
        const li = document.createElement("li");
        li.textContent = "Sorry, your API call was not success: " + e;
        ul.appendChild(li);
    }
};

btn.addEventListener("click", createDadJoke);

const ull = document.querySelector("ul");
ull.addEventListener("click", (e) => {
    ul.removeChild(e.target);
});
