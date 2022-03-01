const ListItem = (who) => {
    return (`
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <div class="col-2 image-parent">
                <img class="img-fluid img-circle rounded-circle w-100 h-100" src="${who.avatarIcon}" />
            </div>
            <div class="col-6">
                <b class="font-weight-bold">${who.userName} <i class="fa fa-check-circle"></i></b><span
                    class="text-secondary"> - 2h</span>
                <br />
                <div>@${who.handle}</div>
            </div>
            <a href="#" class="btn rounded-pill btn-primary text-white">Follow</a>
        </li>`);
}
export default ListItem;

