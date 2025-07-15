import { useState, useEffect } from 'react'
import './App.css'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import Login from './Login'
import UserList from './UserList'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  if (loading) return <div>Loading...</div>

  if (!user) {
    return <Login />
  } else {
    return <UserList user={user} />
  }
}

export default App
