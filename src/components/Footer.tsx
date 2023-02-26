import { Button, Flex, Heading, Grid, Text, GridItem, Box } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import pdf from '../documents/create-chapter.pdf'
import sponsorProspectus from '../documents/sponsorship-prospectus.pdf'


const Footer: FC<any> = () => {
    return (
        <>
            <Box padding='2rem'>
                <Flex align={'center'} flexDir='column'>
                    <Heading textAlign={'center'}>Interested in joining our work?</Heading>
                    <Flex flexDir={['column', 'column', 'row', 'row']} flex={1} gap='1em' padding='1.5em'>
                        <Button backgroundColor={'#6290c8'}>
                            <a
                                href={pdf}
                                target='_blank'
                            >
                                start a chapter
                            </a>
                        </Button>
                        <Button backgroundColor='#a7cab1'>
                            <a href={sponsorProspectus} target='_blank'>sponsur us</a>
                        </Button>
                        <Button backgroundColor='#26619c'>donate</Button>
                        <Button backgroundColor='#e7c5e2' as='a' href='https://docs.google.com/forms/d/e/1FAIpQLSfeZuV2X0cNz-bOwgMK5HyZHY-E3ehqvDkFCp-bT0z4TfnhAQ/viewform'>join the inno team</Button>
                    </Flex>
                </Flex>
            </Box>
            <Grid
                display={['none', 'none', 'grid', 'grid']}
                templateColumns={['none', 'none', 'repeat(2, 1fr)', 'repeat(4, 2fr)']}
                gap={'1rem'}
                textColor='black'
                backgroundColor='#6290c8'
                p='-2rem'
            >
                <GridItem padding='4.5rem'>
                    <Heading size='md' fontWeight={'bolder'}
                        _hover={{
                            textDecoration: 'underline'
                        }}
                    >
                        <Link to='/#' onClick={() => window.scrollTo(0, 0)}>Home</Link>
                    </Heading>
                    <Text paddingTop='4%' _hover={{
                        textDecoration: 'underline'
                    }}>
                        <Link to='/team' onClick={() => window.scrollTo(0, 0)}>
                            About
                        </Link>
                    </Text>
                    <Text paddingTop='4%' _hover={{
                        textDecoration: 'underline'
                    }}><Link to='/chapters/#' onClick={() => window.scrollTo(0, 0)}>Chapters</Link></Text>
                </GridItem>
                <GridItem padding='4.5rem' >
                    <Heading size='md' fontWeight={'bolder'}>Events</Heading>
                    <Text
                        paddingTop={'4%'}
                        _hover={{
                            textDecoration: 'underline'
                        }}
                    >
                        <Link to='/idc/' onClick={() => window.scrollTo(0, 0)}>
                            IDC
                        </Link>
                    </Text>
                    <Text
                        paddingTop={'4%'}
                        _hover={{
                            textDecoration: 'underline'
                        }}
                    >
                        <a href='#'>Calendar</a>
                    </Text>
                </GridItem>
                <GridItem padding='4.5rem'>
                    <Heading size='md' fontWeight={'bolder'}>Resources</Heading>
                    <Text
                        paddingTop={'4%'}
                        _hover={{
                            textDecoration: 'underline'
                        }}
                    >
                        <a href='#'>Newsletter</a>
                    </Text>
                    <Text
                        paddingTop={'4%'}
                        _hover={{
                            textDecoration: 'underline'
                        }}
                    >
                        <Link to='/curriculum/' onClick={() => window.scrollTo(0, 0)}>Curriculum</Link>
                    </Text>
                </GridItem>
                <GridItem padding='4.5rem'>
                    <Heading size='md' fontWeight={'bolder'}>Involvement</Heading>
                    <Text
                        paddingTop={'4%'}
                        _hover={{
                            textDecoration: 'underline'
                        }}
                    >
                        <a href='#'>Contact Us</a>
                    </Text>
                </GridItem>
            </Grid>
            <Text backgroundColor={['white', 'white', '#6290c8', '#6290c8']} textAlign={'center'}>© 2022 INNO Inc. All Rights Reserved.</Text>
        </>
    );
}

export default Footer;