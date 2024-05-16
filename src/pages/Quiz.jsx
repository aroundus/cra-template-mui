import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Box, Container, Link, List, ListItem, Typography } from '@mui/material';

import useIntersectionObserver from '@/helpers/hooks/useIntersectionObserver';
import quizService from '@/services/quiz';

export default function Quiz() {
  const intersectionRef = useRef(null);
  const intersectionObserver = useIntersectionObserver({ ref: intersectionRef, options: {} });

  const [quizzes, setQuizzes] = useState([]);
  const [page, setPage] = useState({});
  const [pageIndex, setPageIndex] = useState(0);

  const hasNextPage = useMemo(() => page.pageIndex === undefined || page.totalPageCount > page.pageIndex + 1, [page]);

  const fetchQuizzes = useCallback(async () => {
    const fetchedQuizzes = await quizService.getQuizzes(pageIndex);

    setQuizzes((prevQuizzes) => prevQuizzes.concat(fetchedQuizzes.data));
    setPage(fetchedQuizzes.page);
  }, [pageIndex]);

  useEffect(() => {
    if (hasNextPage) {
      if (intersectionObserver?.isIntersecting) {
        setPageIndex((prevPageIndex) => (prevPageIndex += 1));
      }
    }
  }, [intersectionObserver, hasNextPage]);

  useEffect(() => {
    if (hasNextPage) {
      fetchQuizzes(pageIndex);
    }
  }, [pageIndex, hasNextPage]);

  return (
    <Container
      maxWidth="sm"
      sx={{ p: 12 }}
    >
      <Typography>총 {page.totalElementCount}개</Typography>
      <Box>
        <Link
          href="/"
          underline="always"
          variant="body2"
        >
          Home
        </Link>
      </Box>
      <List>
        {quizzes.map((quiz, index) => (
          <ListItem
            alignItems="flex-start"
            display="flex"
            divider
            key={quiz.id}
            sx={{ flexDirection: 'column', py: 12 }}
          >
            <Typography>{index + 1}.</Typography>
            <Typography>
              {quiz.answers[0].isCorrect ? '🟢' : '❌'} {quiz.answers[0].text}
            </Typography>
            <Typography>
              {quiz.answers[1].isCorrect ? '🟢' : '❌'} {quiz.answers[1].text}
            </Typography>
          </ListItem>
        ))}
        {!hasNextPage && (
          <ListItem
            alignItems="flex-start"
            sx={{ flexDirection: 'column', py: 12 }}
          >
            <Typography>✔️ 모든 목록을 다 읽었어요.</Typography>
          </ListItem>
        )}
        <div ref={intersectionRef} />
      </List>
    </Container>
  );
}
