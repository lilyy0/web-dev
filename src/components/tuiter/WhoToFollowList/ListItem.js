const ListItem = (
    {
        who = {
            avatarIcon: '../../../images/nasa.png',
            userName: 'NASA',
            handle: 'NASA',
        }
    }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="col-2 image-parent">
                <img className="img-fluid img-circle rounded-circle w-100 h-100" src={who.avatarIcon} />
            </div>
            <div className="col-6">
                <b className="font-weight-bold">{who.userName} <i className="fa fa-check-circle"></i></b><span
                    className="text-secondary"> - 2h</span>
                <br />
                <div>@{who.handle}</div>
            </div>
            <a href="#" className="btn rounded-pill btn-primary text-white">Follow</a>
        </li>);
}
export default ListItem;
