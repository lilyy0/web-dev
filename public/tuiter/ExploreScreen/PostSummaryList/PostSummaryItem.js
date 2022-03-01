const PostSummaryItem = (post) => {
    return (`
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <div class="col-10">
                <span class="text-secondary">${post.topic}</span>
                ${post.topic && '<br/'}
                <b class="font-weight-bold">${post.userName} <i class="fa fa-check-circle"></i></b><span
                    class="text-secondary">- ${post.time}</span>
                ${post.title && '<br/>'}
                <b class="font-weight-bold">${post.title}</b>
            </div>
            <div class="image-parent">
                <img class="img-fluid rounded" src="${post.image}" />
            </div>
        </li>`);
}
export default PostSummaryItem;