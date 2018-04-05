export type TreeNode<T> = T & {
  expanded?: boolean;
  children?: Array<TreeNode<T>>;
};

export type FlatTreeNode<T> = T & {
  depth: number;
  expanded?: boolean;
  next?: number;
};

export type TreeNodes<T> = Array<TreeNode<T>>;

export type FlatTreeNodes<T> = Array<FlatTreeNode<T>>;
