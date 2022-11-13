import { Box, Heading } from "@chakra-ui/react";
import React, { FC } from "react"

type VideoInformation = {
    title: string;
    url: string;
    vidNum: number;
}

type VideoProps = {
    vidInfo: VideoInformation;
}

const Video: FC<VideoProps> = ({ vidInfo }) => {
    return (
        <Box>
            <Box rounded='xl' bgColor='#26619c' as='a' href={vidInfo.url} width='100%'>
                {`${vidInfo.vidNum}`}
                <Heading textAlign='center' fontWeight='md'>{vidInfo.title}</Heading>
            </Box>
        </Box>
    );
}

export default Video