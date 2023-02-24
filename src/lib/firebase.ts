import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
const firebaseConfig = {
  apiKey: 'AIzaSyCRX7QbYNxB0nx0zrHxu9rN6KaCvpZqNfA',
  authDomain: 'wydarzenix.firebaseapp.com',
  projectId: 'wydarzenix',
  storageBucket: 'wydarzenix.appspot.com',
  messagingSenderId: '49744854554',
  appId: '1:49744854554:web:d3ee939fc60ff21426dba3',
  measurementId: 'G-6WDPBCTN5P',
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
