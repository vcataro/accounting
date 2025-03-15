import React from 'react'
import { Company } from '../../models/Company'
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

interface CompanyBasicProps {
    companyData: Company;
    onInputChange: (name: keyof FormData, value: string | number) => void;
}
const CompanyBasic: React.FC<CompanyBasicProps> = ({ companyData, onInputChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const parsedValue = name === 'age' ? Number(value) : value; // Convert age to a number
        onInputChange(name as keyof FormData, parsedValue); // Trigger parent's event handler
      };
    return (
        <FormControl >
            <InputLabel sx={{ fontSize: "18px" }} htmlFor="my-input">Company Name</InputLabel>
            <Input sx={{ fontSize: '16px' }}
                id="companyname"
                name='companyname'
                value={companyData?.name}
                onChange={handleChange}
                aria-describedby="my-helper-text"
            />
            <FormHelperText id="my-helper-text">Company Name</FormHelperText>
        </FormControl>
    )
}

export default CompanyBasic
