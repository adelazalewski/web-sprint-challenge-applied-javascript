// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

// data object - articles object - key:value pairs - value is an array of objects

axios
 .get(`https://lambda-times-api.herokuapp.com/articles`)
 .then((res) => {
     console.log('this was successful, here is your data: ', res);
     //console.log(res.data.articles);
     let data = res.data.articles;
     console.log(data);
     let bootstrap = data.bootstrap;
     let javascript = data.javascript;
     let technology = data.technology;
     let jquery = data.jquery;
     let node = data.node;
     console.log(node);
     node.forEach((el) => {
         cardsEntryPoint.appendChild(cardMaker(el));
     });
     javascript.forEach((el) => {
        cardsEntryPoint.appendChild(cardMaker(el));
    });
    bootstrap.forEach((el) => {
        cardsEntryPoint.appendChild(cardMaker(el));
    });
    technology.forEach((el) => {
        cardsEntryPoint.appendChild(cardMaker(el));
    });
    jquery.forEach((el) => {
        cardsEntryPoint.appendChild(cardMaker(el));
    });
     //console.log(data.bootstrap[0].authorName);
     
 })
 .catch((err) => {
     console.log('Your request didnt go through: ', err);
 });


 function cardMaker(object) {
     const divCard = document.createElement('div');
     const headlineDiv = document.createElement('div');
     const authorDiv = document.createElement('div');
     const imgDiv = document.createElement('div');
     const img = document.createElement('img');
     const span = document.createElement('span');

     divCard.classList.add('card');
     headlineDiv.classList.add('headline');
     authorDiv.classList.add('author');
     imgDiv.classList.add('img-container');

     headlineDiv.textContent = object.headline;
     img.src = object.authorPhoto;
     span.textContent = `By ${object.authorName}`;
     divCard.appendChild(headlineDiv);
     divCard.appendChild(authorDiv);
     authorDiv.appendChild(imgDiv);
     imgDiv.appendChild(img);
     authorDiv.appendChild(span);

     divCard.addEventListener('click', (event) => {
        console.log(headlineDiv.textContent = object.headline);
     });
     return divCard;
 };
 const cardsEntryPoint = document.querySelector('.cards-container');