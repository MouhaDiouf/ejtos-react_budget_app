import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function ExpenseTotal() {
    const { totalExpenses, currency } = useContext(AppContext);
    return (
        <div className="alert alert-primary">
            <span>
                Spent so far: {currency}
                <span>{totalExpenses}</span>
            </span>
        </div>
    );
}

export default ExpenseTotal;
