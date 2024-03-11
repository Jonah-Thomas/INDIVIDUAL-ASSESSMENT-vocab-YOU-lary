import { getVocabCards } from '../api/vocabularyData';
import logoutButton from '../components/logoutButton';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
// import navigationEvents from '../events/navigationEvents';
import { showVocabCards } from '../pages/vocabulary';
import domBuilder from '../shared/domBuilder';
import navBar from '../shared/navBar';

const startApp = (uid) => {
  domBuilder(); // BUILD THE STRUCTURE OF THE DOM
  domEvents(uid); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(uid); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(uid); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // Put all Vocabulary Cards on the DOM on App load
  getVocabCards(uid).then(showVocabCards);
};

export default startApp;
