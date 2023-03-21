import { render, screen } from "@testing-library/react";
import React, { FC, useEffect } from 'react';
import { useContext } from "react";
import IUserResponse from "../API/Response/IUserResponse";
import { IUserContext, UserContext } from "../contexts/UserContext/UserContext";
import { UserContextProvider } from "../contexts/UserContext/UserContextProvider";
import { IUserService } from "../API/services/UserService";

describe('UserContextProvider', () => {

  const TestComponent: FC<{ usersInput?: IUserResponse[] }> = ({ usersInput }) => {
    const { users, setUsers } = useContext<IUserContext>(UserContext);

    useEffect(() => {
      if (usersInput)
        setUsers(usersInput);
    }, []);

    const userRender = users?.map(element => {
      return <li key={element.id} id="usersList" data-testid='usersList'>
        <p>{element.name}</p>
        <p>{element.username}</p>
        <p>{element.phone}</p>
        <p>{element.email}</p>
      </li>
    })

    return <>
      <ul data-testid='users'>{userRender}</ul>
    </>
  };

  it('test component with userContext should be rendered', () => {
    render(<UserContextProvider userService={mockUserService} >
      <TestComponent />
    </UserContextProvider>);

    const postsRender = screen.getByTestId('users');
    expect(postsRender).toBeInTheDocument();
  });

  it('userContext should contain 2 users', () => {
    render(<UserContextProvider userService={mockUserService} >
      <TestComponent usersInput={mockUsers} />
    </UserContextProvider>);

    const items = screen.getAllByRole("listitem")
    expect(items.length).toBe(2)
  });

});

const mockUsers: IUserResponse[] = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
]

const mockUserService: IUserService = {
  GetUsers: function (): Promise<IUserResponse[]> {
    return new Promise<IUserResponse[]>(() => { });
  },
}