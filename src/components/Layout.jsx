import { Outlet } from 'react-router-dom';

import ThemeProvider from './ThemeProvider';

export default function Layout() {
  return (
    <ThemeProvider>
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  );
}
