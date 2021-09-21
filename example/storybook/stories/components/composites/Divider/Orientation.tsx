import React from 'react';
import { Divider, Flex, Box, Heading } from 'native-base';

export const Example = () => {
  return (
    <Box w="160">
      <Heading mx="auto">Shoes</Heading>
      <Divider w="100%" my="2" />
      <Flex mx="3" direction="row" justify="space-evenly">
        <Heading py="2">Girls</Heading>
        <Divider w="100%" orientation="vertical" mx="3" />
        <Heading py="2">Boys</Heading>
      </Flex>
    </Box>
  );
};
