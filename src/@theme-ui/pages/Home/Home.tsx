import { Box } from '@theme/components';

export const Home = () => {
  return (
    <>
      <Box as="section">
        <Box className="bg-black w-full h-[36vw] hero" />
      </Box>
      <Box container section>
        <Box as="section">
          <b>
            Hello World!
            This is the home page.
          </b>
        </Box>
      </Box>
    </>
  );
};
