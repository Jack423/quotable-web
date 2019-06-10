import { LanguageType } from '../store/reducers/locale/langugeType';

export const environment = {
  firebase: {
    apiKey: "AIzaSyC7tYzNEgScBqWp9HgApxSkj4H6rSixx7c",
    authDomain: "test-f56b4.firebaseapp.com",
    databaseURL: "https://test-f56b4.firebaseio.com",
    projectId: "test-f56b4",
    storageBucket: "test-f56b4.appspot.com",
    messagingSenderId: "677229509148",
    appId: "1:677229509148:web:c44e1e232fb23f0e"
  },
  settings: {
    enabledOAuthLogin: true,
    enabledOffline: true,
    appName: 'Quotable Dev',
    defaultProfileCover: 'https://firebasestorage.googleapis.com/v0/b/quotable-c70b9.appspot.com/o/ic_profile.png?alt=media&token=28e3f4fb-811a-49c7-b2ba-34b6c4f2d1cd',
    defaultLanguage: LanguageType.English
  },
  theme: {
    primaryColor: '#009688',
    secondaryColor: '#D50000'
  }
}
