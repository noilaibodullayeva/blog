import "./singlepost.css"
import Img5 from "./post.jpg"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src={Img5} alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Safak</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam commodi dolores consequuntur laboriosam similique
                    minus accusamus. Deleniti dolore doloremque molestias, non
                    fuga nemo, illo facere quibusdam quas praesentium rerum aspernatur.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam commodi dolores consequuntur laboriosam similique
                    minus accusamus. Deleniti dolore doloremque molestias, non
                    fuga nemo, illo facere quibusdam quas praesentium rerum aspernatur.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam commodi dolores consequuntur laboriosam similique
                    minus accusamus. Deleniti dolore doloremque molestias, non
                    fuga nemo, illo facere quibusdam quas praesentium rerum aspernatur.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam commodi dolores consequuntur laboriosam similique
                    minus accusamus. Deleniti dolore doloremque molestias, non
                    fuga nemo, illo facere quibusdam quas praesentium rerum aspernatur.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam commodi dolores consequuntur laboriosam similique
                    minus accusamus. Deleniti dolore doloremque molestias, non
                    fuga nemo, illo facere quibusdam quas praesentium rerum aspernatur.
                </p>
            </div>
        </div>
    )
}