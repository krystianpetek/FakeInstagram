import { FunctionComponent, useState } from "react";
import TabContent from "../TabContent/TabContent";
import TabItem from "../TabItem/TabItem";
import SearchAlbums from "./SearchAlbums/SearchAlbums";
import SearchPhotos from "./SearchPhotos/SearchPhotos";
import SearchUsers from "./SearchUsers/SearchUsers";
import "./Tabs.scss";

interface TabsProps { }
const Tabs: FunctionComponent<TabsProps> = () => {
    const [activeTab, setActiveTab] = useState<string>("users");

    const handleSelectTab = (id: string) => {
        setActiveTab(id);
    };

    return (
        <div className="Tabs">
            <ul className="Tabs__Select">
                <TabItem title="Search users"
                    id="users"
                    activeTab={activeTab}
                    setActiveTab={handleSelectTab}
                />
                <TabItem title="Search photos"
                    id="photos"
                    activeTab={activeTab}
                    setActiveTab={handleSelectTab} />
                <TabItem title="Search albums"
                    id="albums"
                    activeTab={activeTab}
                    setActiveTab={handleSelectTab} />
            </ul>
            <div className="searchCard">
                <TabContent id="users"
                    activeTab={activeTab}>
                    <SearchUsers />
                </TabContent>
                <TabContent id="photos"
                    activeTab={activeTab}>
                    <SearchPhotos />
                </TabContent>
                <TabContent id="albums"
                    activeTab={activeTab}>
                    <SearchAlbums />
                </TabContent>
            </div>
        </div>
    );
};
export default Tabs;