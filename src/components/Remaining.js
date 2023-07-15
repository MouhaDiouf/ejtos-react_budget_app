import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Remaining() {
    const { remaining, currency } = useContext(AppContext);
    return (
        <div className="alert alert-success">
            <span>
                Remaining: {currency}
                <span>{remaining}</span>
            </span>
        </div>
    );
}

export default Remaining;
