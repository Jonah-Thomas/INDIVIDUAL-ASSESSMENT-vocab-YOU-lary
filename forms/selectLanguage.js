import { getLanguage } from '../api/languageData';
import renderToDOM from '../utils/renderToDom';

const selectLanguage = (uid, languageId) => {
  let domString = `<label for="author">Select an Language</label>
    <select class="form-control" id="language_id" required>
    <option value="">Select an Language</option>`;
  getLanguage(uid).then((languageArray) => {
    languageArray.forEach((language) => {
      domString += `
          <option
            value="${language.uid}"
            ${languageId === language.uid ? 'selected' : ''}>
              ${language.title}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-language', domString);
  });
};

export default selectLanguage;
