import React from 'react'
import { useLogOutRedirect } from 'hooks/useLogOutRedirect';



export function DashboardPage() {
    useLogOutRedirect();

    return (
        <div>Dashboard Page</div>
    )
}
