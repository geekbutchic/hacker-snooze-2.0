const body = document.querySelector("body");
const heading = document.createElement("div");
heading.className = "heading-parent";
const title = document.createElement("div");
heading.id = "heading-title";
title.innerHTML = "Hacker News";

body.appendChild(heading);
heading.appendChild(title);

const parent = document.querySelector("div");
parent.className = "parent";

body.appendChild(parent);

const URL =
  "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";

fetch(URL)
  .then((res) => res.json())
  .then((json) => {
    for (const story of json) {
      const URL1 = `https://hacker-news.firebaseio.com/v0/item/${story}.json?print=pretty`;
      fetch(URL1)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          //const comments = `https://news.ycombinator.com/item?id=30947153`
          const childTitle = document.createElement("a");
          const parent1 = document.createElement("div");
          const childPoints = document.createElement("div");
          const childAuthor = document.createElement("a");
          const childTime = document.createElement("a");
          const childComments = document.createElement("a");
          childTitle.className = "child-title";
          parent1.className = "sub-heading";
          childPoints.id = "points";
          childAuthor.id = "author";
          childTime.id = "time";
          childComments.id = "comments";
          parent.appendChild(childTitle);
          parent.appendChild(parent1);
          parent1.appendChild(childPoints);
          parent1.appendChild(childAuthor);
          parent1.appendChild(childTime);
          parent1.appendChild(childComments);
          //SETS TITLE & URL
          childTitle.innerHTML = data.title;
          childTitle.href = data.url;
          childTitle.target = `-blank` //OPENS IN NEW WINDOW;
          //SETS SCORE & AUTHOR
          childPoints.innerHTML = `${data.score} points by ${data.by}`;
          //SETS DATE & TIME
          childTime.innerHTML = data.time;
          //SETS COMMENTS
          childComments.innerText = `${data.descendants} comments`;
          childComments.href = data.kids
        })
        .catch((error) => console.log(error));
    }
  });
