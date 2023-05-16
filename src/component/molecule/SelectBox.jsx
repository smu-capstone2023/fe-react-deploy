import React from "react";
import styled from "styled-components";

/**
 * @param options: {id, name}[]
 * @param onChange: () => {}
 * @param fontSize: string
 * @returns
 */

const SelectBox = ({ options, onChange }) => {
    return (
        <>
            <form>
                <SelectLayout>
                    <Select options={options} initValue={options[0]} onChange={onChange} />
                </SelectLayout>
            </form>
        </>
    );
};

const Select = ({ options, onChange }) => {
    return (
        <select initValue={options[0]} onChange={onChange} style={{ fontFamily: "nexon-regular"}}>
            {options &&
                options.map((option) => {
                    return (
                        <option value={option.id} style={{ fontFamily: "nexon-regular" }} key={option.id}>
                            {option.name}
                        </option>
                    );
                })}
        </select>
    );
};

const SelectLayout = styled.div`
    font-size: 28px; 
    
    @media screen and (max-width: 1300px) {
        font-size: 25px;    
    }  

    @media screen and (max-width: 768px) {
        font-size: 22px;    
    }
    
    @media screen and (max-width: 500px) {
        gap: .5rem;
        font-size: 20px;

    }   

`

export default SelectBox;