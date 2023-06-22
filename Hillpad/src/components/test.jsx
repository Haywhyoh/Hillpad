import { AiOutlineSearch } from "react-icons/ai"
import { useSelector } from "react-redux"
export default function SearchBar() {
    const user = useSelector(state => state.user.userInfo)
    console.log(user)
    return (
        <div>
            <div>{user.email}</div>
        </div>
    )
}

