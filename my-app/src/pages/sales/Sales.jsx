import React, { useContext, useEffect, useState } from 'react'
import { salesCardData } from '../../helpers/dummyData'
import { deletePost, getData } from '../../services/API'
import { MyContext } from '../../services/MyContext'
function Sales() {
    const { postsData, setPostsData } = useContext(MyContext)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        handleGetPosts()
    }, [])
    const handleGetPosts = async () => {
        setLoading(true)
        const response = await getData()
        setPostsData(response.data)
        setLoading(false)
    }
    if (loading) {
        return <><h1>Loading...</h1></>
    }

    const handleDeletePost = async (id) => {
        try {
            await deletePost(id);
            setPostsData(postsData.filter((post) => post.id !== id));
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };


    return (
        <>
            {postsData.map((item) => (
                <div>
                    <h2>{item.id}</h2>
                    <h1 style={{ color: 'orange' }}>{item.title}</h1>
                    <p style={{ color: 'blue', borderBottom: '2px solid red' }}>{item.body}</p>
                    <h3 style={{ color: 'red' }} onClick={() => handleDeletePost(item.id)}>Delete Record</h3>
                </div>
            ))}
        </>
    )
}

export default Sales