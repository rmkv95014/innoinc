import { Link } from 'react-router-dom';
import { Flex, Button, Menu, MenuButton, MenuList, MenuItem, Image, Spacer, Box, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import logo from './imgs/logo.png';
import { FC } from 'react';
import { motion, useScroll } from 'framer-motion'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Navbar: FC<any> = () => {

    const { scrollYProgress } = useScroll();
    const [display, setDisplay] = useState<'initial' | 'none'>('none');
    const navigate = useNavigate();

    return (
        <>
            <Box className='main-navbar' rounded='xl' display={['none', 'none', 'initial', 'initial']}>
                <Box as={motion.div} style={{ scaleX: scrollYProgress, background: '#ff0055', height: '1vh' }} rounded='3xl' />
                <Flex align='center' gap='0.25em'>
                    {/* <Image src={logo} alt="Logo" /> */}
                    <Spacer />
                    <Menu>
                        <MenuButton
                            as={Button}
                            rightIcon={<ChevronDownIcon />}
                            _hover={{ bg: 'gray.400' }}
                            _focus={{ boxShadow: 'outline' }}
                        >
                            About
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                <Link to='/team/' onClick={() => window.scrollTo(0, 0)}>
                                    The Team
                                </Link>
                            </MenuItem>
                            <MenuItem><Link to='/chapters/' onClick={() => window.scrollTo(0, 0)}>Chapters</Link></MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton
                            as={Button}
                            rightIcon={<ChevronDownIcon />}
                            _hover={{ bg: 'gray.400' }}
                            _focus={{ boxShadow: 'outline' }}
                        >
                            Events
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                <Link to='/idc' onClick={() => window.scrollTo(0, 0)}>
                                    IDC
                                </Link>
                            </MenuItem>
                            <MenuItem>Calendar</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton
                            as={Button}
                            rightIcon={<ChevronDownIcon />}
                            _hover={{ bg: 'gray.400' }}
                            _focus={{ boxShadow: 'outline' }}
                        >
                            Resources
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Newsletter</MenuItem>
                            <MenuItem>
                                <Link to='/curriculum/' onClick={() => window.scrollTo(0, 0)}>Curriculum</Link>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    <Button>Contact Us</Button>
                </Flex>
            </Box>
            <IconButton
                size="lg"
                aria-label='Open Menu'
                mr={2}
                icon={<HamburgerIcon />}
                display={['flex', 'flex', 'none', 'none']}
                justifySelf='end'
                p='1em'
                onClick={() => setDisplay('initial')}
                position='fixed'
            />
            <Flex
                className='mobile-navbar'
                bg={'gray.100'}
                display={display}
            >
                <Flex>
                    <IconButton
                        aria-label='Close Menu'
                        padding='1em'
                        icon={<CloseIcon />}
                        size='lg'
                        onClick={() => setDisplay('none')}
                    />
                </Flex>
                <Flex
                    flexDir={'column'}
                    justify='center'
                    gap='1rem'
                >
                    <Button onClick={() => {
                        navigate('/team/#');
                        window.scrollTo(0, 0)
                    }}>
                        The Team
                    </Button>
                    <Button onClick={() => {
                        navigate('/chapters/#');
                        window.scrollTo(0, 0)
                    }}>
                        Chapters
                    </Button>
                    <Button onClick={() => {
                        navigate('/idc/#');
                        window.scrollTo(0, 0)
                    }}>
                        IDC
                    </Button>
                    <Button>Calendar</Button>
                    <Button onClick={() => {
                        navigate('/curriculum/#');
                        window.scrollTo(0, 0)
                    }}>
                        Newsletter
                    </Button>
                    <Button onClick={() => {
                        navigate('/curriculum/#');
                        window.scrollTo(0, 0)
                    }}>
                        Curriculum
                    </Button>
                    <Button>Contact Us</Button>
                </Flex>
            </Flex>
        </>
    );
}

export default Navbar;