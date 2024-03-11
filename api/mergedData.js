// for merged promises

import { deleteSingleLanguage, getLanguageVocabulary, getSingleLanguage } from './languageData';
import { deleteVocabularyCard, getSingleVocabularyCard } from './vocabularyData';

// TODO: Get data for viewBook
const getVocabularyDetails = (firebaseKey) => new Promise((resolve, reject) => {
  // GET SINGLE BOOK
  getSingleVocabularyCard(firebaseKey).then((VocabObject) => { // returns single book object
    console.warn('Book Object', VocabObject);
    getSingleLanguage(VocabObject.author_id) // we nest this promise so that we can use the book object
      .then((languageObject) => resolve({ ...VocabObject, languageObject }));
  }).catch(reject);
});

// GET AUTHOR
// Create an object that has book data and an object named authorObject
const getLanguageDetails = async (languagefirebaseKey) => {
  const languageObject = await getSingleLanguage(languagefirebaseKey);
  const languageVocabulary = await getLanguageVocabulary(languagefirebaseKey);

  return { ...languageObject, books: languageVocabulary };
};

const deleteAuthorBooksRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getLanguageVocabulary(firebaseKey).then((languageVocabularyArray) => {
    const deleteVocabularyPromises = languageVocabularyArray.map((vocabulary) => deleteVocabularyCard(vocabulary.firebaseKey));

    Promise.all(deleteVocabularyPromises).then(() => {
      deleteSingleLanguage(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

export { deleteAuthorBooksRelationship, getLanguageDetails, getVocabularyDetails };
