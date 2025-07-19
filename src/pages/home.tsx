import {useDispatch, useSelector} from "react-redux"
export const Home = () =>{
    const username = useSelector((state: any) => state.user.value.username)
    return (
        <h1>hello this is home {username}</h1>
    )
}