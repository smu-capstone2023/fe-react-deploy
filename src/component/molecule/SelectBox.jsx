import React, { useRef } from "react";
import uuid from "react-uuid";
import styled from "styled-components";

/**
 * @param options: {id, name}[]
 * @param onChange: () => {}
 * @param fontSize: string
 * @param initValue: number
 * @returns
 */

const SelectBox = ({ options, onChange, initValue }) => {
    return (
        <>
            <form>
                <SelectLayout>
                    <Select options={options} initValue={options[0]} onChange={onChange} init={initValue} />
                </SelectLayout>
            </form>
        </>
    );
};

const Select = ({ options, onChange, init }) => {
    const selectRef = useRef(null);
    return (
        <select
            ref={selectRef}
            key={uuid()}
            defaultValue={init}
            onChange={() => onChange(selectRef.current.value)}
            style={{ fontFamily: "nexon-regular" }}
        >
            {options &&
                options.map((option) => {
                    console.log(option.id);
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
        gap: 0.5rem;
        font-size: 20px;
    }
`;

export default SelectBox;
