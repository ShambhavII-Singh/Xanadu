import React from 'react';
import { Stack, Box, Typography, TextField, MenuItem, Select } from '@mui/material';
import { Add } from '@mui/icons-material';
import { CustomButton } from 'components';
import { useNavigate } from 'react-router-dom';


const AllProperties = () => {
    const navigateTo = useNavigate();
    return (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                <Stack direction="row" width="100%" alignItems={"center"} justifyContent={"space-between"}>
                    <Typography fontSize={25} fontWeight={700} sx={{color: "primary.dark"}}>
                        All Properties
                        {/* {!allProperties.length
                            ? "There are no properties"
                            : "All Properties"} */}
                    </Typography>
                    <CustomButton
                        title= "Add Property"
                        // {`Sort price ${
                        //     currentPrice === "asc" ? "↑" : "↓"
                        // }`}
                        handleClick={() => navigateTo("properties/create-property")}
                        backgroundColor="#38b000"
                        color="#ffffff"
                        icon={ <Add /> }
                    />
                </Stack>
            </Box>
    )
}

export default AllProperties