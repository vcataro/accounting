import React, { useState, useEffect } from 'react'
import Grid2 from '@mui/material/Grid2';
import { Box, Button, Card, CardActions, CardContent, FormControl, FormHelperText, Input, InputLabel, TextField, Typography } from '@mui/material';
import { Company } from '../../models/Company';
import CompanyBasic from '../../components/Company/CompanyBasic';


const CompanyAdmin: React.FC = () => {
    const [companyData, setCompanyData] = useState<Company | null>(null);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted Data:', companyData);
        alert(`Form submitted successfully: ${JSON.stringify(companyData)}`);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setCompanyData((prevData) => ({
            ...prevData!,
            [name]: name === 'age' ? Number(value) : value,
        }));
    };
    return (
        <Grid2 size={{ xs: 12 }} >
            <Box sx={{
                ml: 38,
                height: "100vh", // Full viewport height
                width: "100vw",
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'center',
                borderStyle: "solid",
                borderBlockWidth: "2px",
                borderBlockColor: "red"
            }}>

                <Card variant="outlined" sx={{
                    width: "60%",

                    maxHeight: 'max-content',
                    position: 'absolute',
                    mx: 'auto',
                    // to make the demo resizable
                    overflow: 'auto',
                    resize: 'horizontal',
                    backgroundColor: "#FFFFE2",
                    boxShadow: 5, // Material-UI shadow level
                    borderRadius: 2 // Rounded corners
                }}>
                    <Typography variant="h4" align='center' padding={2} component={"div"}>Company Setup</Typography>
                    <CardContent >
                        <form onSubmit={handleSubmit}>
                            {/* <CompanyBasic companyData={companyData} onInputChange={handleChange}/> */}
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
                            <CardActions>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    sx={{ marginLeft: 'auto' }}
                                >
                                    Submit
                                </Button>
                            </CardActions>
                        </form>

                    </CardContent>

                </Card>
            </Box>
        </Grid2>
    )
}


export default CompanyAdmin;
