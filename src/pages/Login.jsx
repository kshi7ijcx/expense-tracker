import { useState } from "react"
import { account, ID } from "../lib/appwrite.js";

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    async function login(email, password) {
        await account.createEmailSession(email, password);
        setLoggedInUser(await account.get());
        console.log(email,password);
    }

    return (
        <div className='flex justify-center items-center w-full h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-montserrat'>
            <div>
                <div className='flex flex-col items-center gap-y-5 w-max p-10 rounded-3xl backdrop-blur-3xl bg-white/50 shadow-2xl'>
                    <p>
                        {loggedInUser ? `Logged in as ${loggedInUser.name}` : 'Not logged in'}
                    </p>
                    <div>
                        <h1 className='text-4xl font-medium max-sm:text-2xl box drop-shadow-xl'>The Expense Tracker</h1>
                    </div>
                    <div>
                        <form action='' className='flex flex-col'>
                            <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className='border-none ring-1 rounded-2xl py-1 px-4 mb-4 shadow-xl' />
                            <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className='border-none rounded-2xl py-1 px-4 mb-4 shadow-xl' />
                            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className='border-none ring-1 rounded-2xl py-1 px-4 mb-4 shadow-xl' />
                            <div className="flex flex-col gap-5 items-center">
                                <button onClick={() => login(email, password)} className='bg-gradient-to-br hover:ring-2 rounded-2xl px-4 py-1 font-medium shadow-xl '>Login</button>
                                <button onClick={async () => {
                                    await account.create(ID.unique(), email, password, name);
                                    login(email, password);
                                }} className='bg-white/75 rounded-2xl px-4 py-1 hover:ring-2 font-medium shadow-xl'>Register</button>
                            </div>

                            <button
                                type="button"
                                onClick={async () => {
                                    await account.deleteSession('current');
                                    setLoggedInUser(null);
                                }}
                            >
                                Logout
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Login