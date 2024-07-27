import { Box, Container, ImageList, ImageListItem, Link, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import example01Image from '@/assets/images/example-01.jpg';
import example02Image from '@/assets/images/example-02.jpg';

export function Example() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container
      sx={{
        mx: 'auto',
        px: isMobile ? 6 : 8,
        py: isMobile ? 5 : 10,
      }}
    >
      <Box>Example</Box>
      <Box>
        <Link
          href="main"
          underline="always"
          variant="body2"
        >
          Main
        </Link>
      </Box>
      <ImageList>
        <ImageListItem>
          <img
            src={example01Image}
            alt="WHY 없이 일하지 않는다"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={example02Image}
            alt="우선순위를 가지고 일하고, 맡은 일은 완결성 있게 끝낸다"
          />
        </ImageListItem>
      </ImageList>
    </Container>
  );
}
