import React, { FunctionComponent, useEffect, useState } from "react";
import IPhotoResponse from "../../API/Response/IPhotoResponse";
import PhotoService from "../../API/services/PhotoService";
import TabContent from "../../components/TabContent/TabContent";
import TabItem from "../../components/TabItem/TabItem";
import AllPhotos from "../../components/AllPhotos/AllPhotos";
import "./Home.scss";
import UserPhotos from "../../components/UserPhotos/UserPhotos";

interface HomeProps { }
const Home: FunctionComponent<HomeProps> = () => {
    const [photos, setPhotos] = useState<Array<IPhotoResponse> | null>(null);
    const [lastPhoto, setLastPhoto] = useState<number>(50);
    const [activeTab, setActiveTab] = useState<string>("mainFeed");

    const handleSetLastPhoto = (number: number = 50) => {
        if (number === 0)
            setLastPhoto(50);
        if (number > 0)
            setLastPhoto(lastPhoto + number);
    }

    const handleSelectTab = (id: string) => {
        setActiveTab(id);
        setLastPhoto(50);
    }

    const getPhotos = async () =>
        await PhotoService.GetPhotos()
            .then<IPhotoResponse[]>(response => {
                if (response.status === 200) {
                    return response.data;
                }
                throw new Error("While fetching posts something went wrong!");
            })
            .then(response => setPhotos(response))
            .catch(error => {
                console.log(error);
            });

    useEffect(() => {
        getPhotos();
    }, [])

    return (
        <div className="Home">

            <div className="Tabs">
                <ul className="Tabs__Select">
                    <TabItem title="Main feed"
                        id="mainFeed"
                        activeTab={activeTab}
                        setActiveTab={handleSelectTab}
                    />
                    <TabItem title="User photos"
                        id="userPhotos"
                        activeTab={activeTab}
                        setActiveTab={handleSelectTab} />
                </ul>
                <div className="searchCard">
                    <TabContent id="mainFeed"
                        activeTab={activeTab}>
                        <AllPhotos lastPhoto={lastPhoto} photos={photos} handleSetLastPhoto={handleSetLastPhoto} />
                    </TabContent>

                    <TabContent id="userPhotos"
                        activeTab={activeTab}>
                        <UserPhotos lastPhoto={lastPhoto} photos={photos} handleSetLastPhoto={handleSetLastPhoto} />
                    </TabContent>
                </div>

            </div >
        </div>
    );
}

export default Home;