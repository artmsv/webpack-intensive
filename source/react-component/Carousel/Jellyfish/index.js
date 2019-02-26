// Core
import React, { Component } from 'react';
import Loadable from 'react-loadable';

// Components
import { Loading } from '../../Loading';

const LoadableComponent = Loadable({
    loader: () => import(/* webpackChunkName: "jellyfish" */ './Component'),
    loading: Loading,
    delay: 2000,
});

export const Jellyfish = () => {
    return <LoadableComponent />;
};