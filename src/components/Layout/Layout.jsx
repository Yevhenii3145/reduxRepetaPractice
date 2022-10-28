import { Outlet } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
// gggggg
import { increment, decrement } from '../../redux/myValue/slice'

import { AppBar } from "components/AppBar/AppBar";

export default function Layout() {
    const value = useSelector(state => state.myValue);
    const dispatch = useDispatch();

    return (
        <>
            <AppBar />
            <Outlet />
            <div style={{ fontSize: "40px" }}>
                {value}\
                <button onClick={() => dispatch(increment(100))}>Increment</button>
                <button onClick={() => dispatch(decrement(50))}>Decrement</button>
            </div>

        </>
    )
}
