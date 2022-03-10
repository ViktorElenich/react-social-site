import './Post.scss'

export const Post = (props) => {
    return (
        <div>Post
            <div className='post__img'></div>
            <div className='post__text'>{props.message}</div>
        </div>
    )
}