import { FunctionComponent } from "react";

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
            onClick={handleClick}
            className={activeTab === id ? "active" : ""}>
            {title}
        </li>
    );
};
export default TabItem;