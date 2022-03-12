import './Post.scss'

export const Post = (props) => {
    return (
        <div className='posts__container'>
            <div className='post__img'></div>
            <div className='post__text'><span className="author__text">{props.name}</span>{props.message}</div>
        </div>
    )
}