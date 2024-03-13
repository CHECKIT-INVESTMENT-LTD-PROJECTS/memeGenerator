// import logo from "../logo.svg";
import React from 'react';

function Form() {
    return (
        <div className="inputForm">
            <div className="input">
                <label className="FieldLabel">Top text</label>
                <input type="text" id="shutUp" className="input-field" placeholder="Shut Up"/>
            </div>
            <div className="input_right">
                <label className="FieldLabel">Bottom text</label>
                <input type="text" id="takeMyMoney" className="input-field" placeholder="Take my money"/>
            </div>


        </div>

    )
}

export default Form
