import { doc, body } from '../globals/globals';

import './sidebars.css';

// Reposition right sidebar toggle button
export const rightSidebarLoad = () => {
    const toggleRightSidebar = doc.querySelector('#right-sidebar .toggle-right-sidebar');
    reorderRightSidebarToggleButton(toggleRightSidebar ? true : false);
    // Listen sidebar update
    logseq.App.onSidebarVisibleChanged(({visible}) => {
        onSidebarVisibleChangedCallback(visible);
    });
}

export const rightSidebarUnload = () => {
    const hideRightSidebarButton = doc.querySelector('#head .hide-right-sidebar-button');
    const rightToolbarPlaceholder = doc.querySelector('.cp__right-sidebar-topbar');
    if (rightToolbarPlaceholder && hideRightSidebarButton) {
        rightToolbarPlaceholder.insertAdjacentElement('beforeend', hideRightSidebarButton);
    }}

export const reorderRightSidebarToggleButton = (visible: boolean) => {
    if (visible) {
        const hideRightSidebarButton = doc.querySelector('#right-sidebar .toggle-right-sidebar');
        hideRightSidebarButton?.classList.add('hide-right-sidebar-button')
        const headToolbar = doc.querySelector('#head .r');
        if (headToolbar && hideRightSidebarButton) {
            headToolbar.insertAdjacentElement('beforeend', hideRightSidebarButton);
        }
    } else {
        doc.querySelector('#head .hide-right-sidebar-button')?.remove();
    }
}

export const origRightSidebarToggleButton = (visible: boolean) => {
    if (visible) {
        const hideRightSidebarButton = doc.querySelector('#right-sidebar .toggle-right-sidebar');
        const headToolbar = doc.querySelector('.cp__right-sidebar-topbar');
        if (headToolbar && hideRightSidebarButton) {
            headToolbar.insertAdjacentElement('beforeend', hideRightSidebarButton);
        }
    }// else {
    //     doc.querySelector('#head .hide-right-sidebar-button')?.remove();
    // }
}

// Sidebar toggled
const onSidebarVisibleChangedCallback = (visible: boolean) => {
    if (!body.classList.contains('is-awUi-enabled')) {
        return;
    }
    reorderRightSidebarToggleButton(visible);
}
