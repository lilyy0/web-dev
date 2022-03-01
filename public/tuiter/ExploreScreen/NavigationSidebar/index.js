const NavigationSidebar = () => {
    return (`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
                    <a href="../explore.html">
                        <li class="list-group-item active"><i class="fa-solid fa-hashtag"></i>
                            <div class="d-none d-xl-inline wd-sidebar-text">Explore</div>
                        </li>
                    </a>
                    <a href="#">
                        <li class="list-group-item"><i class="fa-solid fa-bell"></i>
                            <div class="d-none d-xl-inline wd-sidebar-text">Notifications</div>
                        </li>
                    </a>
                    <a href="#">
                        <li class="list-group-item"><i class="fa-solid fa-envelope"></i>
                            <div class="d-none d-xl-inline wd-sidebar-text">Messages</div>
                        </li>
                    </a>
                    <a href="#">
                        <li class="list-group-item"><i class="fa-solid fa-bookmark"></i>
                            <div class="d-none d-xl-inline wd-sidebar-text">Bookmarks</div>
                        </li>
                    </a>
                    <a href="#">
                        <li class="list-group-item"><i class="fa-solid fa-list"></i>
                            <div class="d-none d-xl-inline wd-sidebar-text">Lists</div>
                        </li>
                    </a>
                    <a href="../profile.html">
                        <li class="list-group-item"><i class="fa-solid fa-user"></i>
                            <div class="d-none d-xl-inline wd-sidebar-text">Profile</div>
                        </li>
                    </a>
                    <a href="../navigation.html">
                        <li class="list-group-item"><i class="fa-solid fa-ellipsis"></i>
                            <div class="d-none d-xl-inline wd-sidebar-text">More</div>
                        </li>
                    </a>
            <!-- continue the rest of the list -->
            </div>
            <div class="d-grid mt-2">
                <a href="../tuit.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
