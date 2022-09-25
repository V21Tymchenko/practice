export default function createMurkUp({
  urlToImage,
  title,
  author,
  description,
}) {
  return `<div>
  <img src="${urlToImage}" alt="" width="480">
    <h2>${title}</h2>
    <p>${author}</p>
     <p>${description}</p>
    </div>`;
}
