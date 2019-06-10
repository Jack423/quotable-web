import { LanguageType } from '../store/reducers/locale/langugeType'

export const environment = {
  firebase: {
    apiKey: "AIzaSyB5UzQQwM1GC1ClDO2dE8zaspRephSxDt8",
    authDomain: "quotable-c70b9.firebaseapp.com",
    databaseURL: "https://quotable-c70b9.firebaseio.com",
    projectId: "quotable-c70b9",
    storageBucket: "quotable-c70b9.appspot.com",
    messagingSenderId: "521714104273",
    appId: "1:521714104273:web:53df885502266cc5"
  },
  settings: {
    enabledOAuthLogin: true,
    enabledOffline: true,
    appName: 'Quotable',
    defaultProfileCover: 'https://firebasestorage.googleapis.com/v0/b/open-social-33d92.appspot.com/o/images%2F751145a1-9488-46fd-a97e-04018665a6d3.JPG?alt=media&token=1a1d5e21-5101-450e-9054-ea4a20e06c57',
    defaultLanguage: LanguageType.English
  },
  theme: {
    primaryColor: '#009688',
    secondaryColor: '#D50000'
  }
}
