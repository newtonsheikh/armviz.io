interface Banner {
  foreground: string;
}

interface Header {
  foreground: string;
  background: string;
  border: string;
  hoverForeground: string;
  hoverBackground: string;
  activeForeground: string;
  activeBackground: string;
}

interface Sidebar {
  foreground: string;
  background: string;
  border: string;
  hoverForeground: string;
  hoverBackground: string;
  activeForeground: string;
}

interface Toolbar {
  foreground: string;
  background: string;
}

interface List {
  foreground: string;
  background: string;
  hoverForeground: string;
  hoverBackground: string;
}

interface ListTitle {
  foreground: string;
  background: string;
}

export interface Theme {
  accent: string;
  foreground: string;
  background: string;
  border: string;
  banner: Banner;
  header: Header;
  sidebar: Sidebar;
  toolbar: Toolbar;
  list: List;
  listHead: ListTitle;
}
