import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const addLanguageForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-language--${obj.firebaseKey}` : 'submit-language'}" class="mb-4">
      <div class="form-group">
        <label for="image">First Name</label>
        <input type="text" class="form-control" id="first_name" placeholder="First Name" required value="${obj.first_name || ''}">
      </div>
      <div class="form-group">
        <label for="image">Last Name</label>
        <input type="text" class="form-control" id="last_name" placeholder="Last Name" required value="${obj.last_name || ''}">
      </div>
      <div class="form-group">
        <label for="title">Email</label>
        <input type="email" class="form-control" id="email" aria-describedby="Email" placeholder="Enter Email" required value="${obj.email || ''}">
      </div>
      <button type="submit" class="btn btn-primary mt-3">${obj.firebaseKey ? 'Update language' : 'Submit language'}</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addLanguageForm;
