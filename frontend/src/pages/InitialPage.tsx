import { Flex } from '@mantine/core';
import { AccountInput } from "@molecules/AccountInput";
import { useMantineTheme } from '@mantine/core';

export function InitialPage() {
    const radialGradient = 'radial-gradient(circle, #C5F6FA 10%, #ffffff 90%)'; 

    return (
        <Flex 
            direction="column" 
            justify="center" 
            align="center"
            sx={{ 
                width: "100%", 
                minHeight: "100vh", 
                padding: "20px", 
                background: radialGradient
            }}
        >
            <AccountInput />
        </Flex>
    );
}


/*import { Flex, Box, Text } from '@mantine/core';
import { AccountInput } from "@molecules/AccountInput";


import {
    IconGhost2Filled
  } from '@tabler/icons-react';

export function InitialPage() {
    return (
        <>
            <Flex direction="column" justify="center" sx={{ width:"100%", padding: "20px"}}>
            <AccountInput />
            </Flex>
        </>
      );
}*/