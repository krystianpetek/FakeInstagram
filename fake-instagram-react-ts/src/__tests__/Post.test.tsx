import React, { FC, useContext, useEffect } from "react";
import { screen, render } from '@testing-library/react';
import IPostResponse from "../API/Response/IPostResponse";
import ICommentResponse from "../API/Response/ICommentResponse";
import Post from "../components/Post/Post";

// const TestComponent: FC<{ post?: IPostRequest, comments?: ICommentResponse[] }> = ({ post, comments }) => {
//     const { addComment, addPost } = useContext<IPostContext>(PostContext);
//     useEffect(() => {
//         if (post)
//             addPost(post);

//         if (comments) {
//             comments.forEach((element) => {
//                 addComment(element);
//             })
//         };
//     });

//     const commentsRender = comments?.map((a) => {
//         return <li data-testid={`comment-${a.id}`} key={a.id}>
//             <p>{a.postId}</p>
//             <p>{a.name}</p>
//             <p>{a.email}</p>
//             <p>{a.body}</p>
//         </li>
//     });

//     return <>
//         <div data-testid="post">
//             <p>{post?.userId}</p>
//             <p>{post?.title}</p>
//             <p>{post?.body}</p>
//             <ul id='comments' data-testid='comments'>
//                 {commentsRender}
//             </ul>
//         </div>
//     </>
// };
describe('PostComponentTest', () => {
    it('Post rendered', () => {
        render(<Post post={mockPost} comments={mockPostComments}></Post>);
        const renderedTitle = screen.getByText(`${mockPost.title}`, { exact: false });
        const renderedBody = screen.getByText(`${mockPost.body}`, { exact: false });

        expect(renderedTitle).toBeInTheDocument();
        expect(renderedBody).toBeInTheDocument();
    });

    it('should be rendered 3 comments for post', () => {
        render(<Post post={mockPost} comments={mockPostComments}></Post>);
        const commentList = screen.getAllByTestId('comment', { exact: false });
        expect(commentList.length).toBe(3);
    });
});

const mockPost: IPostResponse = {
    "userId": 2,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
};

const mockPostComments: ICommentResponse[] = [
    {
        "postId": 2,
        "id": 6,
        "name": "et fugit eligendi deleniti quidem qui sint nihil autem",
        "email": "Presley.Mueller@myrl.com",
        "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium accusamus fugiat dicta voluptatem rerum ut voluptate autem voluptatem repellendus aspernatur dolorem in"
    },
    {
        "postId": 2,
        "id": 7,
        "name": "repellat consequatur praesentium vel minus molestias voluptatum",
        "email": "Dallas@ole.me",
        "body": "maiores sed dolores similique labore et inventore et quasi temporibus esse sunt id et eos voluptatem aliquam aliquid ratione corporis molestiae mollitia quia et magnam dolor"
    },
    {
        "postId": 2,
        "id": 8,
        "name": "et omnis dolorem",
        "email": "Mallory_Kunze@marie.org",
        "body": "ut voluptatem corrupti velit ad voluptatem maiores et nisi velit vero accusamus maiores voluptates quia aliquid ullam eaque"
    },
];
