import { Outlet } from "react-router-dom";
import { SideNav } from "./shared/SideNav";
import { Header } from "./shared/Header";


export default function Layout(){

    return(
        // <Outlet/>
        <div className="displaygrid">
            {/* sidenav */}
            <div className="one">
                <SideNav/>
            </div>
            {/* Header */}
            <div className="second">
             <Header/>
            </div>
            {/* Outlet */}
            <div className="three">
            <Outlet/>
            </div>

        </div>
    )
}