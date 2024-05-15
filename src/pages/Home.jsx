import { Box, Button, colors, Container, Link, Typography, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { createUseStyles } from 'react-jss';

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  /**
   * 사용자 정의 컴포넌트
   * @description 스타일 예외 처리 또는 동적 스타일 구성이 필요한 경우 사용합니다.
   */
  const StyledButton = styled(Button)(() => ({
    '&': {
      color: isMobile ? colors.common.white : colors.grey[300],
    },

    '&:hover': {
      color: colors.common.white,
    },
  }));

  const useStyles = createUseStyles(
    {
      container: {
        '&': {
          padding: 24,
          backgroundColor: colors.grey[100],
        },
      },
    },
    {
      name: 'Home',
    },
  );

  const styles = useStyles();

  return (
    <Container className={styles.container}>
      <Box>
        <Typography>
          <strong>{isMobile ? '모바일' : '데스크톱'}</strong> 해상도예요.
        </Typography>
      </Box>
      <Box
        display="flex"
        gap={2}
      >
        <Link
          href="/example"
          underline="always"
          variant="body2"
        >
          Example
        </Link>
        <Link
          href="/quiz"
          underline="always"
          variant="body2"
        >
          IntersectionObserver API 예제
        </Link>
        <Link
          href="/user"
          underline="always"
          variant="body2"
        >
          Redux Toolkit 예제
        </Link>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        gap={4}
      >
        <Button
          size="large"
          sx={{ mt: 6, px: 10 }}
          variant="contained"
        >
          Button
        </Button>
        <StyledButton
          color="secondary"
          size="large"
          sx={{ mt: 6, px: 10 }}
          variant="contained"
        >
          StyledButton
        </StyledButton>
      </Box>
    </Container>
  );
}
