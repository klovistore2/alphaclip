// components/AuthProvider.tsx
'use client'

import { SessionProvider } from 'next-auth/react'
import React from 'react'

export default function AuthProvider({
    children,
}: {
    children: React.ReactNode
}) {
    // Le composant SessionProvider fournit le contexte de session aux composants enfants
    return <SessionProvider>{children}</SessionProvider>
}