import { render, screen } from "@testing-library/react";
import React, { FC, useEffect } from 'react';
import { ILoginContext, LoginContext } from "../contexts/LoginContext/LoginContext";
import { LoginContextProvider } from "../contexts/LoginContext/LoginContextProvider";
import { useContext } from "react";


describe('LoginContextProvider', () => {

  const TestComponent: FC<{ name?: string, email?: string }> = (props) => {
    const { email, setEmail, username, setUsername } = useContext<ILoginContext>(LoginContext);

    useEffect(() => {
      setUsername(props.name ?? '');
      setEmail(props.email ?? '')
    }, []);

    return <>
      <p data-testid='username'>{username}</p>
      <p data-testid='email'>{email}</p>
    </>
  };

  it('user isn\'t logged', () => {
    render(<LoginContextProvider>
      <TestComponent />
    </LoginContextProvider>);

    const renderUser = screen.getByTestId('username');
    const renderEmail = screen.getByTestId('email');

    expect(renderUser.textContent).toEqual('');
    expect(renderEmail.textContent).toEqual('');
  });

  it('user logged as "krystian"', () => {
    render(<LoginContextProvider>
      <TestComponent name="krystian" email="petek@wsei.tempmail.pl" />
    </LoginContextProvider>);

    const renderUser = screen.getByTestId('username');
    const renderEmail = screen.getByTestId('email');

    expect(renderUser.textContent).toEqual('krystian');
    expect(renderEmail.textContent).toEqual('petek@wsei.tempmail.pl');
  });

});