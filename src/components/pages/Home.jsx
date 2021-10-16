import "./Home.css"
import Header from "../../components/Header/Header"
import Sidebar from "../../components/sidebar/Sidebar"
import Posts from "../../components/Posts/Posts"
export default function Home() {
    return (
        <>
        <Header/>
        <div className='home'>
            <Posts/>
             <Sidebar/>
             
        </div>
        </>
    )
}
