/* @flow */

import React from "react";

class HtmlDocument extends React.Component {

    // flow:disable not supported yet
    static propTypes = {
        css: React.PropTypes.arrayOf(React.PropTypes.string),
        markup: React.PropTypes.string.isRequired,
        script: React.PropTypes.arrayOf(React.PropTypes.string),

        // meta tags, title, etc.
        currentUrl: React.PropTypes.string,
        description: React.PropTypes.string,
        siteName: React.PropTypes.string,
        title: React.PropTypes.string,
    };

    // flow:disable not supported yet
    static defaultProps = {
        script: [],
        css: [],
        meta: {},
    };

    render(): ReactElement {
        var { markup, script, css } = this.props;
        var {
            title,
            description,
            siteName,
            currentUrl,
        } = this.props;
        var vp = "width=device-width, initial-scale=1.0, user-scalable=no";
        var issconfig = 'var ISS_URL = "' + process.env.ISS_URL + '";';
        var GOOGLE_KEY = process.env.GOOGLE_KEY;

        /* eslint-disable max-len */
        var gmapsApi = `//maps.googleapis.com/maps/api/js?key=${GOOGLE_KEY}&libraries=places`;
        /* eslint-enable max-len */

        return (
<html >
    <head>
        <meta
            name="viewport"
            content={vp}
        />

        <title>{title}</title>

        <meta
            name="description"
            content={description}
        />
        <meta
            property="og:type"
            content="website"
        />
        <meta
            property="og:site_name"
            content={siteName}
        />
        <meta
            property="og:title"
            content={title}
        />
        <meta
            property="og:description"
            content={description}
        />
        <meta
            property="og:url"
            content={currentUrl}
        />

        {css.map((href, k) =>
            <link
                key={k}
                rel="stylesheet"
                type="text/css"
                href={href}
            />)
        }

        <link rel="stylesheet"
            type="text/css"
            href="//cloud.typography.com/7948374/730248/css/fonts.css"
        />

        <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/static/favicons/apple-touch-icon-57x57.png"
        />
        <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/static/favicons/apple-touch-icon-60x60.png"
        />
        <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/static/favicons/apple-touch-icon-72x72.png"
        />
        <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/static/favicons/apple-touch-icon-76x76.png"
        />
        <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/static/apple-touch-icon-114x114.png"
        />
        <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/static/apple-touch-icon-120x120.png"
        />
        <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/static/apple-touch-icon-144x144.png"
        />
        <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/static/apple-touch-icon-152x152.png"
        />
        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/apple-touch-icon-180x180.png"
        />
        <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/static/apple-touch-icon-114x114.png"
        />
        <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/static/apple-touch-icon-120x120.png"
        />
        <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/static/apple-touch-icon-144x144.png"
        />
        <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/static/apple-touch-icon-152x152.png"
        />
        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/apple-touch-icon-180x180.png"
        />
        <link
            rel="icon"
            type="image/png"
            href="/static/favicons/favicon-32x32.png"
            sizes="32x32"
        />
        <link
            rel="icon"
            type="image/png"
            href="/static/favicons/favicon-96x96.png"
            sizes="96x96"
        />
        <link
            rel="icon"
            type="image/png"
            href="/static/favicons/favicon-16x16.png"
            sizes="16x16"
        />
        <link
            rel="icon"
            type="image/png"
            href="/static/favicons/android-chrome-192x192.png"
            sizes="192x192"
        />
        <link
            rel="icon"
            type="image/png"
            href="/static/favicons/android-chrome-192x192.png"
            sizes="192x192"
        />
        <link
            rel="manifest"
            href="/static/favicons/manifest.json"
        />
        <link
            rel="shortcut icon"
            href="/static/favicons/favicon.ico"
        />
        <meta
            name="apple-mobile-web-app-title"
            content="Ask Izzy"
        />
        <meta
            name="application-name"
            content="Ask Izzy"
        />
        <meta
            name="msapplication-TileColor"
            content="#da532c"
        />
        <meta
            name="msapplication-config"
            content="/static/favicons/browserconfig.xml"
        />
        <meta
            name="theme-color"
            content="#ffffff"
        />
        <meta
            name="msapplication-TileImage"
            content="/static/favicons/mstile-144x144.png"
        />
    </head>

    <body>
        <div
            id="root"
            dangerouslySetInnerHTML={{__html: markup}}
        />
        <script dangerouslySetInnerHTML={{__html: issconfig}} />
        {script.map((src, k) =>
            <script
                key={k}
                src={src}
            />
        )}

        <script src={gmapsApi}>
        </script>
    </body>
</html>
        );
    }
}

export default HtmlDocument;
