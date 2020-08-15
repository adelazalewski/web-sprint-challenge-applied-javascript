// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const header = document.createElement('div');
    const span = document.createElement('span');
    const title = document.createElement('h1');
    const span2 = document.createElement('span');

    header.classList.add('header');
    span.classList.add('date');
    span.textContent = 'MARCH 28, 2020';
    span2.classList.add('temp');
    span2.textContent = '98°';
    title.textContent = 'Lambda Times';

    header.appendChild(span);
    header.appendChild(title);
    header.appendChild(span2);
    return header;
};
const header = Header();
const entryPoint = document.querySelector('.header-container');
entryPoint.appendChild(header);