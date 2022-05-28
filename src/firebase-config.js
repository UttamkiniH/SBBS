import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDFUSjX8B28fIcMv0CyHVUNIw_XVfnundc",
	authDomain: "final-year-project-62b01.firebaseapp.com",
	projectId: "final-year-project-62b01",
	storageBucket: "final-year-project-62b01.appspot.com",
	messagingSenderId: "680281721487",
	appId: "1:680281721487:web:c49f89211636f09fd37efa",
	measurementId: "G-1LC318S2CF",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
