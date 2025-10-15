import { Box, BoxProps } from '@chakra-ui/react';

type Props = BoxProps & {
  asButton?: boolean;
};

export default function GradientPill({ asButton, children, ...rest }: Props) {
  return (
    <Box
      as={asButton ? 'button' : undefined}
      px={4}
      py={2}
      rounded="lg"
      bg={asButton ? 'transparent' : undefined}
      bgGradient={asButton ? undefined : 'linear(to-r, black, black)'}
      borderWidth={asButton ? '1px' : 0}
      borderColor={asButton ? 'black' : 'transparent'}
      /* Text color */
      color={asButton ? 'black' : 'white'}
      fontWeight="semibold"
      userSelect="none"
      cursor={asButton ? 'pointer' : 'default'}
      transition="all 0.2s ease-in-out"
      _hover={
        asButton
          ? { bg: 'blackAlpha.50', transform: 'translateY(-1px)' }
          : { transform: 'translateY(-1px)' }
      }
      _focusVisible={asButton ? { boxShadow: '0 0 0 2px black' } : undefined}
      {...rest}
    >
      {children}
    </Box>
  );
}
