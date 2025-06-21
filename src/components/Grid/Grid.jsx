import s from "./Grid.module.css";

const Grid = ({ className, children }) => {
  return <ul className={className ?? s.list}>{children}</ul>;
};

export default Grid;
