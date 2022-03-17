const PostSummaryItem = ({
    post = {
        "topic": "Web Development",
        "userName": "ReactJS",
        "time": "2h",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        "image": "../../../images/react-blue.png"
    }
}) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="col-10">
                <span className="text-secondary">{post.topic}</span>
                {post.topic && <br/>}
                <b className="font-weight-bold">{post.userName} <i className="fa fa-check-circle"></i></b><span
                    className="text-secondary">- {post.time}</span>
                {post.title && <br/>}
                <b className="font-weight-bold">{post.title}</b>
            </div>
            <div className="image-parent">
                <img className="img-fluid rounded" src={post.image} />
            </div>
        </li>);
}
export default PostSummaryItem;