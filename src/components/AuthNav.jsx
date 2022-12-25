import { Flex } from '@chakra-ui/layout';
import { LoginBTN, RegisterBTN } from 'components/Buttons';

export const AuthNav = () => {
  return (
    <Flex
      as="nav"
      h={16}
      alignItems={'center'}
      justifyContent={'space-between'}
      direction={{ base: 'column', md: 'row' }}
    >
      <RegisterBTN />
      <LoginBTN />
    </Flex>
  );
};