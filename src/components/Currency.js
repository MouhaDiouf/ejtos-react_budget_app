import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Currency() {
    const { currency, dispatch } = useContext(AppContext);
    function handleChange(value) {
        dispatch({
            type: "CHG_CURRENCY",
            payload: value,
        });
    }
    return (
        <div class="dropdown w-100">
            <button class="btn btn-secondary dropdown-toggle w-100 p-3" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Currency ({currency})
            </button>
            <div class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#" onClick={() => handleChange("$")}>
                    $ Dollar
                </a>
                <a class="dropdown-item" href="#" onClick={() => handleChange("£")}>
                    £ Pound
                </a>
                <a class="dropdown-item" href="#" onClick={() => handleChange("€")}>
                    € Euro
                </a>
                <a class="dropdown-item" href="#" onClick={() => handleChange("₹")}>
                    ₹ Rupee
                </a>
            </div>
        </div>
    );
}

export default Currency;
