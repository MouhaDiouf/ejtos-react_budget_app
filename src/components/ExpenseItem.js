import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FaTimesCircle, FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: "DELETE_ITEM",
            payload: item,
        });
    };

    const handleIncreaseByTen = () => {
        const item = {
            name: props.name,
            cost: 10,
        };
        dispatch({
            type: "ADD_EXPENSE",
            payload: item,
        });
    };

    const handleDecreaseByTen = () => {
        const item = {
            name: props.name,
            cost: 10,
        };
        dispatch({
            type: "RED_EXPENSE",
            payload: item,
        });
    };
    return (
        <tr>
            <td>{props.name}</td>
            <td>
                {currency} {props.allocatedBudget}
            </td>
            <td>
                <FaPlusCircle size="2.2em" color="green" onClick={handleIncreaseByTen}></FaPlusCircle>
            </td>
            <td>
                <FaMinusCircle size="2.2em" color="red" onClick={handleDecreaseByTen}></FaMinusCircle>
            </td>
            <td>
                <FaTimesCircle size="2.2em" color="red" onClick={handleDeleteItem}></FaTimesCircle>
            </td>
        </tr>
    );
};

export default ExpenseItem;
