import { useEffect, useState } from "react"
import { account } from '../lib/appwrite.js'
import { useNavigate } from "react-router-dom";

const ExpenseTracker = () => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    account.get().then((res) => {
      setUser(res);
    }).catch(err => console.log(err))
      .finally(setLoading(false))
  }, []);

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-blue-500 to-pink-500">
      {
        loading ?
          (
            <h1>Data Loading</h1>
          ) : (
            user ? (
              <h1>{user.email}</h1>
            ) : (
              <h1>Create Account</h1>
            )
          )
      }
    </div>
  )
}
export default ExpenseTracker