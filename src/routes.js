/* @flow */

import React from "react";
import Router from 'react-router';

import BasePage from "./pages/BasePage";
import BrandedPage from "./pages/BrandedPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LocationPage from "./pages/LocationPage";
import ResultsListPage from "./pages/ResultsListPage";
import ResultsMapPage from "./pages/ResultsMapPage";
import ServicePage from "./pages/ServicePage";

import StyleGuideList from "./pages/StyleGuideList";
import StyleGuideItem from "./pages/StyleGuideItem";

export default <Router.Route
        name="_root"
        path="/"
        handler={BasePage}
    >
        <Router.Route
            name="styleguideItem"
            path="/styleGuide/component/:componentName"
            handler={StyleGuideItem}
        />
        <Router.Route
            name="styleguideList"
            path="/styleGuide*"
            handler={StyleGuideList}
        />

        <Router.Route
            name="_branded"
            path="/"
            handler={BrandedPage}
        >
            <Router.Route
                name="home"
                path="/"
                handler={HomePage}
            />
            <Router.Route
                name="category"
                path="/category/:page"
                handler={ResultsListPage}
            />
            <Router.Route
                name="category_map"
                path="/category/:page/map"
                handler={ResultsMapPage}
            />
            <Router.Route
                name="search"
                path="/search/:search"
                handler={ResultsListPage}
            />
            <Router.Route
                name="search_map"
                path="/search/:search/map"
                handler={ResultsMapPage}
            />
            <Router.Route
                name="service"
                path="/service/:id"
                handler={ServicePage}
            />
            <Router.Route
                name="location"
                path="/personalise/location"
                handler={LocationPage}
            />

            <Router.DefaultRoute handler={ErrorPage}/>
        </Router.Route>
    </Router.Route>;
