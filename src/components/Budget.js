
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,curSelect } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if(event.target.value>20000){
            alert("Budget Should not Exceed 20000");
            return;
        }

        setNewBudget(event.target.value);

    }
    return (
<div className='alert alert-secondary'>
<span>Budget: <spand>{curSelect}</spand> </span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;