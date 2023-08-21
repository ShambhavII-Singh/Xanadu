import { useState } from "react";
import { useGetIdentity } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
import { FieldValues } from "react-hook-form";
import { Form } from "components";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/material";

const CreateProperty = () => {
    const isMobile = useMediaQuery('(max-width: 900px)');
    const { data: user } = useGetIdentity({
        v3LegacyAuthProviderCompatible: true,
    });
    const [propertyImage, setPropertyImage] = useState({ name: "", url: "" });
    const {
        refineCore: { onFinish, formLoading },
        register,
        handleSubmit,
    } = useForm();

    const handleImageChange = (file: File) => {
        // const reader = (readFile: File) =>
        //     new Promise<string>((resolve, reject) => {
        //         const fileReader = new FileReader();
        //         fileReader.onload = () => resolve(fileReader.result as string);
        //         fileReader.readAsDataURL(readFile);
        //     });

        // reader(file).then((result: string) =>
        //     setPropertyImage({ name: file?.name, url: result }),
        // );
    };

    const onFinishHandler = async (data: FieldValues) => {
        // if (!propertyImage.name) return alert("Please select an image");

        // await onFinish({
        //     ...data,
        //     photo: propertyImage.url,
        //     email: user.email,
        // });
    };

    return (
        <Box sx={{paddingLeft: isMobile ? "61px" : 0}}>
            <Form 
                type="Create"
                register={register}
                onFinish={onFinish}
                formLoading={formLoading}
                handleSubmit={handleSubmit}
                handleImageChange={handleImageChange}
                onFinishHandler={onFinishHandler}
                propertyImage={propertyImage}
            />
        </Box>
    );
};
export default CreateProperty;