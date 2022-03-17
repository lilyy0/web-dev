import ListItem from "./ListItem";
import who from "./who";

const WhoToFollowList = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <b className="font-weight-bold text-white">Who to follow</b>
            </li>
            {
                who.map(who => {
                    return (<ListItem who={who} />);
                })
            }
        </ul>
    );
}

export default WhoToFollowList;