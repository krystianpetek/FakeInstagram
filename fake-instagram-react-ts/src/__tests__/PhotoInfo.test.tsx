import React from "react";
import { screen, render } from '@testing-library/react';
import PhotoInfo from "../components/PhotoInfo/PhotoInfo";
import IPhotoResponse from "../API/Response/IPhotoResponse";

let mockPhoto: IPhotoResponse = {
    albumId: 1,
    id: 13,
    title: "repudiandae iusto deleniti rerum",
    url: "https://via.placeholder.com/600/197d29",
    thumbnailUrl: "https://via.placeholder.com/150/197d29"
};

describe('should render PhotoInfo component', () => {

    it('information about photo exists on screen', () => {
        render(<PhotoInfo photo={mockPhoto}></PhotoInfo>);
        const renderThumbnail: HTMLDivElement = screen.getByText(mockPhoto.thumbnailUrl);
        const renderTitle: HTMLDivElement = screen.getByText(mockPhoto.title);
        const renderId: HTMLDivElement = screen.getByText((content) => content.endsWith(`${mockPhoto.id}`));
        const renderAlbumId = screen.getByText((content) => content.endsWith(`${mockPhoto.albumId}`));

        expect(renderThumbnail.textContent).toEqual(mockPhoto.thumbnailUrl);
        expect(renderTitle.textContent).toEqual(mockPhoto.title);
        expect(renderId.textContent).toEqual(`ID: ${mockPhoto.id}`);
        expect(renderAlbumId.textContent).toEqual(`AlbumId: ${mockPhoto.albumId}`);
    });

    it('photo exists on screen', () => {
        render(<PhotoInfo photo={mockPhoto}></PhotoInfo>);
        const renderImage: HTMLImageElement = screen.getByAltText(mockPhoto.title);
        expect(renderImage.src).toEqual(mockPhoto.url);
        expect(renderImage).toBeInTheDocument();
    })
});