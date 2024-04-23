import data from './data.js';

const root = document.querySelector('#root')
function createEl(tagName, classN) {
  const el = document.createElement(tagName);
  el.className = classN;
  return el;
}

function main() {
  console.log(data);

  const introEl = createEl('section', 'intro');
  root.append(introEl);

  const header = createEl('h1', 'intro__header');
  header.innerText = 'Visualized and clarifed by AI.'
  introEl.append(header);

  const conatiner = createEl('section', 'conatiner');
  root.append(conatiner);
  
  const titles = Object.keys(data).map(key => data[key].title)
  const images = Object.keys(data).map(key => data[key].image)
  const texts = Object.keys(data).map(key => data[key].text)
  const objLength = Object.keys(data).length;
  
  for (let i = 0; i < objLength; i++) {
    const card = createEl('div', 'card');

    const header = createEl('div', 'card__header');
    header.innerText = titles[i];
    card.append(header)

    const cardBody = createEl('div', 'card__body');
    card.append(cardBody);

    const imgBody = createEl('div', 'card__body_image');
    cardBody.append(imgBody)

    const img = createEl('img', '');
    img.src = images[i];
    cardBody.append(img);

    const textBody = createEl('div', 'card__body__text');
    textBody.innerText = texts[i];
    cardBody.append(textBody);

    conatiner.append(card);
  }

}

main();
