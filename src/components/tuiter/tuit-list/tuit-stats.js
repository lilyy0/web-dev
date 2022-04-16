import React from "react";
import { useDispatch } from "react-redux";
import { updateTuit } from '../actions/tuits-actions'

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();
    return (<div className="row mt-2">
        <div className="col">
            <i className="far fa-comment me-2"></i>
            {tuit.comments}
        </div>
        <div className="col">
            <i className="fas fa-retuit me-2"></i>
            {tuit.retuits}
        </div>
        <div className="col" onClick={() => updateTuit(dispatch, {
            ...tuit,
            likes: tuit.likes + 1
        })}>
            <i className="fas fa-heart me-2"
                style={{ color: tuit.liked ? 'red' : "white" }}></i>

            {tuit.likes}
        </div>
        <div className="col">
            <i className="fas fa-external-link-alt me-2"></i>
        </div>
    </div>)
}

export default TuitStats;