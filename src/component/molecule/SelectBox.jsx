import React from "react";

/**
 * @param options: {id, name}[]
 * @param title: string
 * @param onChange: () => {}
 * @returns
 */

const SelectBox = ({ options, onChange }) => {
    return (
        <>
            <form>
                <Select options={options} initValue={options[0]} onChange={onChange} />
            </form>
        </>
    );
};

const Select = ({ options, onChange }) => {
    return (
        <select initValue={options[0]} onChange={onChange} style={{ fontFamily: "nexon-regular" }}>
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