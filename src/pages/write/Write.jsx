import "./write.css"
import Img7 from "./write.jpg"

export default function Write() {
    return (
        <div className="write">
             <form className="writeForms">
                <img className="writeImg" src={Img7} alt="" />
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:'none'}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." type='text' className="writeInput writeText"></textarea>
                </div>
                <button className="inputSubmit">Publish</button>
             </form>
        </div>
    )
}