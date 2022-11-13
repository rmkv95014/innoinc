import { FC } from 'react';
import { Flex, Text, Heading } from '@chakra-ui/react';

interface ProfileInfoProps {
    img: string;
    href: string;
    rounded?: string;
    w: string | string[];
    h: string | string[];
    children?: any;
}

const DetailedImage: FC<ProfileInfoProps> = ({ img, href, rounded, w, h, children }) => {
    return (
        <Flex
            as='a'
            backgroundColor={'#ebcfa5'}
            bgImg={img}
            href={href}
            bgPosition='center'
            bgRepeat={'no-repeat'}
            bgSize='cover'
            id='profile-cards'
            justify={'flex-end'}
            flexDir='column'
            textAlign={'right'}
            color='white'
            w={w}
            h={h}
            rounded={rounded ? rounded : 'none'}
        >
            {children}
        </Flex>
    );
}

export default DetailedImage;