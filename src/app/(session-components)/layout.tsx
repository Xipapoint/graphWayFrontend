import { SessionComponentStoreProvider } from '@/shared/lib/redux/providers/SessionComponentProvider';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <SessionComponentStoreProvider>
        <div className="h-[100vh] w-[100vw]">{children}</div>
      </SessionComponentStoreProvider>
    </ErrorBoundary>
  );
}
