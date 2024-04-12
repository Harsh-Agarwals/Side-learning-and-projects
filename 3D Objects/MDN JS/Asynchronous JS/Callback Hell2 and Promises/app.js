// const websiteEnter = (url, success, failure) => {
//     const timeDelay = Math.floor(Math.random() * 4501) + 500;
//     setTimeout(() => {
//         if (timeDelay > 4000) {
//             failure("Ohh, Timed Out :(");
//         } else {
//             success(`Here is your ${url}`);
//         }
//     }, timeDelay);
// };

// websiteEnter(
//     "books.com",
//     (success) => {
//         console.log("IT WORKED!!!");
//         console.log(success);
//         websiteEnter(
//             "books.com/page-1",
//             (success) => {
//                 console.log("IT WORKED AGAIN!!!");
//                 console.log(success);
//                 websiteEnter(
//                     "books.com/page-2",
//                     (success) => {
//                         console.log("IT WORKED AGAIN 3rd TIME!!!");
//                         console.log(success);
//                     },
//                     (err) => {
//                         console.log("TIMED OUT AT STEP-3!");
//                         console.log(err);
//                     }
//                 );
//             },
//             (err) => {
//                 console.log("TIMED OUT AT STEP-2!");
//                 console.log(err);
//             }
//         );
//     },
//     (err) => {
//         console.log("TIMED OUT!!");
//         console.log(err);
//     }
// );

const websiteEnter2 = (url) => {
    return new Promise((success, failure) => {
        let delay = Math.floor(Math.random() * 4501) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                failure("OH, ERROR!!");
            } else {
                success("SUCCESS with " + url);
            }
        }, delay);
    });
};

// Method-1
// websiteEnter2("yelp.com/api/book")
//     .then(() => {
//         console.log("PROMISE SUCCESS!!!");
//         websiteEnter2("yelp.com/api/chapter-1")
//             .then(() => {
//                 console.log("PROMISE SUCCESS CH-1");
//                 websiteEnter2("yelp.com/api/chapter-2")
//                     .then(() => {
//                         console.log("PROMISE SUCCESS CH-2");
//                     })
//                     .catch((error) => {
//                         console.error("Error-2: " + error);
//                     });
//             })
//             .catch((error) => {
//                 console.error("Error-1: " + error);
//             });
//     })
//     .catch((error) => {
//         console.error("Error: " + error);
//     });

// Method-2
// websiteEnter2("yelp.com/api/book")
//     .then((data) => {
//         console.log("PROMISE SUCCESS - BOOK");
//         console.log(data);
//         return websiteEnter2("yelp.com/api/book/chapter-1");
//     })
//     .then((data) => {
//         console.log("PROMISE SUCCESS - CH-1");
//         console.log(data);
//         return websiteEnter2("yelp.com/api.book/chapter-2");
//     })
//     .then((data) => {
//         console.log("PROMISE SUCCESS - CH-2");
//         console.log(data);
//     })
//     .catch((err) => {
//         console.error("OOPS! AN ERROR OCCURED!!");
//         console.log(err);
//     });

// MAKING NEW PROMISES
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        let rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve("Done with it, SUCCESSFULLY!! " + url);
            }
            reject("Rejected!");
        }, 1000);
    });
};

fakeRequest("/abc/books")
    .then((data) => {
        console.log("data: " + data);
        console.log("SUCCESS");
    })
    .catch((err) => {
        console.error(err);
    });

async function fakeRequest2() {
    let data1 = await fakeRequest("/abc/books");
    console.log(data1);
}

// handling rejections
async function fakeRequest3() {
    try {
        let d1 = await fakeRequest("/abc/books/chapter1");
        console.log(d1);
        let d2 = await fakeRequest("/abc/books/chapter2");
        console.log(d2);
    } catch (e) {
        console.log("Caught error");
        console.log("Error is: " + e);
    }
}
