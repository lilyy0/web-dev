import { React, useEffect, useState } from "react";
import TuitListItem
    from "./tuit-list-item";
import { useDispatch, useSelector } from "react-redux"; import './tuits.css';
import { createTuit, findAllTuits }
    from "../actions/tuits-actions";

const TuitList = () => {
    const tuits = useSelector(
        state => state.tuits);
    const dispatch = useDispatch();
    useEffect(() =>
        findAllTuits(dispatch),
        []);
    const [newTuit, setNewTuit] =
        useState({
            tuit: 'New tuit', 
            topic: 'Miscellaneous', 
            postedBy: { 'username': 'user123' }, 
            handle: 'user123', 
            comment: 123,
            retuits: 234,
            likes: 345
        });


    return (
        <ul className="ttr-tuits list-group">
                    <table style={{ width: "100%" }}>
            <tr>
                <td style={{ verticalAlign: 'top' }}>
                    <img src={'./images/react_icon.png'}
                        className="rounded-circle"
                        style={{ width: '48px', margin: '16px' }} />
                </td>
                <td style={{ width: "100%" }}>
                    <textarea 
                        onChange={(e) =>
                            setNewTuit({
                                ...newTuit,
                                tuit: e.target.value
                            })}
                        className="form-control"
                        style={{
                            width: "100%", color: "white",
                            padding: "0px",
                            paddingTop: "15px",
                            backgroundColor: "black"
                        }}
                        placeholder="What's happening?"></textarea>
                    <hr />
                </td>
                
            </tr>
            
        </table>

        <button onClick={() =>
                createTuit(dispatch, newTuit)}
                className="btn btn-primary float-end">
                Tuit
            </button>
            {
                tuits.map && tuits.map(tuit =>
                    <><TuitListItem key={tuit._id}
                        tuit={tuit} />
                    </>)
            }
        </ul>
    );
}

export default TuitList;