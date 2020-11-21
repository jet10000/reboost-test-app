const {
    start,
    builtInPlugins: {
        UsePlugin,
        FilePlugin,
        DefaultConfig
    }
} = require('reboost');
const ReactRefreshPlugin = require('@reboost/plugin-react-refresh');
const VuePlugin = require('@reboost/plugin-vue');
const SveltePlugin = require('@reboost/plugin-svelte');


start({
    entries: [
        ['./src/main.js', './public/dist/main.js'],
        ['./src/monaco/index.jsx', './public/dist/monaco.js'],
        // ['./src/react/index.jsx', './public/dist/react.js']
    ],
    contentServer: {
        root: './public',
        open: false
    },
    // commonJSInterop: {
    //     mode: 1
    // },
    plugins: [
        UsePlugin({
            include: /\.ttf/i,
            use: FilePlugin()
        }),
        UsePlugin({
            // The following regex enables fast refresh for files
            // with .js, .ts, .jsx or .tsx extensions
            // Feel free to use any regex for your files
            include: /\.[jt]sx?$/i,
            use: ReactRefreshPlugin()
        }),
        VuePlugin(),
        SveltePlugin(),
    ]
});
