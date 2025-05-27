import { useContext, useState } from 'react';
import { MyContext } from '../services/MyContext';
import {createPost} from '../services/API'
function ProductsForm() {
    const { postsData, setPostsData } = useContext(MyContext)
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleCreatePost = async (e) => {
        try {
            e.preventDefault()
            const newPost = {
                title,
                body,
                id: 101,
                userId: 1,
            };
            console.log('Payload', newPost);
            const response = await createPost(newPost);
            console.log(response);
            setPostsData([response.data,...postsData]);
            setTitle("");
            setBody("");
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };
   

    return (
        <>
            <form onSubmit={handleCreatePost}>
                <h1>API Form</h1>
                <div style={{ margin: '1.5rem' }}>
                    <label htmlFor="title">Title : </label>
                    <input style={{ padding: '0.3em' }} type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div style={{ margin: '1.5rem' }}>
                    <label htmlFor="body1">Body : </label>
                    <input style={{ padding: '0.3em' }} type="text" id="body1" value={body} onChange={(e) => setBody(e.target.value)} />
                </div>
                <button type='submit'>Submit</button>
            </form >
        </>

    )
}

export default ProductsForm;