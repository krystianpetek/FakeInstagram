import { FunctionComponent } from "react";

interface TabContentProps {
    id: string,
    activeTab: string,
    children: JSX.Element
}

const TabContent: FunctionComponent<TabContentProps> = ({ id, activeTab, children }) => {

    return (
        activeTab === id ? <div className="TabContent">
            {children}
        </div>
            : null
    );
};
export default TabContent;