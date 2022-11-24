import React, { useEffect, useState } from 'react';
import { Flex, Heading, Box, AspectRatio } from '@chakra-ui/react'
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
        <Flex paddingTop={['3.5rem', '3.5rem', '7rem', '7rem']} flexDir={'column'} align='center'>
            <Heading textAlign='center'>{track}</Heading>
            <AspectRatio maxH={'500px'} ratio={4 / 3} width='50%' rounded='2xl' marginBottom={'1em'}>
                <iframe
                    style={{ marginTop: '1rem' }}
                    src={`https://www.youtube.com/embed/${id}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    allowTransparency
                />
            </AspectRatio>
            {/* <AspectRatio maxW='560px' ratio={1}>
                <iframe
                    title='naruto'
                    src='https://www.youtube.com/embed/QhBnZ6NPOY0'
                    allowFullScreen
                />
            </AspectRatio> */}
            <Box rounded='2xl' bgColor='#26619c' width='50%' margin={'1em'}>
                <Heading
                    color='white' textAlign={'center'}
                    fontSize={[
                        '1.25em',
                        '1.5em',
                        '1.75em',
                        '2.5em'
                    ]}
                    padding={'.5em'}
                >
                    {name}
                </Heading>
            </Box>
        </Flex>);
}

export default VideoPlayer;