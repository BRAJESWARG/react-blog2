import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrayofBlogs } from "../../ArrayOfBlog/ArrayOfBlog";

const LatestStories = () => {
    const [data] = useContext(ArrayofBlogs)

    const [load, setLoad] = useState(true)

    return (


        <div className='TheLatestContainer'>
            <p className='mainCategory'>Latest Stories</p>
            <hr className='mainCategoryHr' />
            <hr />
            <div className='TheLatestBox'>
                {data.filter((value) => (load ? (value.ID === 3) : (value.ID <= 4)) && (value.Category === "Food" || value.Category === "Fitness" || value.Category === "Hollywood")).map((val) => (
                    <>
                        <Link to={`/article/${val.Category}/${val.ID}`} className='TheLatestStories'>
                            <p className='title'>{val.Title}</p>
                            <p className='body'>{val.Body.substring(0, 200)}...</p>
                            <p className='body'><strong>{val.Category}</strong>/ {val.Date}</p>
                        </Link>
                        <hr className='TheLatestStoriesHr' />
                    </>

                ))}
            </div>
            <hr />
            <div className='btn'>
                <button onClick={() => setLoad(!load)} className='btn'>{(load ? "View More" : "View Less")}</button>
            </div>

        </div>


    );
}


export default LatestStories;