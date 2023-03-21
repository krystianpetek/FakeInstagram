import { render, screen } from "@testing-library/react";
import React, { FC, useEffect, useContext } from 'react';
import { IPostContext, PostContext } from "../contexts/PostContext/PostContext";
import { PostContextProvider } from "../contexts/PostContext/PostContextProvider";
import ICommentResponse from "../API/Response/ICommentResponse";
import IPostResponse from "../API/Response/IPostResponse";
import { IPostService } from "../API/services/PostService";
import { ICommentService } from "../API/services/CommentService";

describe('PostContextProvider', () => {
    const TestComponent: FC<{ commentsProps?: ICommentResponse[], postsProps?: IPostResponse[] }> = ({ postsProps, commentsProps }) => {
        const { addComment, addPost } = useContext<IPostContext>(PostContext);
        useEffect(() => {
            if (postsProps?.length) {
                postsProps.forEach(element => {
                    addPost(element);
                });
            }

            if (commentsProps) {
                commentsProps.forEach((element) => {
                    addComment(element);
                })
            };

        });
        const postsRender = postsProps?.map((a) => {
            return <li id={`${a.id}`} key={a.id}>
                <p>{a.userId}</p>
                <p>{a.title}</p>
                <p>{a.body}</p>
            </li>
        });

        const commentsRender = commentsProps?.map((a) => {
            return <li data-testid={`comment-${a.id}`} key={a.id}>
                <p>{a.postId}</p>
                <p>{a.name}</p>
                <p>{a.email}</p>
                <p>{a.body}</p>
            </li>
        });

        return <>
            <ul id="posts" data-testid='posts'>
                {postsRender}
            </ul>
            <ul id='comments' data-testid='comments'>
                {commentsRender}
            </ul>
        </>
    };

    it('posts list and comments list should be rendered', () => {
        render(<PostContextProvider postService={mockPostService} commentService={mockCommentService}>
            <TestComponent />
        </PostContextProvider>);

        const postsRender = screen.getByTestId('posts');
        expect(postsRender).toBeInTheDocument();

        const commentsRender = screen.getByTestId('comments');
        expect(commentsRender).toBeInTheDocument();

    });

    it('posts list should contain 5 elements', async () => {
        render(<PostContextProvider postService={mockPostService} commentService={mockCommentService}>
            <TestComponent postsProps={mockPosts} />
        </PostContextProvider>);

        const items = await screen.findAllByRole("listitem")
        expect(items.length).toBe(5)

        // const listItem = screen.getAllByTestId((content) => content.startsWith(`posts`));
        // expect(screen.getByText((context) => context.startsWith('posts'))).toEqual(5);
        // expect(listItem).toEqual(5);
    });

    it('comments list should contain 4 elements', async () => {
        render(<PostContextProvider postService={mockPostService} commentService={mockCommentService}>
            <TestComponent commentsProps={mockComments} />
        </PostContextProvider>);

        const items = await screen.findAllByRole("listitem")
        expect(items.length).toBe(4)
    });

    it('in posts and comments lists together should be 9 elements', async () => {
        render(<PostContextProvider postService={mockPostService} commentService={mockCommentService}>
            <TestComponent postsProps={mockPosts} commentsProps={mockComments} />
        </PostContextProvider>);

        const items = await screen.findAllByRole("listitem")
        expect(items.length).toBe(9)
    });
});

const mockPostService: IPostService = {
    CreatePost: function (): Promise<IPostResponse> {
        return new Promise<IPostResponse>(() => { });
    },
    DeletePost: function (): Promise<void> {
        return new Promise<void>(() => { });

    },
    GetPosts: function (): Promise<IPostResponse[]> {
        return new Promise<IPostResponse[]>(() => { });
    },
}

const mockCommentService: ICommentService = {
    GetComments: function (): Promise<ICommentResponse[]> {
        return new Promise<ICommentResponse[]>(() => { });
    },
    CreateComment: function (): Promise<ICommentResponse> {
        return new Promise<ICommentResponse>(() => { });
    },
    DeleteComment: function (): Promise<void> {
        return new Promise<void>(() => { });
    }
}

const mockPosts: IPostResponse[] = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        "userId": 1,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
];

const mockComments: ICommentResponse[] = [
    {
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
        "postId": 1,
        "id": 2,
        "name": "quo vero reiciendis velit similique earum",
        "email": "Jayne_Kuhic@sydney.com",
        "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
        "postId": 1,
        "id": 3,
        "name": "odio adipisci rerum aut animi",
        "email": "Nikita@garfield.biz",
        "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    },
    {
        "postId": 1,
        "id": 5,
        "name": "vero eaque aliquid doloribus et culpa",
        "email": "Hayden@althea.biz",
        "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
    },
]