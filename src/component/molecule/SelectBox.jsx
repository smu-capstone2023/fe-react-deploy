import React from "react";

/**
 * @param options: {id, name}[]
 * @param onChange: () => {}
 * @param fontSize: string
 * @returns
 */

const SelectBox = ({ options, onChange, fontSize }) => {
    return (
        <>
            <form>
                <Select options={options} initValue={options[0]} onChange={onChange} fontSize={fontSize} />
            </form>
        </>
    );
};

const Select = ({ options, onChange, fontSize}) => {
    return (
        <select initValue={options[0]} onChange={onChange} style={{ fontFamily: "nexon-regular", fontSize:`${fontSize}` }}>
            {options &&
                options.map((option) => {
                    return (
                        <option value={option.id} style={{ fontSize: "1em", fontFamily: "nexon-regular" }} key={option.id}>
                            {option.name}
                        </option>
                    );
                })}
        </select>
    );
};

export default SelectBox;