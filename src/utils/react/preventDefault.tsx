import React from 'react';

export default function PreventDefault<T extends (e: any) => void>(fn: T) {
    return <E extends React.SyntheticEvent<any>>(e: E) => {
        e.preventDefault();
        fn(e);
    }
}

