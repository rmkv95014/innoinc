import { FC } from "react";
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import './Team.css';
import rRanjan from '../imgs/team/rRanjan.jpg';
import kPatel from '../imgs/team/kPatel.jpg';
import rMuthukumar from '../imgs/team/rMuthukumar.jpg';
import sManikandan from '../imgs/team/sManikandan.jpg';
import iChen from '../imgs/team/iChen.png';
import eErtl from '../imgs/team/eErtl.jpg';
import eSidhu from '../imgs/team/eSidhu.jpg';
import kDu from '../imgs/team/kDu.jpg';


import ProfileInfo from "../components/DetailedImage";


interface Member {
    name: string,
    uni: string,
    uniTextSize?: string,
    role: string,
    pic: string,
}

interface Row {
    rowTitle: string,
    color: string,
    members: Member[],
}

const Team: FC<any> = () => {

    const rowsInfo: Row[] = [{
        rowTitle: 'Execs',
        color: '#26619c',
        members: [{
            name: 'Riya Ranjan',
            uni: 'Stanford University',
            role: 'Co-founder/COO',
            pic: rRanjan,
        }, {
            name: 'Kavya Patel',
            uni: 'Washington University in St. Louis',
            role: 'Co-founder/COO',
            pic: kPatel,
            uniTextSize: '2xs',
        }]
    }, {
        rowTitle: 'Curriculum',
        color: '#a7cab1',
        members: [{
            name: 'Sneha Manikandan',
            uni: 'Washington University in St. Louis',
            role: 'Chemistry',
            pic: sManikandan,
            uniTextSize: '2xs',
        }, {
            name: 'Ellie Ertl',
            uni: 'Washington University in St. Louis',
            role: 'Computer Science',
            pic: eErtl,
            uniTextSize: '2xs',
        }, {
            name: 'Esha Sidhu',
            uni: 'UCLA',
            role: 'Python',
            pic: eSidhu,
        }, {
            name: 'Taru Mishra',
            uni: 'UT Austin',
            role: 'Python',
            pic: '',
        }]
    }, {
        rowTitle: 'Marketing',
        color: '#e7c5e2 ',
        members: [{
            name: 'Kimi Du',
            uni: 'Duke University',
            role: 'Outreach',
            pic: kDu,
        }]
    }, {
        rowTitle: 'Operations',
        color: '#26619c',
        members: [{
            name: 'Keng Tehen',
            uni: 'Vanderbilt University',
            role: 'Sponsorships',
            pic: '',
        }, {
            name: 'Rohith Muthukumar',
            uni: 'Monta Vista High',
            role: 'Website',
            pic: rMuthukumar
        }, {
            name: 'Ian Chen',
            uni: 'New York University',
            role: 'Advisory',
            pic: iChen
        }]
    }];

    return (
        <Box id='main-content' width='60%' marginLeft='20%'>
            <Heading id='heading' paddingBottom='0.75em' fontSize='4em'>The INNO Team</Heading>
            {rowsInfo.map((rowInfo: Row) => {
                return (
                    <Flex marginBottom='2em'>
                        <Flex bgColor={rowInfo.color} className='text-container' rounded='2xl'>
                            <Heading id='vert-text' marginBottom='0.5em'>{rowInfo.rowTitle}</Heading>
                        </Flex>
                        {rowInfo.members.map((member: Member) => {
                            return (
                                <ProfileInfo
                                    img={member.pic}
                                    href={`mailto: ${member.name.substring(0, member.name.indexOf(' ')).toLowerCase()}@innoinc.org`}
                                    w={'14em'}
                                    h={'14em'}
                                >
                                    <Box id='info-container'>
                                        <Text>
                                            {member.name}
                                        </Text>
                                        <Text fontSize={member.uniTextSize || 'initial'}>
                                            {member.uni}
                                        </Text>
                                        <Text>
                                            {member.role}
                                        </Text>
                                    </Box>
                                </ProfileInfo>
                            );
                        })}
                    </Flex>
                );
            })}
        </Box >
    );
}

export default Team;
