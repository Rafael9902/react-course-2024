import "./Header.css";

type headerProps = {
  title: string;
};

export const Header = ({ title }: headerProps) => {
  return <h1>{title}</h1>;
};
