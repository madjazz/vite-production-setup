const newParagraph = document.createElement('p');
const newParagraphContent = document.createTextNode(
  'This is a paragraph added by the script for testing'
);
newParagraph.appendChild(newParagraphContent);

document.body.appendChild(newParagraph)
