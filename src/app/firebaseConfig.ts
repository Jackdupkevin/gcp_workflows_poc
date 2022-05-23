import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"
import "firebase/database"
import "firebase/analytics"

firebase.initializeApp({
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTH_DOMAIN,
	projectId: process.env.PROCJECT_ID,
	storageBucket: process.env.STORAGE_BUCKET,
	messagingSenderId: process.env.MESSAGING_ID,
	appId: process.env.APP_ID,
	measurementId: process.env.MEASUREMENT_ID,
	databaseURL: process.env.DATABASE_URL,
})

export const analytics = firebase.analytics()
export const db = firebase.firestore()
export const timestamp = firebase.firestore.Timestamp
