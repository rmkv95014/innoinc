import { useParams } from 'react-router';
import React, { FC, useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, doc, DocumentData, getDoc, getDocs, QueryDocumentSnapshot, QuerySnapshot } from 'firebase/firestore';
import { Box, Flex, Heading } from '@chakra-ui/react';

const CurriculumSection: FC<any> = () => {
    const { section } = useParams();
    const [videoInfo, setVideoInfo] = useState<any[]>();

    useEffect(() => {
        let dbSection: string | undefined = section;
        if (!section)
            return;
        if (section === 'bio')
            dbSection = 'Biology';
        else if (section === 'ml')
            dbSection = 'Computer Science - Machine Learning';
        else if (section === 'eng')
            dbSection = 'Engineering'
        else return;
        const docRef = doc(collection(db, "curriculum"), dbSection);
        const fetchData = async () => {
            const data = await getDoc(docRef);
            return (data.data() || {})
        }
        const fetchVideos = async (data: DocumentData) => {
            const { subcollections, title } = data;
            return await subcollections.map(async (subCollection: { title: string, subcollectionName: string }) => {
                const { subcollectionName, title } = subCollection;
                const videoRef = collection(db, docRef.path, subcollectionName);
                const querySnapshots = await getDocs(videoRef);
                return await querySnapshots.docs.map((querySnapshot: QueryDocumentSnapshot<DocumentData>) => {
                    return { title, ...querySnapshot.data() };
                });
            })
        }
        (async () => {
            const data = await fetchData();
            const videoData = await Promise.all([...await fetchVideos(data)]);
            setVideoInfo(videoData);
        })();
    }, []);

    return (
        <Flex paddingTop='7rem' flexDir={'column'} alignItems={'center'}>
            {videoInfo?.map((video: any, index: number) => {
                const studyGuideUrl = video[0].studyGuideUrl;
                return (
                    <Flex flexDir='row' align='center' bgColor='#26619c' rounded={'2xl'} width='70%' margin='1em' height='4em'
                        as='a' href={`/${section}/${video[0].embedID}/${video[0].title}`}>
                        <Box margin={0} width={'fit-content'}>
                            <Heading color='white' p='.5em'>{index + 1}.</Heading>
                        </Box>
                        <Heading p='.5em' textAlign='center' justifySelf='center' color='white' fontSize={(video[0].title.length > 42 ? 'xl' : '3xl')}>{video[0].title}</Heading>
                    </Flex>);
            })}
        </Flex>
    );
}

export default CurriculumSection;