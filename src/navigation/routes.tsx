import type { ComponentType, JSX } from 'react';
import { MainPage } from '@/pages/main-page';
import { AllowsWrite } from '@/pages/allows-write';

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: '/', Component: MainPage },
  { path: '/allows-write', Component: AllowsWrite },
];
