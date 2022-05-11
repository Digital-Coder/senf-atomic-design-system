/** @format */
import { MouseEventHandler } from "react";
export interface ListProps {
    CardType?: React.ReactNode;
    data?: Array<string>;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
