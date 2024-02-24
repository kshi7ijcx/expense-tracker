import { useState } from "react"
import { account, ID } from "../lib/appwrite";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleRegister = async () => {
        try{
            setLoading(true);
            setError(null); //in case of retry after error is encountered
            await account.create(ID.unique(), email, password, name);
            await account.createEmailPasswordSession(email, password);
            navigate("/expense-tracker");
        }
        catch(err) {
            setError(err.message);
        }finally{
            setLoading(false);
        }
    }

    return (
        <div className='flex justify-center items-center w-screen h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-montserrat'>
            <div className='flex flex-col items-center gap-y-8 w-max p-10 rounded-3xl backdrop-blur-3xl bg-white/50 shadow-2xl'>
                <div>
                    <h1 className='text-4xl font-medium max-sm:text-2xl box drop-shadow-xl'>Expense Tracker</h1>
                </div>
                <div>
                    <div className='flex flex-col'>
                        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className='border-none rounded-2xl py-1 px-4 mb-4 shadow-xl' />
                        <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className='border-none rounded-2xl py-1 px-4 mb-4 shadow-xl' />
                        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className='border-none ring-1 rounded-2xl py-1 px-4 mb-8 shadow-xl' />
                        <div className="flex flex-col gap-5 items-center">
                            <button className='bg-gradient-to-br hover:ring-2 rounded-2xl px-4 py-1 font-medium shadow-xl '>Login</button>
                            <button onClick={handleRegister} className='bg-white/75 rounded-2xl px-4 py-1 hover:ring-2 font-medium shadow-xl'>{loading?('...'):('Register')}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login