import { Link } from "react-router-dom"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { storageDelet } from "../../utils/storage"
import { useUser } from "../../context/UserContext"

const ProfileActions = () => {

    const { setUser } = useUser()

    const handeleLogoutClick = () => {
        storageDelet(STORAGE_KEY_USER)
        setUser(null)
    }

    return (
        <ul>
            <li><button>Clear history</button></li>
            <li><button onClick={ handeleLogoutClick }>Logout</button></li>
        </ul>
    )
}

export default ProfileActions