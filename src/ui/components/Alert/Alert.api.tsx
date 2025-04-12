import { Alert, AlertDescription, AlertTitle } from '@/components';

type AlertApiErrorProps = {
  title?: string;
  message: string;
};

export const AlertApiError = ({
  title = 'Oops! Something went wrong',
  message,
}: AlertApiErrorProps) => {
  return (
    <Alert variant="error">
      <AlertTitle>
        {title}
      </AlertTitle>
      <AlertDescription>
        {message}
      </AlertDescription>
    </Alert>
  );
};
