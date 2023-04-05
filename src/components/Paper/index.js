import { Box, BoxProps } from '@chakra-ui/react';

export const Paper = ({ children, ...boxProps }) => (
  <Box
    border={'1px solid'}
    color={'black'}
    bgColor={'white'}
    borderColor={'tomato.200'}
    overflow={'hidden'}
    borderRadius={8}
    {...boxProps}
  >
    {children}
  </Box>
)
