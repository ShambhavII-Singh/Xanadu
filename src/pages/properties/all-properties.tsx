import React from 'react';
import { Stack, Box, Typography, TextField, MenuItem, Select } from '@mui/material';
import { Add } from '@mui/icons-material';
import { CustomButton } from 'components';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTable } from '@refinedev/core';
import { PropertyCard } from '../../components';

const AllProperties = () => {
    const {tableQueryResult: {
        data, isLoading, isError
    }} = useTable();
    const allProperties = data?.data ?? []; 
    const navigateTo = useNavigate();
    const isMobile = useMediaQuery('(max-width: 900px)');
    console.log(localStorage);

    if (isLoading) {return (<Typography fontSize={18} fontWeight={700} sx={{color: "primary.dark"}}>Loading...</Typography>)}
    if (isError) {return (<Typography fontSize={18} fontWeight={700} sx={{color: "primary.dark"}}>Error...</Typography>)}
    return (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, paddingLeft: isMobile ? "66px" : "5px" }}>
                <Stack direction="row" width="100%" alignItems={"center"} justifyContent={"space-between"}>
                    <Typography fontSize={25} fontWeight={700} sx={{color: "primary.dark"}}>
                        {!allProperties.length
                            ? "There are no properties"
                            : "All Properties"}
                    </Typography>
                    <CustomButton
                        title= "Add Property"
                        handleClick={() => navigateTo("properties/create-property")}
                        backgroundColor="#38b000"
                        color="#ffffff"
                        icon={ <Add /> }
                    />
                </Stack>
                <Box mb={2} mt={3} display="flex" justifyContent="flex-end" flexWrap="wrap">
                    <Stack direction={"row"}>
                        
                    </Stack>
                </Box>
                    <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-around"}}>
                    {allProperties?.map((property) => (
                        <PropertyCard
                            key={property._id}
                            id={property._id}
                            title={property.title}
                            location={property.location}
                            price={property.price}
                            photo={property.photo}
                        />
                    ))}
                </Box>
            </Box>
    )
}

export default AllProperties