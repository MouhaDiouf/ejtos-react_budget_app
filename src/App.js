import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

//Code to import Budget.js
import Budget from "./components/Budget";

// Add code to import the other components here under

import { AppProvider } from "./context/AppContext";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import Currency from "./components/Currency";
import AllocationForm from "./components/AllocationForm";
const App = () => {
    return (
        <AppProvider>
            <div className="container">
                <h1 className="mt-3">Company's Budget Allocation</h1>
                <div className="row mt-3">
                        {/* Add Budget component here under */}
                    <div className="row">
                        <div className="col">
                            <Budget /> 
                        </div>
                         {/* Add Remaining component here under */} 
                        <div className="col">
                            <Remaining /> 
                        </div>
                        <div className="col">
                            <ExpenseTotal /> 
                        </div>
                        <div className="col">
                            <Currency /> 
                        </div>
                    </div>
                    <ExpenseList /> {/* Add ExpenseItem component here under */} 
                    <div>
                        <h3 className="mb-3">Change Allocation</h3>
                        <AllocationForm />  {/* Add AllocationForm component here under */}
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
