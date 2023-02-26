import { FC, Fragment } from "react";
import { Box, ChakraProvider, extendTheme, Grid, GridItem, Heading, Text, Button, Flex, Image, chakra, AspectRatio } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import logo from '../imgs/altLogo.png'

const Home: FC<any> = () => {
    return (
        <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)']}
            marginLeft={['10%', '12%', '15%', '20%']}
            width={['60%', '76%', '70%', '60%']}
            paddingTop={['16%', '14%', '10%', '6%']}
            paddingBottom={['8rem']}
        >
            <GridItem backgroundColor='#a7cab1' paddingRight='0.35rem' h='100%' margin='0em 0em .5rem 0em'>
                <Box className='main-heading'>
                    <Heading fontWeight={'bold'} padding='0em 0.75em 0em 0.25em' fontSize='4em'>inno biotech inc</Heading>
                </Box>
                <Box backgroundColor={'white'} p='1em 0em 0.5em 0em' h='29em'>
                    <Heading fontWeight={'normal'} fontSize='2.5em' paddingLeft='0.5em' width='70%'>
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
            <GridItem
                backgroundColor='#26619c'
                as={Flex}
                flexDir='column'
                alignItems={'center'}
                justifyContent='center'
                p={['1.5em', '1em', '.5em', '.25em']}
                h='100%'
            >
                <AspectRatio ratio={3 / 5} width='15em' p='1em' m='1em'>
                    <Image src={logo} />
                </AspectRatio>
                <Text fontStyle={'italic'} marginTop='5%' fontWeight={'light'} fontSize='2xl' color='white'>learn. inspire. innovate.</Text>
            </GridItem>
            <GridItem
                backgroundColor={'#6290c8'}
                as='div'
                display={'flex'}
                flexDir='column'
                paddingTop='1rem'
                marginTop='2rem'
                height='110%'
            >
                <Heading paddingTop='2rem' fontWeight={'normal'} paddingLeft='1rem' fontSize={'2.5em'}>
                    we combine <span style={{ color: '#a7cab1' }}>learning</span> with <span style={{ color: '#a7cab1' }}>innovation</span> for a unique student experience
                </Heading>
                <Text textAlign={'center'} fontSize='1.5em' paddingTop='5rem' fontStyle={'italic'} justifySelf='flex-end'>click on an icon to check out our curriculums!</Text>
            </GridItem>
            <GridItem backgroundColor='rgb(255,255,255)' marginTop='2rem' paddingTop='8rem' paddingBottom='2rem' height='110%'>
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
            <GridItem marginTop='13rem'>
                <Box backgroundColor={'white'}>
                    <Heading p='1rem' fontWeight={'semibold'}>Our students lead biotech innovation at the <span style={{ color: '#6290c8' }}>Innovation Developers Conference</span></Heading>
                    <Button
                        marginTop='5rem'
                        marginLeft='1rem'
                        marginBottom='2rem'
                        backgroundColor={'#a1cab1'}
                        size='lg'
                        width='40%'
                        color='white'
                        as='a'
                        href='/idc'
                    >
                        learn more
                    </Button>
                </Box>
            </GridItem>
            <GridItem marginTop='13rem' backgroundColor='#a7cab1'>
                <Heading>Add image here</Heading>
            </GridItem>
        </Grid>
    );
}

export default Home;