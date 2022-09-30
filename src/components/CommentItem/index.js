// import {formatDistanceToNow} from 'date-fns'
// import './index.css'

// const CommentItem = props => {
//   const {commentsList, likeButtonClicked, deleteButton} = props
//   const {id, name, comment, liked} = commentsList

//   const likedImage = liked
//     ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
//     : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

//   const likeButton = () => {
//     likeButtonClicked(id)
//   }

//   const deleteComment = () => {
//     deleteButton(id)
//   }

//   return (
//     <li className="list-elements">
//       <div className="header-section">
//         <p className="profile">S</p>
//         <p className="name">{name}</p>
//         <p className="date">{formatDistanceToNow(new Date())}</p>
//       </div>
//       <p className="comment">{comment}</p>
//       <div className="like-container">
//         <div>
//           <button type="button" onClick={likeButton} className="like-button">
//             <img src={likedImage} alt="like" className="like-images" />
//           </button>
//           <span className="like-content">Like</span>
//         </div>
//         <button type="button" className="like-button" onClick={deleteComment}>
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
//             alt="delete"
//           />
//         </button>
//       </div>
//       <hr />
//     </li>
//   )
// }

// export default CommentItem

import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {id, name, comment, isLiked, initialClassName, date} = commentDetails
  const initial = name ? name[0].toUpperCase() : ''
  const likeTextClassName = isLiked ? 'button active' : 'button'
  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const postedTime = formatDistanceToNow(date)

  const onClickLike = () => {
    const {toggleIsLiked} = props
    toggleIsLiked(id)
  }

  const onDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="username-time-container">
            <p className="username">{name}</p>
            <p className="time">{postedTime} ago</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <img src={likeImageUrl} alt="like" className="like-image" />
          <button
            className={likeTextClassName}
            type="button"
            onClick={onClickLike}
          >
            Like
          </button>
        </div>
        <button
          className="button"
          type="button"
          onClick={onDeleteComment}
          testid="delete"
        >
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}

export default CommentItem
