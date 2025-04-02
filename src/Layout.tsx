import { Outlet } from "react-router-dom";
import { SideNav } from "./shared/SideNav";


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
             
            </div>
            {/* Outlet */}
            <div className="three">
            <Outlet/>
            </div>

        </div>
    )
}