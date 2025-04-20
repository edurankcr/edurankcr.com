import { HeadingForm, Stack, Text } from '@/components';

type FormHeaderProps = {
  title: string;
  paragraph?: string;
  subtitle?: string;
};

const FormHeader = (params: FormHeaderProps) => {
  const { title, subtitle, paragraph } = params;
  return (
    <Stack gap="md">
      <HeadingForm settings={{ className: 'md:mt-12' }}>
        {title}
        {subtitle && (
          <>
            <br />
            {subtitle}
          </>
        )}
      </HeadingForm>
      {paragraph && (
        <Text color="secondary" align="center">
          {paragraph}
        </Text>
      )}
    </Stack>
  );
};

export { FormHeader };
