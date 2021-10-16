import React from 'react';

const StopPropagation = <T extends (e: any) => void>(fn: T) => {
    return <E extends React.SyntheticEvent<any>>(e: E) => {
        e.stopPropagation();
        fn(e);

    }
};

export default StopPropagation;