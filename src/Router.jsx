import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Example from '@/pages/Example';
import Quiz from '@/pages/quiz';
import User from '@/pages/User';

export default function Router() {
  const location = useLocation();
  const { search } = location;

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          element={<Home />}
          index
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
          element={<Navigate to={{ pathname: '/', search }} />}
          path="*"
        />
      </Route>
    </Routes>
  );
}
