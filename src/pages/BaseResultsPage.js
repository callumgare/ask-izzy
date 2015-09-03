/* @flow */

"use strict";

import React from 'react';
import Router from "react-router";
import _ from 'underscore';
import mui from "material-ui";
import reactMixin from "react-mixin";
import sessionstorage from "sessionstorage";

import * as iss from '../iss';
import categories from '../constants/categories';

/*::`*/@reactMixin.decorate(Router.Navigation)/*::`;*/
/*::`*/@reactMixin.decorate(Router.State)/*::`;*/
class BaseResultsPage extends React.Component {
    constructor(props: Object) {
        super(props);
        this.state = {};
    }

    /**
     * category:
     *
     * Return category information.
     */

    // flow:disable not supported yet
    get category(): categories.Category {
        if (this._category) {
            return this._category;
        }

        var category = _.findWhere(categories, {
            key: this.props.params.page,
        });

        if (category === undefined) {
            throw "No such category " + this.props.params.page;
        }

        this._category = category;
        return category;
    }

    // flow:disable not supported yet
    get title(): string {
        if (this.props.params.page) {
            return this.category.name;
        } else if (this.props.params.search) {
            return `"${this.props.params.search}"`;
        }
    }

    // flow:disable not supported yet
    get search(): string {
        if (this.props.params.page) {
            return this.category.search;
        } else if (this.props.params.search) {
            return this.props.params.search;
        }
    }

    // flow:disable not supported yet
    get results(): Array<iss.issService> {
        var objects;

        if (this.state.objects) {
            objects = Array.from(this.state.objects);
        } else {
            objects = [];
        }

        /* splice in an info box if it exists */
        try {
            var infobox = this.category.info;

            if (infobox) {
                objects.splice(1, 0, {
                    infobox: true,
                    node: infobox,
                });
            }
        } catch (e) {
        }

        return objects;
    }

    componentDidMount(): void {
        var request = this.search;

        // Build the search request
        // If we don't have enough information to build the search request
        // trigger the personalisation.
        for (var item of this.category.personalisation) {
            request = item.getSearch(request);

            if (!request) {
                this.replaceWith(this.getPath() + '/personalise');
            }
        }

        /* if we have coordinates add them to the request */
        /* FIXME: make this part of Location.getSearch() */
        var coordinates = null;
        try {
            coordinates = JSON.parse(sessionstorage.getItem('coordinates'));
        } catch (e) {
        }

        iss.search(this.search, null, coordinates)
            .then(data => {
                this.setState({
                    meta: data.meta,
                    objects: data.objects,
                    error: undefined,
                });
            })

            .catch(response => {
                try {
                    var data = JSON.parse(response.text);
                    this.setState({
                        error: data.error_message,
                    });
                } catch (e) {
                    this.setState({
                        error: `An error occurred (${response.status})`,
                    });
                }

            });
    }
}

export default BaseResultsPage;
