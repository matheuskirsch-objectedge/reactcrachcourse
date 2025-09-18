import Post from './Post';
import classes from './PostsList.module.css';

function PostsList() {
    return (
        <ul className={classes.posts}>
            <Post author= "Matheus" body="React.js is aewsome!"/>
            <Post author="Mellanie" body="Check out the full course, before you think of buying it. But i am sure uou will like it. Thanks!!!"/>
        </ul> 
    )
}

export default PostsList;