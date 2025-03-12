import { miniApp, useLaunchParams, useSignal } from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { routes } from '@/navigation/routes.tsx';
import { useEffect } from 'react';
import Sender from '@/helpers/Sender.ts';

export function App() {
  const lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);
  
  if (lp.startParam) {
    try {
      const data = atob(lp.startParam as string);
      console.log(JSON.parse(data));
    } catch (e) {
      console.log(e);
    }
  }
  
  useEffect(() => {
    new Sender('web_app_request_write_access').send();
  }, []);

  return (
    <AppRoot
      appearance={isDark ? 'dark' : 'light'}
      platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
    >
      <HashRouter>
        <Routes>
          {routes.map((route) => <Route key={route.path} {...route} />)}
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </HashRouter>
    </AppRoot>
  );
}
