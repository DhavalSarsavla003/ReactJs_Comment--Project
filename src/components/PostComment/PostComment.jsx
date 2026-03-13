import image from "../../assets/images/profileLogo.png";
import image2 from "../../assets/images/sec-person-img.avif";
import instagramBg from '../../assets/images/instragram-bg.jpg'
import { useState } from 'react';
import "../../App.css";

const PostComment = () => {

    const [openComment, setOpenComment] = useState(false);

    const commentToggle = () => {
        setOpenComment(!openComment);
    }

    const [comment, setComment] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleComment = (e) => {
        setComment(e.target.value);
        if (errorMsg) {
            setErrorMsg('');
        }
    }

    const [comments, setComments] = useState([]);
    const [count, setCount] = useState(false);
    const [follow,setFollow] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!comment.trim()) {
            setErrorMsg("Comment Is Require.");
            return;
        }
        
        if(comment.trim().length > 80){
            setErrorMsg("Comment is too long! Keep it under 80 characters.");
            return;
        }

        const newComment = {
            text: comment,
            timestamp: Date.now() 
        };

        setComments([...comments, newComment]);
        setComment("");
        setErrorMsg('');
    }

    const handleCount = () => {
        setCount(!count);
    }

    const handleFollow = () =>{
        setFollow(!follow);
    }

    const getRelativeTime = (timestamp) => {
        const seconds = Math.floor((Date.now() - timestamp) / 1000);
        
        if (seconds < 60) return 'Just now';
        
        const minutes = Math.floor(seconds / 60);
        
        if (minutes < 60) return `${minutes}m`;
        
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `${hours}h`;
        
        const days = Math.floor(hours / 24);
        return `${days}d`;
    }

    return (
        <>
            <div className="container vh-100 overflow-hidden py-3">
                <div className="row justify-content-center h-100">
                    <div className="col-4 border rounded p-3 bg-body-secondary d-flex flex-column h-100">
                        <div className="d-flex flex-wrap align-items-start flex-shrink-0">
                            <div className="logo">
                                <div className="circle rounded-circle bg-secondary" style={{ width: "50px", height: "50px" }}>
                                    <img src={image} alt="1" />
                                </div>
                            </div>
                            <div className="title mx-2">
                                <h4 className="mb-0">Name </h4>
                                <p>Dvs.04</p>
                            </div>
                        </div>
                        <div className="post-area bg-body-tertiary rounded p-3 shadow-sm border mt-3 flex-shrink-0">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <div className="d-flex align-items-center">
                                    <div className="logo">
                                        <div className="circle rounded-circle bg-secondary" style={{ width: "50px", height: "50px", overflow: "hidden" }}>
                                            <img src={image2} alt="1" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                        </div>
                                    </div>
                                    <div className="title mx-2 text-start">
                                        <h4 className="mb-0">Name </h4>
                                        <p className="mb-0 text-muted" style={{ fontSize: "0.9rem" }}>Jenish</p>
                                    </div>
                                </div>
                                <button className="btn btn-primary btn-sm rounded-pill px-3 fw-medium shadow-sm" onClick={handleFollow}>{follow ? 'Followed':'Follow'}</button>
                            </div>
                            <div className="post-media bg-secondary bg-opacity-25 rounded mb-3 d-flex align-items-center justify-content-center" style={{ minHeight: "200px", overflow: "hidden" }}>
                                <img src={instagramBg} alt="" style={{ width: "100%", height: "100%" }} />
                            </div>
                            <div className="post-actions d-flex justify-content-between border-top pt-2">
                                <button type="button" onClick={handleCount} className="btn btn-light flex-fill mx-1 fw-medium text-secondary hover-bg-light">
                                    {count ? <i className="bi bi-hand-thumbs-up-fill"></i> : <i className="bi bi-hand-thumbs-up"></i>} {count ? 1 : 0}
                                </button>
                                <button type="button" className="btn btn-light flex-fill mx-1 fw-medium text-secondary hover-bg-light" onClick={commentToggle}>
                                    <i className="bi bi-chat-dots"></i> Comment
                                </button>
                                <button type="button" className="btn btn-light flex-fill mx-1 fw-medium text-secondary hover-bg-light">
                                    <i className="bi bi-share"></i> Share
                                </button>
                            </div>
                        </div>

                        {openComment && (
                            <div className="comment-section mt-3 pt-3 border-top flex-shrink-0">
                                <div className="d-flex align-items-center">
                                    <div className="circle rounded-circle flex-shrink-0 mx-1 shadow-sm" style={{ width: "36px", height: "36px", overflow: "hidden" }}>
                                        <img src={image} alt="User" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    </div>
                                    <div className="position-relative flex-grow-1 ms-2">
                                        <form onSubmit={handleSubmit}>
                                            <input
                                                type="text"
                                                className="form-control rounded-pill py-2 pe-5 bg-light border-0 shadow-sm"
                                                placeholder="Add a comment..."
                                                value={comment}
                                                name="comment"
                                                onChange={(e) => handleComment(e)}
                                                style={{ fontSize: "0.9rem" }}
                                            />
                                            <button
                                                type="submit"
                                                className="btn position-absolute top-50 end-0 translate-middle-y rounded-circle d-flex align-items-center justify-content-center p-0 me-1"
                                                
                                                style={{
                                                    width: "32px",
                                                    height: "32px",
                                                    background: "linear-gradient(45deg, #0d6efd, #0dcaf0)",
                                                    color: "white",
                                                    border: "none",
                                                    boxShadow: "0 2px 4px rgba(13, 110, 253, 0.3)"
                                                }}
                                            >
                                                <i className="bi bi-send-fill" style={{ fontSize: "0.9rem", marginLeft: "-2px" }}></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                {errorMsg && (
                                    <div className="text-danger mt-1 fw-medium" style={{ fontSize: "0.8rem", animation: "fadeIn 0.3s ease", marginLeft: "52px" }}>
                                        <i className="bi bi-exclamation-circle me-1"></i>
                                        {errorMsg}
                                    </div>
                                )}
                            </div>
                        )}

                        {comments.length > 0 && (
                            <div className="comments-list  bg-light p-2 rounded-2 mt-3 pt-3 border-top custom-scrollbar pe-2 flex-grow-1" style={{ overflowY: "auto", overflowX: "hidden", minHeight: 0 }}>
                                {comments.map((commentObj, index) => {
                                    return (
                                        <div key={index} className="d-flex align-items-start mb-3">
                                            <div className="circle rounded-circle flex-shrink-0 mx-1 shadow-sm mt-1" style={{ width: "32px", height: "32px", overflow: "hidden" }}>
                                                <img src={image} alt="User" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                            </div>
                                            <div className="ms-2 w-auto">
                                                <div className="bg-light form-control rounded-4 px-3 py-2 shadow-sm d-inline-block" style={{ borderTopLeftRadius: "4px" }}>
                                                    <h6 className="mb-1" style={{ fontSize: "0.85rem", fontWeight: "600" }}>Dvs.004</h6>
                                                    <p className="mb-0 text-dark text-break" style={{ fontSize: "0.9rem", whiteSpace: "pre-wrap" }}>{commentObj.text}</p>
                                                </div>
                                                <div className="d-flex ms-2 mt-1 gap-3">
                                                    <span className="text-muted" style={{ fontSize: "0.75rem", cursor: "pointer", fontWeight: "500" }}>Like</span>
                                                    <span className="text-muted" style={{ fontSize: "0.75rem", cursor: "pointer", fontWeight: "500" }}>Reply</span>
                                                    <span className="ms-auto fw-medium text-muted" style={{fontSize: "0.7rem", color: '#94a3b8'}}>{getRelativeTime(commentObj.timestamp)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostComment;
