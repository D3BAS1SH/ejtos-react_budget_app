import React from "react"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const Currency =()=>{
    const {currency,curSelect,dispatch}=useContext(AppContext);

    const onChangeHandler=(e)=>{
        const selectedValue=e.target.value;
        dispatch({type:'CURRENCY_SELECT',payload:selectedValue});
    }

    return(
        <div>
            <select id="SELECT_CUR" value={curSelect} onChange={onChangeHandler}>
                {currency.map((cur)=>{
                    return <option key={cur.code} value={cur.code}>{cur.code} {cur.value}</option>
                })}
            </select>
            {/* <p>SELECTE VALUE : {curSelect}</p> */}
        </div>
    );
}

export default Currency;