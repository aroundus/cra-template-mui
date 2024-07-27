import { Outlet } from 'react-router-dom';

import { ThemeProvider } from './ThemeProvider';

export function Layout() {
  return (
    <ThemeProvider>
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  );
}
