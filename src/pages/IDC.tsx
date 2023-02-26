import { Box, Grid, GridItem, Heading, Image, Link, TypographyProps, Flex, AspectRatio } from '@chakra-ui/react';
import { FC, ReactElement, useState } from 'react';
import './IDC.css'
import rMuthukumar from '../imgs/team/rMuthukumar.jpg'; // placeholder image
import judgingGuidelines from '../imgs/judging_guidelines/judgingGuidelines.png';
import idcGuide from '../documents/idc-guide.pdf';

interface BoxTitle {
    title: string | ReactElement<any, any>;
    color: string;
}

interface SubBox {
    img?: string;
    heading?: string;
    headingAlign?: TypographyProps["textAlign"]; // default to left
    children?: any;
}

interface Item {
    boxTitle: BoxTitle;
    aboutBox: SubBox[];
    orientation: 'lr' | 'rl';
}

const IDC: FC<any> = () => {

    const [linkClicked, setClicked] = useState<boolean>(false);

    const idcBoxes: Item[] = [{
        boxTitle: {
            title: <Heading p='1em 0em 0em 0.5em' fontSize={'3em'}><a href={idcGuide} target='_blank'>Innovation Development Conference</a></Heading>,
            color: '#26619c'
        }, aboutBox: [{
            img: rMuthukumar,
        }, {
            heading: 'present <self-designed> biotech products to industry specialists. win a <patent>'
        }], orientation: 'lr'
    }, {
        boxTitle: {
            title: 'Specialized Industry Experts',
            color: '#6290c8',
        }, aboutBox: [{
            img: rMuthukumar
        }, {
            heading: '<industry> expert judges. discover commerical <applications>. connect with <mentors>.'
        }], orientation: 'rl',
    }, {
        boxTitle: {
            title: 'National Conference',
            color: '#26619c',
        }, aboutBox: [{
            img: rMuthukumar,
        }, {
            heading: 'build connections with <100+ students> from <15+ chapters> across the country'
        }], orientation: 'lr'
    }, {
        boxTitle: {
            title: 'Competition Structure',
            color: '#6290c8',
        }, aboutBox: [{
            heading: 'Written Submission',
            children: (
                <>
                    <div style={{ paddingRight: '1em' }}>
                        <Heading fontSize='1.25em' fontWeight={'hairline'} textAlign='right' pr={'1em'} p='0.35em' >3-5 page write-up project</Heading>
                        <Heading fontSize='1.25em' fontWeight={'hairline'} textAlign='right' pr={'1em'} p='0.35em' >
                            <Link
                                onClick={() => {
                                    setClicked(!linkClicked);
                                    window.scrollTo(0, 0);
                                }}
                                textDecor='underline'
                            >
                                submission guidelines
                            </Link>
                        </Heading>
                        <Heading fontSize='1.25em' fontWeight={'hairline'} textAlign='right' pr={'1em'} p='0.35em' pb={'2em'}>→2020 winning project</Heading>
                    </div>
                </>
            ),
        }, {
            heading: 'Oral Submission',
            headingAlign: 'right',
            children: (
                <>
                    <div style={{ paddingLeft: '1em', height: '100%' }}>
                        <Heading fontSize='1.25em' fontWeight={'hairline'} textAlign='left' pl={'1em'} p='0.35em' >5-7 minute oral presentation</Heading>
                        <Heading fontSize='1.25em' fontWeight={'hairline'} textAlign='left' pl={'1em'} p='0.35em' >
                            <Link onClick={() => {
                                setClicked(!linkClicked);
                                window.scrollTo(0, 0)
                            }} textDecor='underline'>submission guidelines</Link>
                        </Heading>
                        <Heading fontSize='1.25em' fontWeight={'hairline'} textAlign='left' pl={'1em'} p='0.35em' pb={'2em'}>→2020 winning project</Heading>
                    </div>
                </>
            ),
        }], orientation: 'rl'
    }, {
        boxTitle: {
            title: 'Prizes',
            color: '#26619c',
        }, aboutBox: [{
            children: (
                <>
                    <Flex align='center' justify='center' flexDir={'column'} >
                        <Box bgColor='#a7cab1' rounded='20em' boxSize={'fit-content'} p='1.25em 1.25em 1.25em 1.25em'>
                            <Heading fontSize='2em' textAlign='center'>Winner</Heading>
                        </Box>
                        <Box>
                            <Heading textAlign={'center'} fontWeight='normal'><span style={{ color: '#a7cab1' }}>$1000</span> patent grant</Heading>
                            <Heading textAlign='center' fontWeight='normal'>pro bono patent legal counsel</Heading>
                        </Box>
                        <Flex align='center' justify={'center'} flexDir='column' marginRight={'10.5em'} p='1em 1em 0em 1em'>
                            <Box rounded='18em' bgColor='#e7c5e2' width={'fit-content'} padding='1.25em'>
                                <Heading fontSize='1.5em' textAlign='center'>2nd place</Heading>
                            </Box>
                            <Box>
                                <Heading fontSize='1.5em' textAlign={'center'} fontWeight='normal'><span style={{ color: '#a7cab1' }}>$500</span> patent grant</Heading>
                            </Box>
                        </Flex>
                        <Flex align='center' justify={'center'} flexDir='column' ml={'10.5em'} p='1em'>
                            <Box rounded='18em' bgColor='#559bb2' width={'fit-content'} padding='1.25em'>
                                <Heading fontSize='1.5em' textAlign='center'>3rd place</Heading>
                            </Box>
                            <Box>
                                <Heading fontSize='1.5em' textAlign={'center'} fontWeight='normal'><span style={{ color: '#a7cab1' }}>$250</span> patent grant</Heading>
                            </Box>
                        </Flex>
                        <Flex align='center' justify={'center'} flexDir='column' marginRight={'6.5em'} p='1em'>
                            <Box rounded='10em' bgColor='#6290c8' width={'fit-content'} padding='0.75em'>
                                <Heading fontSize='1.5em' textAlign='center' color={'white'}>all competitors</Heading>
                            </Box>
                            <Box>
                                <Heading fontSize='1.25em' textAlign={'center'} fontWeight='normal'>merch from sponsors</Heading>
                            </Box>
                        </Flex>
                    </Flex>
                </>
            )
        }], orientation: 'lr'
    }];
    return (
        <>
            <div
                style={{
                    // height: '100vh',
                    display: linkClicked ? 'flex' : 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: '5rem',
                }}
                onClick={() => setClicked(false)}
            >
                <Image src={judgingGuidelines} boxSize='70%' />
            </div>
            <Grid
                templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)']}
                marginLeft='20%' width='60%' paddingTop='5rem'
                marginBottom={'10%'}
                display={[linkClicked ? 'none' : 'flex', linkClicked ? 'none' : 'flex', linkClicked ? 'none' : 'grid', linkClicked ? 'none' : 'grid']}
                flexDir={['column', 'column', 'initial', 'initial']}
            >
                {idcBoxes.map((box: Item, i: number) => {
                    return (
                        box.orientation === 'lr' ? <>
                            <GridItem bgColor={box.boxTitle.color} color='white' height='120%' paddingBottom='1rem' marginBottom={i === idcBoxes.length - 1 ? '10em' : '14rem'} id='clear'>
                                {(typeof box.boxTitle.title === 'string') ?
                                    <Heading p='1em 0em 0em 0.5em' fontSize='3em'>
                                        {box.boxTitle.title}
                                    </Heading> :
                                    box.boxTitle.title
                                }
                            </GridItem>
                            <GridItem bgColor='#a7cab1' pl={['0em', '0em', '0.5em', '0.5em']} height='120%' marginBottom={i < idcBoxes.length - 1 ? '14em' : '10rem'} id='clear'>
                                {box.aboutBox.map((subBox: SubBox, i: number) => {
                                    let array: string[] = [];
                                    for (const char of (subBox.heading) || '') {
                                        if (char === '<')
                                            array.push(`<`)
                                        else if (char === '>') {
                                            array[array.length - 1] = array[array.length - 1] + char;
                                            array.push(``);
                                        }
                                        else if (array.length > 0)
                                            array[array.length - 1] = array[array.length - 1] + char;
                                        else array.push(char);
                                    }
                                    return (
                                        <>
                                            <Box bgColor={'white'} marginBottom={i < box.aboutBox.length - 1 ? '1em' : '0em'} height={subBox.children ? '100%' : '48%'}>
                                                {subBox.heading ? <Heading textAlign={'right'} p='0.75em'>
                                                    {array.map((value: string, index: number) => {
                                                        if (value.charAt(0) === '<') {
                                                            return <span style={{
                                                                color: '#a7cab1'
                                                            }}>{value.substring(1, value.indexOf('>'))}</span>
                                                        }
                                                        else
                                                            return value;
                                                    })}
                                                </Heading> : <></>}
                                                {subBox.img ?
                                                    <AspectRatio ratio={3 / 5} width='15em' p='1em' m='1em'>
                                                        <Image
                                                            src={subBox.img}
                                                            // boxSize='30%'
                                                            verticalAlign='middle'
                                                            ml='35%'
                                                            align='center'
                                                            p='1em'
                                                        />
                                                    </AspectRatio>
                                                    : <></>}
                                                {subBox.children || <></>}
                                            </Box>
                                        </>
                                    );
                                })}
                            </GridItem>
                        </> : <>
                            <GridItem bgColor='#a7cab1' pl={['0em', '0em', '0.5em', '0.5em']} height='120%' marginBottom={i < idcBoxes.length - 1 ? '14em' : '10rem'} id='clear'>
                                {box.aboutBox.map((subBox: SubBox, i: number) => {
                                    let array: string[] = [];
                                    for (const char of (subBox.heading) || '') {
                                        if (char === '<')
                                            array.push(`<`)
                                        else if (char === '>') {
                                            array[array.length - 1] = array[array.length - 1] + char;
                                            array.push(``);
                                        }
                                        else if (array.length > 0)
                                            array[array.length - 1] = array[array.length - 1] + char;
                                        else array.push(char);
                                    }
                                    return (
                                        <>
                                            <Box bgColor={'white'} marginBottom={i < box.aboutBox.length - 1 ? '1em' : '0em'} height='48%'>
                                                {subBox.heading ? <Heading textAlign={'right'} p='0.75em'>
                                                    {array.map((value: string, index: number) => {
                                                        if (value.charAt(0) === '<') {
                                                            return <span style={{
                                                                color: '#a7cab1'
                                                            }}>{value.substring(1, value.indexOf('>'))}</span>
                                                        }
                                                        else
                                                            return value;
                                                    })}
                                                </Heading> : <></>}
                                                {subBox.img ?
                                                    <AspectRatio ratio={3 / 5} width='15em' p='1em' m='1em'>
                                                        <Image
                                                            src={subBox.img}
                                                            // boxSize='30%'
                                                            verticalAlign='middle'
                                                            ml='35%'
                                                            align='center'
                                                            p='1em'
                                                        />
                                                    </AspectRatio>
                                                    : <></>}
                                                {subBox.children || <></>}
                                            </Box>
                                        </>
                                    );
                                })}
                            </GridItem>
                            <GridItem bgColor={box.boxTitle.color} color='white' height='120%' paddingBottom='1rem' marginBottom={i === idcBoxes.length - 1 ? '10em' : '14rem'} id='clear'>
                                <Heading p='1em 0em 0em 0.5em' fontSize={'3em'}>{box.boxTitle.title}</Heading>
                            </GridItem>
                        </>
                    );
                })}
            </Grid>
        </>
    );
}

export default IDC;