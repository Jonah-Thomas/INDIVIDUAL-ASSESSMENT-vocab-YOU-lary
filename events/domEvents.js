import { getVocabularyDetails } from '../api/mergedData';
import { deleteVocabularyCard, getSingleVocabularyCard, getVocabCards } from '../api/vocabularyData';
import addVocabularyForm from '../forms/addVocabularyForm';
import viewVocabularyCard from '../pages/viewVocabulary';
import { showVocabCards } from '../pages/vocabulary';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-vocabulary')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        // here we are setting a condition that deletes the book after selecting the delete book btn.
        // below we are deconstructing the firebase key and setting it to split the target id that has --
        // once we do this,  we make a promise deleteBook and pass it the param of firebase key.
        // we then run a promise within our then call which is getBooks with a param of uid then showBooks on the dom.
        const [, firebaseKey] = e.target.id.split('--');
        deleteVocabularyCard(firebaseKey).then(() => {
          getVocabCards(uid).then(showVocabCards);
        });
      }
    }

    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    // Here we are setting a condition that states to run the addBookForm that include the param of uid (the user whos signed in), if the user clicks the add-book-btn.
    if (e.target.id.includes('add-vocabulary-btn')) {
      addVocabularyForm(uid);
    }

    // TODO: CLICK EVENT EDITING/UPDATING A BOOK
    // Here we are setting a condition that deconstructs the firebasekey, we then have it run a promise which starts with getSingleBook with a param of firebasekey, then  passing an object that include the  uids associated with the bookObject to get the spectific books
    if (e.target.id.includes('edit-vocabulary-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleVocabularyCard(firebaseKey).then((vocabularyObj) => addVocabularyForm(uid, vocabularyObj));
      // Here we called uid as an additional param to include uid of the obj on the form.
      // getSingleBook(firebaseKey).then(addBookForm); // using the callback method
    }

    // TODO: CLICK EVENT FOR VIEW BOOK DETAILS
    // here we are setting a condition that allows the user to view the book after selecting the view book details button.
    if (e.target.id.includes('view-vocabulary-btn')) {
      // below we are deconstructing the firebase key and setting it to split the target id that has a --
      const [, firebaseKey] = e.target.id.split('--');
      // after, we make a promise that getBookDetails with the param of firebasekey then viewAuthors onto the DOM.
      getVocabularyDetails(firebaseKey).then(viewVocabularyCard);
    }

    /* // CLICK EVENT FOR VIEW AUTHOR DETAILS
    if (e.target.id.includes('view-author-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('authodetails', firebaseKey);
      getAuthorDetails(firebaseKey).then(viewAuthors);
    }

    // FIXME: ADD CLICK EVENT FOR DELETING AN AUTHOR
    if (e.target.id.includes('delete-author-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteAuthorBooksRelationship(firebaseKey).then(() => {
          getAuthors(uid).then(showAuthors);
        });
      }
    }

    // FIXME: ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('add-author-btn')) {
      addAuthorForm();
    }
    // FIXME: ADD CLICK EVENT FOR EDITING AN AUTHOR
    if (e.target.id.includes('update-author')) {
      const [, firebaseKey] = e.target.id.split('--');

      // getSingleAuthor(firebaseKey).then((authorObj) => addAuthorForm(authorObj));
      getSingleAuthor(firebaseKey).then(addAuthorForm); // using the callback method
    } */
  });
};

export default domEvents;
