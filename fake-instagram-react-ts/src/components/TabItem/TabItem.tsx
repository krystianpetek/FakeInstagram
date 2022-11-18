import { FunctionComponent } from "react";
import "./TabItem.scss"

interface TabItemProps {
    id: string,
    title: string,
    activeTab: string,
    setActiveTab: (id: string) => void
}
const TabItem: FunctionComponent<TabItemProps> = ({ id, title, activeTab, setActiveTab }) => {
    const handleClick = () => {
        setActiveTab(id);
    };

    return (
        <li
            className={`TabItem ${activeTab === id ? "active" : ""}`}
            onClick={handleClick}>
            {title}
        </li>
    );
};
export default TabItem;