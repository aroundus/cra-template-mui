import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Layout from '@/components/Layout';
import Example from '@/pages/example';
import Main from '@/pages/main';
import Quiz from '@/pages/quiz';
import User from '@/pages/user';

export default function Router() {
  const location = useLocation();
  const { search } = location;

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
          element={<Navigate to={{ pathname: 'main', search }} />}
          path="*"
        />
      </Route>
    </Routes>
  );
}
