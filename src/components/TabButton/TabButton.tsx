type TabButtonProps = {
  children: string;
};

export const TabButton = ({ children }: TabButtonProps) => {
  return (
    <li>
      <button> {children} </button>
    </li>
  );
};
