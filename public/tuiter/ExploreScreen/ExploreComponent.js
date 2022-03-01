import PostSummaryList from "./PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="col-lg-6 col-md-7 col-8">
            <div class="row pb-2">
                <div class="col-11"><input type="text" class="form-control rounded-pill mt-1 b-1"
                        placeholder="Search Tuitter" /></div>
                <div class="col-1"><i class="fa fa-gear fa-2x text-primary pt-1 pb-1"></i></div>
            </div>
            <nav class="nav nav-tabs nav-justified flex-row">
                <a class="nav-link active" href="#">For You</a>
                <a class="nav-link" href="#">Trending</a>
                <a class="nav-link" href="#">News</a>
                <a class="nav-link" href="#">Sports</a>
                <a class="nav-link d-none d-md-flex" href="#">Entertainment</a>
            </nav>
            <div class="card">
                <img src="../images/spacex_starship.jpeg" class="card-img w-100  pt-1" />
                <div class="card-img-overlay text-white font-weight-bold fa-2x d-flex align-items-end">
                    <p class="card-text">SpaceX's Starship</p>
                </div>
            </div>
           ${PostSummaryList()}
        </div>`);
}
export default ExploreComponent;
