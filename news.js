function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
return parent.appendChild(el);
}

const ul = document.getElementById('musicNews');
const url = 'https://newsapi.org/v2/everything?q=indie music&totalResults=5&apiKey=b5a4b9174edb4b998e3f1ef1aed3452d';
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
let musicNews = data.articles;
return musicNews.map(function(music) {
  let li = createNode('li'),
      title = createNode('h4');
      content = createNode('p');
      urlArticle = createNode('a');
  title.innerHTML = `${music.title} - ${music.author}`;
  content.innerHTML = `${music.content}`;
  urlArticle.innerHTML = `${music.url}`;
  append(li, title);
  append(li, content);
  append(li, urlArticle);
  append(ul, li);
})
})
.catch(function(error) {
console.log(error);
});