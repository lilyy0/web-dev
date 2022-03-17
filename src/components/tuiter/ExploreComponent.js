import PostSummaryList from "./PostSummaryList/index";

const ExploreComponent = () => {
    return(
        <div className="col-lg-6 col-md-7 col-8">
            <div className="row pb-2">
                <div className="col-11"><input type="text" className="form-control rounded-pill mt-1 b-1"
                        placeholder="Search Tuitter" /></div>
                <div className="col-1"><i className="fa fa-gear fa-2x text-primary pt-1 pb-1"></i></div>
            </div>
            <nav className="nav nav-tabs nav-justified flex-row">
                <a className="nav-link active" href="#">For You</a>
                <a className="nav-link" href="#">Trending</a>
                <a className="nav-link" href="#">News</a>
                <a className="nav-link" href="#">Sports</a>
                <a className="nav-link d-none d-md-flex" href="#">Entertainment</a>
            </nav>
            <div className="card">
                <img src="./images/spacex_starship.jpeg" className="card-img w-100  pt-1" />
                <div className="card-img-overlay text-white font-weight-bold fa-2x d-flex align-items-end">
                    <p className="card-text">SpaceX's Starship</p>
                </div>
            </div>
           <PostSummaryList/>
        </div>);
}
export default ExploreComponent;
