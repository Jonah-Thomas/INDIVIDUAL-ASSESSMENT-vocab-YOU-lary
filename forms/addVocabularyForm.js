import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import selectLanguage from './selectLanguage';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addVocabularyForm = (uid, obj = {}) => {
  clearDom();
  console.warn('vocabulary Obj', obj);
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocabulary--${obj.firebaseKey}` : 'submit-vocabulary'}" class="mb-4">
      <div class="form-group">
        <label for="title">Vocabulary Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="VocabularyTitle" placeholder="Enter Vocabulary Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="definition">Definition</label>
        <textarea class="form-control" placeholder="Vocabulary Description" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <div class="form-group" id="select-language">
      </div>
      <button type="submit" class="btn btn-primary">${obj.uid ? 'Update vocabulary' : 'Submit vocabulary'}</button>
    </form>`;

  renderToDOM('#form-container', domString);
  selectLanguage(uid, `${obj.uid || ''}`);
};

export default addVocabularyForm;
