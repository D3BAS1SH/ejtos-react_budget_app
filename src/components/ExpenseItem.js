import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch,curSelect } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const buttonStyle={
        color:'#000000',
        margin:'20px',
        borderRadius:'10px',
        backgroundColor:'#009944',
        minHeight:'40px',minWidth:'40px'
        
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td><span>{curSelect}</span>{props.cost}</td>
        <td><button style={{...buttonStyle,color:'white'}} onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button style={{...buttonStyle,backgroundColor:'#990044',color:'white'}} onClick={event=> decreaseAllocation(props.name)}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
