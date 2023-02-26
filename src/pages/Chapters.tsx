import { Box, Grid, GridItem, Heading, Text, Link, Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import DetailedImage from '../components/DetailedImage';
import amadorValley from '../imgs/schools/amadorvalley.jpg';
import cupertino from '../imgs/schools/cupertino.jpg';
import dougherty from '../imgs/schools/dougherty.jpg';
import foothill from '../imgs/schools/foothill.jpg';
import fremont from '../imgs/schools/fremont.jpg';
import harker from '../imgs/schools/harker.jpg';
import lynnbrook from '../imgs/schools/lynnbrook.jpg';
import missionSanJose from '../imgs/schools/mission-san-jose.jpg';
import montaVista from '../imgs/schools/montavista.jpg';
import mountainHouse from '../imgs/schools/mountain-house.jpg';
import saratoga from '../imgs/schools/saratoga.jpg';
import wilcox from '../imgs/schools/wilcox.jpg';


interface SchoolInfo {
    school: string;
    address: string;
    picture: string;
}

const Chapters: FC<any> = () => {

    const schoolInfo: SchoolInfo[] = [{
        school: 'Amador Valley High School',
        address: '1155 Santa Rita Rd, Pleasanton, CA',
        picture: amadorValley,
    }, {
        school: 'Cupertino High School',
        address: '10100 Finch Ave, Cupertino, CA',
        picture: cupertino
    }, {
        school: 'Dougherty Valley High School',
        address: '10550 Albion Rd, San Ramon, CA',
        picture: dougherty,
    }, {
        school: 'Foothill High School',
        address: '4375 Foothill Road, Pleasanton, CA',
        picture: foothill,
    }, {
        school: 'Fremont High School',
        address: '575 W Fremont Ave, Sunnyvale, CA',
        picture: fremont,
    }, {
        school: 'Irvington High School',
        address: '41800 Blacow Rd, Fremont, CA',
        picture: '',
    }, {
        school: 'Lynnbrook High School',
        address: '1280 Johnson Ave, San Jose, CA',
        picture: lynnbrook,
    }, {
        school: 'Mission San Jose',
        address: '43300 Mission Blvd, Fremont, CA',
        picture: missionSanJose,
    }, {
        school: 'Monta Vista High School',
        address: '21840 McClellan Rd, Cupertino, CA',
        picture: montaVista,
    }, {
        school: 'Mountain House',
        address: '1090 S. Central Parkway Mountain House, CA',
        picture: mountainHouse
    }, {
        school: 'Saratoga High School',
        address: '20300 Herriman Ave, Saratoga, CA',
        picture: saratoga,
    }, {
        school: 'The Harker School',
        address: '500 Saratoga Ave, San Jose, CA',
        picture: harker,
    }, {
        school: 'Wilcox High School',
        address: '3250 Monroe St, Santa Clara, CA',
        picture: wilcox,
    }]

    return (
        <Box paddingTop={'7rem'}>
            <Heading textAlign={'center'} color='#26619c'>INNO Chapters</Heading>
            <Grid
                templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
                gap={[2, 4, 6, 8]}
                marginLeft='15%'
                alignItems={'center'}
                p={'2em 0em 3em 0em'}
                w='70%'
            >
                {schoolInfo.map((school: SchoolInfo, i: number) => {
                    return (
                        <GridItem>
                            <DetailedImage
                                img={school.picture}
                                href={`${school.school.substring(0, school.school.indexOf(' ')).toLowerCase()}@innoinc.org`}
                                rounded='3xl'
                                w={'100%'}
                                h={['10em', '14em', '16em', '18em']}
                            />
                            <Flex justify='center' flexDir='column' textAlign={'justify'}>
                                <Text textAlign={'center'}>{school.school}</Text>
                                <Text textAlign={'center'}>{`${school.address.substring(school.address.indexOf(',') + 1)}`}</Text>
                                <Link textAlign={'center'} href={`mailto: ${school.school.substring(0, school.school.indexOf(' ')).toLowerCase()}@innoinc.org`}>Email</Link>
                            </Flex>
                        </GridItem>
                    );
                })}
            </Grid>
        </Box >
    );
}

export default Chapters;
