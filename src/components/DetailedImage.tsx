import { FC } from 'react';
import { Flex, Text, Heading, FlexProps } from '@chakra-ui/react';

interface ProfileInfoProps {
    img: string;
    href: string;
    children?: any;
}

const DetailedImage: FC<FlexProps & ProfileInfoProps> = ({ img, href, rounded, w, h, marginRight, children, marginBottom }) => {
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
            marginBottom={marginBottom}
            rounded={rounded ? rounded : 'none'}
            marginRight={marginRight ? marginRight : '0em'}
        >
            {children}
        </Flex>
    );
}

export default DetailedImage;