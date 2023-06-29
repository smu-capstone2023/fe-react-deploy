import React, { useRef } from "react";
import uuid from "react-uuid";
import styled from "styled-components";
import { Select } from '@chakra-ui/react'
/**
 * @param options: {id, name}[]
 * @param onChange: () => {}
 * @param initValue: number
 * @returns
 */

const SelectBox = ({ options, onChange, initValue }) => {
    const selectRef = useRef(null);
    return (
        
        <Select
            variant='unstyled' 
            size='md'
            ref={selectRef}
            key={uuid()}
            defaultValue={initValue}
            onChange={() => onChange(selectRef.current.value)}
            style={{ fontFamily: "nexon-regular", cursor: "pointer" }}
        >
            {options &&
                options.map((option) => {
                    return (
                        <option value={option.major_id
                        } style={{ fontFamily: "nexon-regular" }} key={option.major_id}
                        >
                            {option.major_name}
                        </option>
                    );
                })}
    </Select>
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
