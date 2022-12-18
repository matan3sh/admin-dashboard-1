import { FC } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useWidget } from "./useWidget";
import "./Widget.scss";

interface Props {
  type: "user" | "order" | "earning" | "balance";
}

const Widget: FC<Props> = ({ type }) => {
  const { data, amount, diff } = useWidget(type);

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data?.title}</span>
        <span className="counter">
          {data?.isMoney && "$"} {amount}
        </span>
        <span className="link">{data?.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>

        {data?.icon}
      </div>
    </div>
  );
};

export default Widget;
