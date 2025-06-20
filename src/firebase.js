import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA81-UIIrp-xqK3RRGmg-f6_tu3wRXMU74",
  authDomain: "rivalsweb-8a1a6.firebaseapp.com",
  projectId: "rivalsweb-8a1a6",
  storageBucket: "rivalsweb-8a1a6.firebasestorage.app",
  messagingSenderId: "1030502653650",
  appId: "1:1030502653650:web:917dd9cd98a6880251170b",
  measurementId: "G-J3YZFF1S6H"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);