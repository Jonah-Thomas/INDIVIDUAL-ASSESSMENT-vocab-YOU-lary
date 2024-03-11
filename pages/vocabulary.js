import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocabCards = () => {
  const domString = '<h1>No Vocabulary</h1>';
  renderToDOM('#store', domString);
};

const showVocabCards = (array) => {
  clearDom();
  console.warn('Array', array);
  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-vocabulary-btn">Add A Vocabulary Card</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card">
        <div class="card-body" style="width: 18rem">
          <h5 class="card-title">${item.title}</h5>
            <h6 class="card-subtitle mb-2  text-muted card-text bold">${item.definition}</h6>
            <hr>
            <i id="edit-vocabulary-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-vocabulary--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>
    `;
  });
  renderToDOM('#store', domString);
};
/*
<div class="card">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.definition}</p>
          <i id="edit-vocabulary-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
          <i id="delete-vocabulary-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
      </div>
  </div> */
export { emptyVocabCards, showVocabCards };
