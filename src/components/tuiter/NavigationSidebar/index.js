import React from "react"

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
    return <>
        <div className="list-group">
            <a className="list-group-item" href="/">
                <i className="fab fa-twitter"></i></a>
            <a href="../explore.html">
                <li className="list-group-item active"><i className="fa-solid fa-hashtag"></i>
                    <div className="d-none d-xl-inline text-success">Explore</div>
                </li>
            </a>
            <a href="#">
                <li className="list-group-item"><i className="fa-solid fa-bell"></i>
                    <div className="d-none d-xl-inline wd-sidebar-text">Notifications</div>
                </li>
            </a>
            <a href="#">
                <li className="list-group-item"><i className="fa-solid fa-envelope"></i>
                    <div className="d-none d-xl-inline wd-sidebar-text">Messages</div>
                </li>
            </a>
            <a href="#">
                <li className="list-group-item"><i className="fa-solid fa-bookmark"></i>
                    <div className="d-none d-xl-inline wd-sidebar-text">Bookmarks</div>
                </li>
            </a>
            <a href="#">
                <li className="list-group-item"><i className="fa-solid fa-list"></i>
                    <div className="d-none d-xl-inline wd-sidebar-text">Lists</div>
                </li>
            </a>
            <a href="../profile.html">
                <li className="list-group-item"><i className="fa-solid fa-user"></i>
                    <div className="d-none d-xl-inline wd-sidebar-text">Profile</div>
                </li>
            </a>
            <a href="../navigation.html">
                <li className="list-group-item"><i className="fa-solid fa-ellipsis"></i>
                    <div className="d-none d-xl-inline wd-sidebar-text">More</div>
                </li>
            </a>
        </div>
        <div className="d-grid mt-2">
            <a href="../tuit.html"
                className="btn btn-primary btn-block rounded-pill">
                Tweet</a>
        </div>
    </>;
};
export default NavigationSidebar;
