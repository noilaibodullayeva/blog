import "./post.css"
import Img4 from "./post.jpg"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src={Img4} alt="" />
            <div className="postsInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet.</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptate itaque aspernatur aliquid, obcaecati, voluptates incidunt odit quam natus reprehenderit vitae fuga nam iure error beatae illo omnis dolorum repellat!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptate itaque aspernatur aliquid, obcaecati, voluptates incidunt odit quam natus reprehenderit vitae fuga nam iure error beatae illo omnis dolorum repellat!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptate itaque aspernatur aliquid, obcaecati, voluptates incidunt odit quam natus reprehenderit vitae fuga nam iure error beatae illo omnis dolorum repellat!
            </p>
        </div>
    )
}