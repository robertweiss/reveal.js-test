import 'reveal.js/plugin/highlight/monokai.css';
import '/scss/vendor/reveal.scss';
import '/scss/style.scss';
import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.js';

const deck = new Reveal();
deck.initialize({
    controlsTutorial: false,
    hash: true,
    hashOneBasedIndex: true,
    respondToHashChanges: true,
    history: true,
    slideNumber: true,
    plugins: [RevealMarkdown, RevealHighlight]
});
