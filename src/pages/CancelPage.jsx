import React, { Fragment, lazy, Suspense } from 'react';
import MasterLayout from '../components/masterLayout/MasterLayout';
import LazyLoader from '../components/masterLayout/LazyLoader';

const Cancel = lazy(() => import('../components/Canceled/Canceled'));

const CancelPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Cancel />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default CancelPage;
