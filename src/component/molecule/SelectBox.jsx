/** @jsxImportSource @emotion/react */
import { useRef } from "react";
import { css } from "@emotion/react";
import uuid from "react-uuid";
/**
 * @param options: {id, name}[]
 * @param onChange: () => {}
 * @param fontSize: string
 * @param initValue: number
 * @returns
 */

const SelectBox = ({ options, onChange, initValue }) => {
    return (
        <form>
            <Select options={options} initValue={options[0]} onChange={onChange} init={initValue} />
        </form>
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
            css={css`
                font-family: nexon-bold;
                cursor: pointer;
                font-size: 1.1rem;
                outline: none;
                background-color: none;
            `}
        >
            {options &&
                options.map((option) => {
                    return (
                        <option value={option.major_id} style={{ fontFamily: "nexon-regular" }} key={option.major_id}>
                            {option.major_name}
                        </option>
                    );
                })}
        </select>
    );
};

export default SelectBox;
