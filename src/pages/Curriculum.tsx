import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import React, { FC } from 'react';
import bio from '../imgs/curriculum/bio.png';
import cs from '../imgs/curriculum/cs.png';
import eng from '../imgs/curriculum/eng.png';

const Curriculum: FC<any> = () => {
    return (
        <>
            <Heading paddingTop='6rem' textAlign='center'>CURRICULUM</Heading>
            <Flex flexDir={'row'} gap='3.6em' p='3rem 0rem 8rem 0rem' alignItems={'center'} justify='center'>
                <Box as='a' href='/curriculum/bio' style={{ zoom: '2' }}>
                    <Box rounded='full' borderRadius='50%' bgColor='#e7c5e2'>
                        <Image src={bio} boxSize='11rem' />
                    </Box>
                    <Heading paddingTop={'2em'} textAlign='center' fontSize='md'>Biology</Heading>
                </Box>
                <Box as='a' href='/curriculum/ml' style={{ zoom: '2' }}>
                    <Box rounded={'full'} borderRadius='50%' bgColor='#26619c'>
                        <Image src={cs} boxSize='11rem' />
                    </Box>
                    <Heading paddingTop={'2em'} textAlign='center' fontSize='md'>Machine Learning</Heading>
                </Box>
                <Box as='a' href='/curriculum/eng' style={{ zoom: '2' }}>
                    <Box rounded={'full'} borderRadius='50%' bgColor='#a7cab1'>
                        <Image src={eng} boxSize='11rem' />
                    </Box>
                    <Heading paddingTop={'2em'} textAlign='center' fontSize='md'>Engineering</Heading>
                </Box>
            </Flex>
        </>
    );
};

export default Curriculum;