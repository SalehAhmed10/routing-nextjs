'use client';

import { usePathname } from 'next/navigation';

export default function ExampleClientComponent() {
    const pathname = usePathname();
    return <>Current pathname: {pathname}</>;
}