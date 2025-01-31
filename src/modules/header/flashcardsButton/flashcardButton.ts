import { doc, globals } from '../../globals/globals';

import flashcardsButtonStyles from './flashcardsButton.css?inline';

export const flashcardsButtonToggle = () => {
    if (globals.pluginConfig.headerFlashcardsButton) {
        flashcardsButtonLoad();
    } else {
        flashcardsButtonUnload();
    }
}

export const flashcardsButtonLoad = () => {
    const synchButton = doc.querySelector('.cp__file-sync-indicator');
    if (synchButton) {
    const flashcardsButton = doc.querySelector('.flashcards-nav');
    if (flashcardsButton) {
        synchButton.insertAdjacentElement('beforebegin', flashcardsButton);
    }
}
    logseq.provideStyle({ key: '--awUi-flashcardsButton-css', style: flashcardsButtonStyles });
}

export const flashcardsButtonUnload = () => {
    const graphButton = doc.querySelector('#left-sidebar .graph-view-nav');
    if (!graphButton) {
        return;
    }
    const flashcardsButton = doc.querySelector('.flashcards-nav');
    if (flashcardsButton) {
        graphButton.insertAdjacentElement('beforebegin', flashcardsButton);
    }
    doc.head.querySelector(`style[data-injected-style^="--awUi-flashcardsButton-css"]`)?.remove();
}
