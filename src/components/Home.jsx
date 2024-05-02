import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import GausJordan from './GausJordan';

const Home = () => {
    return (
        <div>
            <Tabs isFitted variant='enclosed' >
                <TabList 
                    mb='1em' 
                    
                    bgClip="text"
                >
                    <Tab color="blue.700"  fontWeight="extrabold" fontSize="4xl">GausJordan</Tab>
                    <Tab color="blue.700"  fontWeight="extrabold" fontSize="4xl">Jacobí</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <GausJordan />
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default Home