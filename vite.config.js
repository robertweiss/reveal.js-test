import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import variables from './variables.json';

export default {
    plugins: [handlebars({
        context: variables,
        partialDirectory: [resolve(__dirname, 'slides'), resolve(__dirname, 'partials')],
        helpers: {
            code: function(value) {
                return `<pre><code data-trim data-noescape>${value.fn(this)}</code></pre>`;
            },
            md: function(value) {
                return `<div data-markdown>${value.fn(this)}</div>`;
            }
        }
    })],
}
