import React, { useState } from "react";
import { useDispatch } from "react-redux";

// see: https://github.com/jannunzi/web-dev/blob/master/src/components/a7/Build/WhatsHappening/index.js
const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({
            type: 'create-tuit',
            tuit: whatsHappening
        });
    }

    return (
        <table style={{ width: "100%" }}>
            <tr>
                <td style={{ verticalAlign: 'top' }}>
                    <img src={'./images/react_icon.png'}
                        className="rounded-circle"
                        style={{ width: '48px', margin: '16px' }} />
                </td>
                <td style={{ width: "100%" }}>
                    <textarea value={whatsHappening}
                        onChange={(event) => setWhatsHappening(event.target.value)}
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
    );
}
export default WhatsHappening;