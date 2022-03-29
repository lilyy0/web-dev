import ListItem from "./ListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
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