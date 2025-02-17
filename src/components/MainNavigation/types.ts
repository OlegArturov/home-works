interface IMainNavigationItem {
  title: string;
  path: string;
}

interface IMainNavigationItemProps {
  navItem: IMainNavigationItem;
}

export type { IMainNavigationItem, IMainNavigationItemProps };
