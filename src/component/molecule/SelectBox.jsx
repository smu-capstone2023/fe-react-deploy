import React from "react";

/**
 * @param options: {id, name}[]
 * @param title: string
 * @param onChange: () => {}
 * @returns
 */

const SelectBox = ({options, title, onChange}) => {


    return(
        <>
            <form>
                <Select options={options} defaultValue={title} onChange={onChange} />
            </form>
        </>
    )
}

const Select =({options, defaultValue, onChange}) => {
    return(
        <select defaultValue={defaultValue} onChange={onChange} style={{fontFamily:'nexon-regular'}}>
            {options && options.map((option) => {
                return(
                    <option
                        style={{fontSize:'1em',fontFamily:'nexon-regular' }}
                        key={option.id} 
                        value={option.name}
                    >
                        {option.name}
                    </option>
                )
            })}
        </select>
    )
}

export default SelectBox;





