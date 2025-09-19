import { useState } from 'react';
import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';

function PostsList() {
    const [enteredBody, SetEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');


        function bodyChangeHandler(event) {
            SetEnteredBody(event.target.value);
        }   
    
        function authorChangeHandler(event) {
            setEnteredAuthor(event.target.value);
        }   

    return (
        <>
        <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
        <ul className={classes.posts}>
            <Post author= {enteredAuthor} body={enteredBody}/>
            <Post author="Mellanie" body="Check out the full course!"/>
        </ul> 
        </>
    )
}

export default PostsList;