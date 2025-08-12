import React, { Fragment } from 'react';

const LazyLoader = () => {
    return (
        <Fragment>
            <div className='LoadinOverlay'>
                <div className='Line-Progress'>
                    <div className='indeterminate'></div>

                </div>
            </div>
            
        </Fragment>
    );
};

export default LazyLoader;