// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCRX7QbYNxB0nx0zrHxu9rN6KaCvpZqNfA',
  authDomain: 'wydarzenix.firebaseapp.com',
  projectId: 'wydarzenix',
  storageBucket: 'wydarzenix.appspot.com',
  messagingSenderId: '49744854554',
  appId: '1:49744854554:web:d3ee939fc60ff21426dba3',
  measurementId: 'G-6WDPBCTN5P',
};

export default function FirebasePage() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getDatabase(app);
  const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

  return <div>FireBase</div>;
}
