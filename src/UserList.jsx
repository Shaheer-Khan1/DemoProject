import { useState, useEffect } from 'react'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { getAuth, signOut } from 'firebase/auth'
import { db } from './firebase'

// This component shows a list of users and lets you add a new user
function UserList({ user }) {
  // Store the list of users
  const [users, setUsers] = useState([])
  // Store the value of the input box
  const [newUser, setNewUser] = useState('')
  const auth = getAuth()

  // This runs once when the component loads
  useEffect(() => {
    // Get all users from Firestore
    async function fetchUsers() {
      const usersCollection = collection(db, 'users')
      const usersSnapshot = await getDocs(usersCollection)
      // Map the documents to an array of user objects
      const usersList = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setUsers(usersList)
    }
    fetchUsers()
  }, [])

  // This function runs when the form is submitted
  async function handleAddUser(e) {
    e.preventDefault()
    if (newUser.trim() === '') return // Don't add empty names
    // Add a new user to Firestore (only store the name)
    await addDoc(collection(db, 'users'), {
      name: newUser
    })
    setNewUser('') // Clear the input box
    // Fetch the updated list of users
    const usersCollection = collection(db, 'users')
    const usersSnapshot = await getDocs(usersCollection)
    const usersList = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    setUsers(usersList)
  }

  // This function logs the user out
  function handleLogout() {
    signOut(auth)
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <h2>User List</h2>
      {/* Form to add a new user */}
      <form onSubmit={handleAddUser}>
        <input
          value={newUser}
          onChange={e => setNewUser(e.target.value)}
          placeholder="Enter user name"
        />
        <button type="submit">Add User</button>
      </form>
      {/* Show the list of users */}
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserList 