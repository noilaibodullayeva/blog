import "./settings.css"
import Sidebar from "../../Components/Sidebar/Sidebar"
import Img8 from "./pp.jpg"

export default function Settings () {
    return(
        <div className="setting">
            <div className="settingWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your account</span>
                    <span className="settingsDeleteTitle">Delete account</span>
                </div>
                <form className="settingsForm">
                    <label >Profile Picture</label>
                    <div className="settingsPP">
                        <img src={Img8} alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:'none'}} />
                    </div>
                    <label >Username</label>
                    <input type="text" placeholder="Safak" />
                    <label >Email</label>
                    <input type="email" placeholder="ibodullayevanoila@gmail.com" />
                    <label >Password</label>
                    <input type="password"  />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}