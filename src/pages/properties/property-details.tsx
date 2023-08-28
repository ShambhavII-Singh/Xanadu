import React from 'react'
import { Stack, Box, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetIdentity, useShow, useDelete } from '@refinedev/core';
import ChatBubble from "@mui/icons-material/ChatBubble";
import { Delete, Edit, Phone, Place, Star } from "@mui/icons-material";
import { CustomButton } from 'components';
import useMediaQuery from "@mui/material/useMediaQuery";

function checkImage(url: any) {
  const img = new Image();
  img.src = url;
  return img.width !== 0 && img.height !== 0;
}

const PropertyDetails = () => {
  const isMobile = useMediaQuery('(max-width: 900px)');
  // if (isLoading) {return (<Typography fontSize={18} fontWeight={700} sx={{color: "primary.dark"}}>Loading...</Typography>)}
  // if (isError) {return (<Typography fontSize={18} fontWeight={700} sx={{color: "primary.dark"}}>Error...</Typography>)}

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, paddingLeft: isMobile ? "66px" : "5px" }} flexDirection={"column"}>
      <Typography fontSize={25} fontWeight={700} sx={{color: "primary.dark"}}>Details</Typography>
      <Box
          borderRadius="15px"
          padding="20px"
          sx={{bgcolor: "background.paper"}}
          width="fit-content"
      >
        <Box
            mt="20px"
            display="flex"
            flexDirection={{ xs: "column", lg: "row" }}
            gap={4}
        >
          <Box flex={1} maxWidth={764}>
            <img
              // src={propertyDetails.photo}
              alt="property_details-img"
              height={546}
              style={{ objectFit: "cover", borderRadius: "10px" }}
              className="property_details-img"
          />
            <Box mt="15px">
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    flexWrap="wrap"
                    alignItems="center"
                >
                  <Typography
                      fontSize={18}
                      fontWeight={500}
                      sx={{color: "primary.dark"}}
                      textTransform="capitalize"
                  >
                    {/* {propertyDetails.propertyType} */}
                  </Typography>
                      <Box>
                        {[1, 2, 3, 4, 5].map((item) => (
                            <Star
                                key={`star-${item}`}
                                sx={{ color: "#F2C94C" }}
                            />
                        ))}
                      </Box>
                    </Stack>

                    <Stack
                        direction="row"
                        flexWrap="wrap"
                        justifyContent="space-between"
                        alignItems="center"
                        gap={2}
                    >
                      <Box>
                        <Typography
                            fontSize={22}
                            fontWeight={600}
                            mt="10px"
                            sx={{color: "primary.dark"}}
                        >
                          {/* {propertyDetails.title} */}
                        </Typography>
                        <Stack
                            mt={0.5}
                            direction="row"
                            alignItems="center"
                            gap={0.5}
                        >
                          <Place sx={{color: "text.secondary" }} />
                          <Typography fontSize={14} color="#808191"sx={{color: "text.secondary"}}>
                            {/* {propertyDetails.location} */}
                          </Typography>
                        </Stack>
                      </Box>

                      <Box>
                        <Typography
                            fontSize={16}
                            fontWeight={600}
                            mt="10px"
                            sx={{color: "primary.dark"}}
                        >
                          Price
                        </Typography>
                        <Stack
                            direction="row"
                            alignItems="flex-end"
                            gap={1}
                        >
                          <Typography
                              fontSize={25}
                              fontWeight={700}
                              sx={{color: "primary.main"}}
                          >
                            {/* ${propertyDetails.price} */}
                          </Typography>
                          <Typography
                              fontSize={14}
                              sx={{color: "text.secondary"}}
                              mb={0.5}
                          >
                            for one day
                          </Typography>
                        </Stack>
                      </Box>
                    </Stack>

                    <Stack mt="25px" direction="column" gap="10px">
                      <Typography fontSize={18} sx={{color: "primary.dark"}}>
                          Description
                      </Typography>
                      <Typography fontSize={14} sx={{color: "text.secondary"}}>
                          {/* {propertyDetails.description} */}
                      </Typography>
                    </Stack>
                </Box>
            </Box>

            <Box
                width="100%"
                flex={1}
                maxWidth={326}
                display="flex"
                flexDirection="column"
                gap="20px"
            >
                <Stack
                    width="100%"
                    p={2}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    border="1px solid #E4E4E4"
                    borderRadius={2}
                >
                    <Stack
                        mt={2}
                        justifyContent="center"
                        alignItems="center"
                        textAlign="center"
                    >
                        {/* <img
                            src={
                                checkImage(propertyDetails.creator.avatar)
                                    ? propertyDetails.creator.avatar
                                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                            }
                            alt="avatar"
                            width={90}
                            height={90}
                            style={{
                                borderRadius: "100%",
                                objectFit: "cover",
                            }}
                        /> */}

                        <Box mt="15px">
                            <Typography
                                fontSize={18}
                                fontWeight={600}
                                sx={{color: "primary.dark"}}
                            >
                                {/* {propertyDetails.creator.name} */}
                            </Typography>
                            <Typography
                                mt="5px"
                                fontSize={14}
                                fontWeight={400}
                                sx={{color: "text.secondary"}}
                            >
                                Agent
                            </Typography>
                        </Box>

                        <Stack
                            mt="15px"
                            direction="row"
                            alignItems="center"
                            gap={1}
                        >
                            <Place sx={{color: "text.secondary"}} />
                            <Typography
                                fontSize={14}
                                fontWeight={400}
                                sx={{color: "text.secondary"}}
                            >
                                North Carolina, USA
                            </Typography>
                        </Stack>

                        <Typography
                            mt={1}
                            fontSize={16}
                            fontWeight={600}
                            sx={{color: "primary.dark"}}
                        >
                            {/* {propertyDetails.creator.allProperties.length}{" "} */}
                            Properties
                        </Typography>
                    </Stack>

                    <Stack
                        width="100%"
                        mt="25px"
                        direction="row"
                        flexWrap="wrap"
                        gap={2}
                    >
                        {/* <CustomButton
                            title={!isCurrentUser ? "Message" : "Edit"}
                            backgroundColor="#38b000"
                            color="#ffffff"
                            fullWidth
                            icon={
                                !isCurrentUser ? <ChatBubble /> : <Edit />
                            }
                            handleClick={() => {
                                if (isCurrentUser) {
                                    navigate(
                                        `/properties/edit/${propertyDetails._id}`,
                                    );
                                }
                            }}
                        /> */}
                        {/* <CustomButton
                            title={!isCurrentUser ? "Call" : "Delete"}
                            backgroundColor={
                                !isCurrentUser ? "#2ED480" : "#d42e2e"
                            }
                            color="#FCFCFC"
                            fullWidth
                            icon={!isCurrentUser ? <Phone /> : <Delete />}
                            handleClick={() => {
                                if (isCurrentUser) handleDeleteProperty();
                            }}
                        /> */}
                    </Stack>
                </Stack>

                <Stack>
                    <img
                        src="https://serpmedia.org/scigen/images/googlemaps-nyc-standard.png?crc=3787557525"
                        width="100%"
                        height={306}
                        style={{ borderRadius: 10, objectFit: "cover" }}
                        alt='map'
                    />
                </Stack>

                <Box>
                    <CustomButton
                        title="Book Now"
                        backgroundColor="#38b000"
                        color="#ffffff"
                        fullWidth
                    />
                </Box>
            </Box>
        </Box>
    </Box>
    </Box>
);
};

export default PropertyDetails;
