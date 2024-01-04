import "./sidebar.css"
import Img3 from "./aboutme.jpg"

export default function Sidebar() {
    return (
        <div className="side">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span> <br />
                <img src={Img3} alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates libero magni amet id fugiat possimus.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATAGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarlistitem">Life</li>
                    <li className="sidebarlistitem">Music</li>
                    <li className="sidebarlistitem">Style</li>
                    <li className="sidebarlistitem">Sport</li>
                    <li className="sidebarlistitem">Tech</li>
                    <li className="sidebarlistitem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                </div>
            </div>
        </div>
    )
}