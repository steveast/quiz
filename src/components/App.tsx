import { miniApp, retrieveLaunchParams, useLaunchParams, useSignal } from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MainPage } from '@/pages/main-page';
import { AllowsWrite } from '@/pages/allows-write';
import { useState } from 'react';
import { NotFound } from '@/pages/not-found';
import { InitData } from '@telegram-apps/types';

export interface IStore {
  store: InitData;
  setStore: (store: InitData) => void;
}

export function App() {
  const { initData } = retrieveLaunchParams();
  const lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);
  const [store, setStore] = useState<any>({...initData});

  return (
    <AppRoot
      appearance={isDark ? 'dark' : 'light'}
      platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
    >
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage store={store} setStore={setStore} />} />
          <Route path="/allows-write" element={<AllowsWrite store={store} setStore={setStore} />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </HashRouter>
    </AppRoot>
  );
}
