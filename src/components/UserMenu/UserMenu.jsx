import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/user/userSlice';

export function UserMenu() {
    const dispatch = useDispatch();
    const login = useSelector(state => state.user.login)
    return (
        <div>
            {login}\
            <button onClick={() => dispatch(logOut())}>Log out</button>
        </div>
    )
}
