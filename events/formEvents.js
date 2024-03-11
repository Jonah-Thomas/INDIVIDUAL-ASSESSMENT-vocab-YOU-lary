import {
  createVocabularyCard,
  getVocabCards,
  updateVocabularyCard
} from '../api/vocabularyData';
import { showVocabCards } from '../pages/vocabulary';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A VOCABULARY CARD
    const payload = {
      title: document.querySelector('#title').value,
      definition: document.querySelector('#definition').value,
      // author_id: document.querySelector('#author_id').value,
      // sale: document.querySelector('#sale').checked,
      uid
    };

    createVocabularyCard(payload).then(({ name }) => {
      const patchPayload = { firebaseKey: name };

      updateVocabularyCard(patchPayload).then(() => {
        getVocabCards(uid).then(showVocabCards);
      });
    });

    // CLICK EVENT FOR EDITING A VOCABULARY CARD
    if (e.target.id.includes('update-vocabulary')) {
      const [, firebaseKey] = e.target.id.split('--');
      const Payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        // author_id: document.querySelector('#author_id').value,
        // sale: document.querySelector('#sale').checked,
        firebaseKey,
        uid,
      };

      updateVocabularyCard(Payload).then(() => {
        getVocabCards(uid).then(showVocabCards);
      });
    }

  /* // FIXME: ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('submit-author')) {
      const payload = {
        first_name: document.querySelector('#first_name').value,
        last_name: document.querySelector('#last_name').value,
        email: document.querySelector('#email').value,
        uid
      };

      createAuthor(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateAuthor(patchPayload).then(() => {
          getAuthors(uid).then(showAuthors);
        });
      });
    }
    // FIXME:ADD CLICK EVENT FOR EDITING AN AUTHOR
    if (e.target.id.includes('update-author')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        first_name: document.querySelector('#first_name').value,
        last_name: document.querySelector('#last_name').value,
        email: document.querySelector('#email').value,
        firebaseKey,
      };

      updateAuthor(payload).then(() => {
        getAuthors(uid).then(showAuthors);
      });
    } */
  });
};

export default formEvents;
