import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import React from 'react';
import Data from './../scenes/Data/data.json'
import { Box } from '@chakra-ui/react';

function Spider() {
    return (
        <Box>
            <RadarChart
                captions={{
                    // columns
                    Network: 'Network',
                    OS: 'OS',
                    System: 'System',

                }}
                data={[
                    // data
                    {
                        data: {
                            Network: 0.7,
                            OS: 0.6,
                            System: 0.4
                        },
                        meta: { color: '#58FCEC' }
                    },
                ]}
                size={350}
            />
        </Box>
    )
}

export default Spider;