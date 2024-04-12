const btn = document.querySelector('input[name="btn"]');
const inp = document.querySelector('input[name="user_search"]');
const ullist = document.createElement("ul");

ullist.innerHTML = "";
let search = [];
maxElement = 5;

btn.addEventListener("click", () => {
    search.unshift(inp.value);
    ullist.innerHTML = "";
    if (search.length > maxElement) {
        search.pop();
    }
    document.body.appendChild(ullist);
    for (const item of search) {
        const lst = document.createElement("li");
        lst.textContent = item;
        ullist.appendChild(lst);
    }
    inp.value = "";
    inp.focus();
});
