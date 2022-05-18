import { ReactNode, useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';

interface Props {
    children: ReactNode;
}

function Portal(props: Props) {
    const { children } = props;
    const ref = useRef<HTMLElement | undefined>();
    const [mounted, setMounted] = useState(false);

    // set container in useEffect to avoid SSR sync error
    useEffect(() => {
        ref.current = document.body;
        setMounted(true);
    }, []);

    return mounted && ref.current ? createPortal(children, ref.current) : null;
}

export { Portal };
