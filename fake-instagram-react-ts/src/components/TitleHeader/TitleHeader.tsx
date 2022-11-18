import { FunctionComponent } from "react";
import "./TitleHeader.scss";

interface TitleHeaderProps {
    title: string
}
const TitleHeader: FunctionComponent<TitleHeaderProps> = (props) => {
    return (
        <h1 className="TitleHeader">{props.title}</h1>
    );
}

export default TitleHeader;