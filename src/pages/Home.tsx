import { Grid, GridItem, Stack } from '@chakra-ui/react';
import Header from '../components/Header';
import FormPanel from '../components/FormPanel';
import PreviewPanel from '../components/PreviewPanel';
import PdfConfigPanel from '../components/PdfConfigPanel';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useResumeBuilder } from '../hooks/useResumeBuilder';
import { exportPdf } from '../utils/pdf';

export default function Home() {
  const { form, setForm, compiled, compile, config, setConfig } = useResumeBuilder();

  return (
    <Stack spacing={4}>
      <Header onCompile={compile} onExport={() => exportPdf(compiled, config)} />
      <LanguageSwitcher />
      <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={4}>
        <GridItem>
          <FormPanel form={form} onChange={setForm} />
        </GridItem>
        <GridItem>
          <Stack spacing={4}>
            <PdfConfigPanel config={config} onChange={setConfig} />
            <PreviewPanel data={compiled} />
          </Stack>
        </GridItem>
      </Grid>
    </Stack>
  );
}
