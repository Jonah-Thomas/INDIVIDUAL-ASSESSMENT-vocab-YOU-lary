import { getVocabCards, vocabularyLanguages } from '../api/vocabularyData';
import { emptyVocabCards, showVocabCards } from '../pages/vocabulary';
import { signOut } from '../utils/auth';

// navigation events
const navigationEvents = (uid) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // Sort by Languages
  document.querySelector('#Languages').addEventListener('click', () => {
    vocabularyLanguages().then((response) => {
      if (response.length > 0) {
        showVocabCards(response);
      } else {
        emptyVocabCards();
      }
    });
  });

  // TODO: ALL BOOKS
  // here we query select the all books button and apend an add event listener that when clicked will run a promise that getBooks with the param of uid (user ID thats given when signed in) then show books
  document.querySelector('#all-vocabulary').addEventListener('click', () => {
    getVocabCards(uid).then(showVocabCards);
  });

  /* // FIXME: STUDENTS Create an event listener for the Authors
  // 1. When a user clicks the authors link, make a call to firebase to get all authors
  // 2. Convert the response to an array because that is what the makeAuthors function is expecting
  // 3. If the array is empty because there are no authors, make sure to use the emptyAuthor function
  document.querySelector('#authors').addEventListener('click', () => {
    getAuthors(uid).then(showAuthors);
  });

  // STRETCH: SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
      // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
      // OTHERWISE SHOW THE STORE

      document.querySelector('#search').value = '';
    }
  }); */
};

export default navigationEvents;
