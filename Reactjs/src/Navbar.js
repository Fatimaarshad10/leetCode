import { Link } from "react-router-dom"
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from "firebase/auth"
import { auth } from "./config/firebase"
function Navbar() {
    const [user] = useAuthState(auth)

    const signOutUser = async () => {
        await signOut(auth)

    }
    return (
        <>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <div>
                <p>{user?.displayName}</p>
                <img
                    src={user?.photoURL}
                    alt="User Photo"
                    referrerPolicy="no-referrer"
                />
                <button onClick={signOutUser}>Sign Out</button>
            </div>
        </>
    )
}
export default Navbar