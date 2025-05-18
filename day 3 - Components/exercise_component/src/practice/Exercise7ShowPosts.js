import React from "react";
import PostList from "./Exercise7Child";

function ShowPosts() {
    const ListOfPost = [
        {title: "Bài 1", date: "17/5/2025", excerpt: "Nội dung bài 1.."},
        {title: "Bài 2", date: "18/5/2025", excerpt: "Nội dung bài 2.."},
        {title: "Bài 3", date: "19/5/2025", excerpt: "Nội dung bài 3.."}
    ]

    return(
        <div>
        <h1>Danh sách các post</h1>
        <PostList posts={ListOfPost}/>
        </div>
    )
}

export default ShowPosts;