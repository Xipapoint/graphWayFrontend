import { routeConstants } from '@/shared/constants/routeConstants';
import Link from '@/shared/ui/Link/Link';
import LinkUnderline from '@/shared/ui/LinkUnderline/LinkUnderline';
import ResponsiveContainer from '@/shared/ui/ResponsiveContainers/ResponsiveContainerGap40';
import clsx from 'clsx';
import React, { memo } from 'react';
const NavBar = () => {
  const auth = true;
  //   async function handleLogOut(): Promise<
  //     MouseEventHandler<HTMLDivElement> | undefined
  //   > {
  //     const response = await AuthApi.logout();
  //     console.log(response);

  //     deleteItem('auth');
  //     deleteItem('UID');
  //     deleteItem('accessToken');

  //     return;
  //   }
  return (
    <div
      className={clsx(
        'sticky flex h-[10vh] w-full items-center justify-between bg-[#593d88] text-base font-semibold',
      )}
    >
      <ResponsiveContainer className="me-3 ms-3">
        <Link className="hidden sm:block" href={'/'}>
          GraphWay
        </Link>
      </ResponsiveContainer>

      <div className="flex items-center gap-3 sm:justify-around sm:gap-10 sm:text-lg">
        <LinkUnderline href={routeConstants.mode}>Create session</LinkUnderline>
        <LinkUnderline href={'/'}>Graphs</LinkUnderline>
        <LinkUnderline href={'/'}>News</LinkUnderline>
        <LinkUnderline href={'/'}>Feedback</LinkUnderline>
        <LinkUnderline href={'/'}>History</LinkUnderline>
      </div>

      <ResponsiveContainer className="me-3 ms-3">
        {auth ? (
          <>
            <LinkUnderline href={'/'}>Log out</LinkUnderline>
            <div>User</div>
            <div>Icon</div>
          </>
        ) : (
          <div>
            <LinkUnderline href={'/'}>Login</LinkUnderline>
          </div>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default memo(NavBar);
