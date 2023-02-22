// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
if (typeof window !== 'undefined') {
  // browser code
  const analytics = getAnalytics(app);
  console.log(analytics);
}

export default function FirebasePage() {
  return <div>Firebase</div>;
}
