import { Box, BoxProps } from '@chakra-ui/react';

type Props = BoxProps & {
  asButton?: boolean;
};

export default function GradientPill({ asButton, children, ...rest }: Props) {
  return (
    <Box
      px={4}
      py={2}
      rounded="2xl"
      bgGradient="linear(to-r, pink.400, purple.500)"
      color="white"
      fontWeight="semibold"
      userSelect="none"
      cursor={asButton ? 'pointer' : 'default'}
      transition="all 0.2s ease-in-out"
      _hover={asButton ? { bgGradient: 'linear(to-r, pink.500, purple.600)', transform: 'translateY(-1px)' } : undefined}
      {...rest}
    >
      {children}
    </Box>
  );
}
