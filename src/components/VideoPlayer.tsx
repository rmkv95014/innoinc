import React, { useEffect, useState } from 'react';
import { Flex, Heading, Box } from '@chakra-ui/react'
import { useParams } from 'react-router';

const VideoPlayer: React.FC<any> = () => {
    const { section, id, name, url } = useParams();
    const [track, setTrack] = useState<'Biology' | 'Computer Science' | 'Engineering'>();
    useEffect(() => {
        if (section === 'bio') setTrack("Biology");
        else if (section === 'cs') setTrack('Computer Science');
        else if (section === 'eng') setTrack('Engineering')
        console.log(url);
    }, []);

    return (
        <Flex paddingTop='7rem' flexDir={'column'} align='center'>
            <Heading textAlign='center'>{track}</Heading>
            {/* <iframe src={`https://www.youtube.com/embed/${embedID}`} frameBorder="0" allow="picture-in-picture" allowFullScreen></iframe> */}
            <iframe width="50%" height="315" style={{ marginTop: '1rem' }} src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen allowTransparency></iframe>
            <Box rounded='2xl' bgColor='#26619c' width='50%' margin={'1em'}>
                <Heading color='white' textAlign={'center'}>{name}</Heading>
            </Box>
        </Flex>);
}

export default VideoPlayer;