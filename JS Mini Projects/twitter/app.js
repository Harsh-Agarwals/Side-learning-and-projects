const btn = document.querySelector('input[name="btn"]');
const maxLength = 240;
const tweetContent = document.querySelector("textarea");
const para = document.createElement("p");

tweetContent.addEventListener("keyup", () => {
    let userTweet = tweetContent.value;
    para.textContent = `Max length of the tweet is ${maxLength} and you have ${
        maxLength - userTweet.length
    } words left.`;
    document.body.appendChild(para);
    if (userTweet.length > maxLength) {
        btn.disabled = true;
        tweetContent.style.color = "Red";
    } else {
        tweetContent.style.color = "Black";
        btn.disabled = false;
    }
});
