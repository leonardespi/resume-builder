import { Button, ButtonGroup } from '@chakra-ui/react';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { t } = useTranslation();
  const current = i18n.language;

  return (
    <ButtonGroup size="sm" isAttached variant="outline">
      <Button onClick={() => i18n.changeLanguage('en')} isActive={current.startsWith('en')}>
        {t('english')}
      </Button>
      <Button onClick={() => i18n.changeLanguage('es')} isActive={current.startsWith('es')}>
        {t('spanish')}
      </Button>
    </ButtonGroup>
  );
}
