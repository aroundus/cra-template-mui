import { Box, Button, Container, Link, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '@/states/features';

export function User() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.user);

  const handleClick = () => {
    dispatch(userActions.setLoggedIn(!isLoggedIn));
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ p: 4 }}>
        <Link
          href="main"
          underline="always"
          variant="body2"
        >
          Main
        </Link>
      </Box>
      <Box sx={{ p: 4 }}>
        <Typography>{isLoggedIn ? '홍길동 님 접속 중' : '로그인해 주세요.'}</Typography>
        <Button
          size="small"
          sx={{ mt: 6, px: 10 }}
          variant="contained"
          onClick={handleClick}
        >
          {isLoggedIn ? '로그아웃' : '로그인'}
        </Button>
      </Box>
    </Container>
  );
}
