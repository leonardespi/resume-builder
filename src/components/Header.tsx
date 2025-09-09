import { Flex, Spacer, HStack, useToast } from '@chakra-ui/react';
import GradientPill from './GradientPill';
import { useTranslation } from 'react-i18next';

type Props = {
  onCompile: () => void;
  onExport: () => void;
};

export default function Header({ onCompile, onExport }: Props) {
  const { t } = useTranslation();
  const toast = useToast();

  const handleExport = async () => {
    try {
      await onExport();
    } catch (e: any) {
      toast({
        status: 'warning',
        title: t('exportError'),
        description: e?.message,
      });
    }
  };

  return (
    <Flex align="center" mb={6}>
      <GradientPill>{t('appName')}</GradientPill>
      <Spacer />
      <HStack spacing={3}>
        <GradientPill asButton onClick={onCompile}>{t('compile')}</GradientPill>
        <GradientPill asButton onClick={handleExport}>{t('export')}</GradientPill>
      </HStack>
    </Flex>
  );
}
