import React, { useEffect, useState, useRef } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import Channel from './pages/Channel'
import Loading from './components/Loading'
import Home from './pages/Home'
import Submit from './components/Submit'
import Navbar from './components/Navbar'

const {
  REACT_APP_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MESSAGING_SENDER_ID,
  REACT_APP_APP_ID,
  REACT_APP_MEASUREMENT_ID,
} = process.env

firebase.initializeApp({
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
  measurementId: REACT_APP_MEASUREMENT_ID
})

const auth = firebase.auth()
const db = firebase.firestore()

function App() {
  const [user, setUser] = useState(() => auth.currentUser)
  const [initializing, setInitializing] = useState(true)
  const [text, setText] = useState("")

  const channelScrollref = useRef()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user)
      }
      else setUser(null)
      if (initializing) {
        setInitializing(false)
      }
    })
    return unsubscribe

  }, [])

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()

    auth.useDeviceLanguage()

    try {
      await auth.signInWithPopup(provider)
    }
    catch (error) {
      console.log(error)
    }
  }

  const signOut = async () => {
    try {
      await firebase.auth().signOut()
    }
    catch (error) {
      console.log(error.message)
    }
  }

  const sendMessage = async (e) => {
    e.preventDefault()
    const messagesRef = db.collection('messages');

    try {
      setText('')
      channelScrollref.current.scrollIntoView({ behavior: 'smooth' })
      await messagesRef.add({
        text: text,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        username: auth.currentUser.displayName,
        photoURL: auth.currentUser.photoURL,
      })

    }
    catch (error) {
      return <h1>{error.message}</h1>
    }
  }

  if (initializing) return <Loading />

  return (

    <div>
      {user ? (
        <div>
          <Navbar signout={signOut} />
          <Channel rf={channelScrollref} db={db} />
          <Submit text={text} setText={setText} submit={sendMessage} />
        </div>
      ) : (
        <Home signin={signInWithGoogle} />
      )}
    </div>
  )
}

export default App