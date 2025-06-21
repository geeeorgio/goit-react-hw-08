import s from "./GridItem.module.css";

const GridItem = ({ className, children }) => {
  return <li className={className ?? s.item}>{children}</li>;
};

export default GridItem;
