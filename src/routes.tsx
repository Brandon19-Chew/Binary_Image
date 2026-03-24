import Home from './pages/Home';
import Gallery from './pages/Gallery';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: <Home />
  },
  {
    name: 'Gallery',
    path: '/gallery',
    element: <Gallery />
  }
];

export default routes;
