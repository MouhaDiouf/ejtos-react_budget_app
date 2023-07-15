import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
    const { budget, dispatch, state, currency, remaining } = useContext(AppContext);
    function handleChange(e) {
        if (Number(e.target.value < remaining)) return alert("You cannot reduce the budget lower than the spending");
        if (Number(e.target.value > 20000)) return;
        dispatch({
            type: "SET_BUDGET",
            payload: Number(e.target.value),
        });
    }

    return (
        <div className="alert alert-secondary">
            <span>
                Budget: {currency}
                <input type="number" step="10" value={budget} min={remaining} onChange={handleChange} />
            </span>
        </div>
    );
};
export default Budget;
