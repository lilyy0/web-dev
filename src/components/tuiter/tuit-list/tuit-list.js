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
            stats: {
                "comments": 123,
                "retuits": 234,
                "likes": 345
            }
        });


    return (
        <ul className="ttr-tuits list-group">
            <button onClick={() =>
                createTuit(dispatch, newTuit)}
                className="btn btn-primary float-end">
                Tuit
            </button>
            <textarea className="form-control w-75"
                onChange={(e) =>
                    setNewTuit({
                        ...newTuit,
                        tuit: e.target.value
                    })}></textarea>
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