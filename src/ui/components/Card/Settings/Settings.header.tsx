import { HeadingForm, Stack, Text } from '@/components';

type SettingsHeaderProps = {
  title: string;
  paragraph?: string;
};

const SettingsHeader = (params: SettingsHeaderProps) => {
  const { title, paragraph } = params;
  return (
    <Stack gap="md" alignItems="start">
      <HeadingForm settings={{ align: 'start' }}>
        {title}
      </HeadingForm>
      {paragraph && (
        <Text color="secondary" align="start">
          {paragraph}
        </Text>
      )}
    </Stack>
  );
};

export { SettingsHeader };
