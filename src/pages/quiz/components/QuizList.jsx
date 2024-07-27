import { List, ListItem, Typography } from '@mui/material';

export function QuizList({ children, quizzes = [] }) {
  return (
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
      {children}
    </List>
  );
}
