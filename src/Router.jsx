import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from '@/components/Layout';
import Example from '@/pages/example';
import Main from '@/pages/main';
import Quiz from '@/pages/quiz';
import User from '@/pages/user';

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          element={<Main />}
          path="main"
        />
        <Route
          element={<Example />}
          path="example"
        />
        <Route
          element={<Quiz />}
          path="quiz"
        />
        <Route
          element={<User />}
          path="user"
        />
        <Route
          path="*"
          element={<Navigate to="main" />}
        />
      </Route>
    </Routes>
  );
}
