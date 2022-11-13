import { FC } from "react";
import { Box, ChakraProvider, extendTheme, Grid, GridItem, Heading, Text, Button, Flex, Image, chakra } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import logo from '../altLogo.png'

const Home: FC<any> = () => {
    return (
        <Grid templateColumns={'repeat(2, 1fr)'} marginLeft='20%' width='60%' paddingTop='5rem' paddingBottom='8rem'
            display={['flex', 'flex', 'grid', 'grid']}
            flexDir={['column', 'column', 'initial', 'initial']}
        >
            <GridItem backgroundColor='#a7cab1' paddingRight='0.5rem' className='cover-full'>
                <Box className='main-heading'>
                    <Heading fontWeight={'bold'} padding='0em 0.75em 0em 0.25em' fontSize='5em'>inno biotech</Heading>
                    <Heading padding='0em 0.75em 0em 0.25em' fontSize='5em'>inc</Heading>
                </Box>
                <Box className='about'>
                    <Heading fontWeight={'normal'} fontSize='2.75em' paddingLeft='0.5em'>
                        a <span style={{ color: '#a7cab1' }}>100% </span>immersive biotech experience by students, for students.
                    </Heading>
                    <Text paddingTop='1.5em' paddingBottom='.25rem' paddingLeft='1em' fontStyle='italic'>interested in starting a chapter?</Text>
                    <Button
                        size='lg'
                        backgroundColor='#6290c8'
                        className='join-button'
                        rounded={'2xl'}
                        fontSize={['0.75em', '1em', '1.5em', '2em']}
                        fontWeight={['normal', 'normal', 'light', 'light']}
                        width={['8em', '8em', '6em', '9em']}
                    >
                        join today
                    </Button>
                </Box>
            </GridItem>
            <GridItem backgroundColor='#26619c' as={Flex} flexDir='column' alignItems={'center'} justifyContent='center'>
                <Image src={logo} boxSize='55%' marginTop='15%' />
                <Text fontStyle={'italic'} marginTop='10%' fontWeight={'light'} fontSize='2xl' color='white'>learn. inspire. innovate.</Text>
            </GridItem>
            <GridItem backgroundColor={'#6290c8'} as='div' display={'flex'} flexDir='column' paddingTop='1rem'>
                <Heading paddingTop='2rem' fontWeight={'normal'} paddingLeft='1rem'>we combine <span style={{ color: '#a7cab1' }}>learning</span> with <span style={{ color: '#a7cab1' }}>innovation</span> for a unique student experience</Heading>
                <Text textAlign={'center'} fontSize='xl' paddingTop='5rem' fontStyle={'italic'} justifySelf='flex-end'>click on an icon to check out our curriculums!</Text>
            </GridItem>
            <GridItem backgroundColor='rgb(255,255,255)' paddingTop='2rem' paddingBottom='2rem'>
                <Flex flexDir={'column'} justify='space-evenly' gap='2.5rem'>
                    <Box
                        as={motion.a}
                        href='#'
                        backgroundColor='#a7cab1'
                        borderRadius={'1rem 0 0 1rem'}
                        width='70%'
                        marginLeft='30%'
                        padding='1rem'
                        whileHover={{ scale: 1.1 }}
                        transition='0.75s linear ease'
                    >
                        <Heading textAlign={'right'} fontWeight='semibold' color={'white'}>intro to engineering</Heading>
                    </Box>
                    <Box as={motion.a} href='#' backgroundColor='#26619c' borderRadius={'1rem 0 0 1rem'} width='70%' marginLeft='30%' padding='1rem'
                        whileHover={{ scale: 1.1 }}
                        transition='0.75s linear ease'>
                        <Heading textAlign={'right'} fontWeight='semibold' color={'white'}>machine</Heading>
                        <Heading textAlign={'right'} fontWeight='semibold' color={'white'}>learning</Heading>
                    </Box>
                    <Box as={motion.a} href='/biology' backgroundColor='#e7c5e2' borderRadius={'1rem 0 0 1rem'} width='70%' marginLeft='30%' padding='1rem'
                        whileHover={{ scale: 1.1 }}
                        transition='0.75s linear ease'>
                        <Heading textAlign={'right'} fontWeight='semibold' color={'white'}>biology</Heading>
                        <Heading textAlign={'right'} fontWeight='semibold' color={'white'}>basics</Heading>
                    </Box>
                </Flex>
            </GridItem>
            <GridItem marginTop='8rem'>
                <Box backgroundColor={'white'}>
                    <Heading p='1rem' fontWeight={'semibold'}>Our students lead biotech innovation at the <span style={{ color: '#6290c8' }}>Innovation Developers Conference</span></Heading>
                    <Button marginTop='5rem' marginLeft='1rem' marginBottom='2rem' backgroundColor={'#a1cab1'} size='lg' width='40%' color='white'>learn more</Button>
                </Box>
            </GridItem>
            <GridItem marginTop='8rem' backgroundColor='#a7cab1'>
                <Heading>Add image here</Heading>
            </GridItem>
        </Grid>
    );
}

export default Home;