import ListItem from "./ListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return(`
        <ul class="list-group>
            <li class="list-group-item">
                <b class="font-weight-bold text-white">Who to follow</b>
            </li>
            ${
                who.map(profile => {
                    return(ListItem(profile));
                }).join('')
            }
        </ul>
    `);
}

export default WhoToFollowList;