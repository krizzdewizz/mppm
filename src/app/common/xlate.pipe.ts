import {Pipe, PipeTransform} from '@angular/core';

// data

const DEFAULT = {
    C_NAME: 'Name',
    C_YT_OR_VIDEO_ID: 'YouTube URL or Video ID',
    C_EDIT_TRACK: 'Edit track',
    C_ADD_TRACK: 'Add track',
    C_SAVE: 'Save',
    C_ADD: 'Add',
    C_SEARCH: 'Search',
    C_SEARCH_YT: 'Search in YouTube',
    C_DESCRIPTION: 'Description',
    C_DELETE: 'Delete',
    C_MARKER: 'Marker'
};

const GERMAN = {
    C_NAME: 'Name',
    C_YT_OR_VIDEO_ID: 'YouTube URL oder Video ID',
    C_EDIT_TRACK: 'Track bearbeiten',
    C_ADD_TRACK: 'Track hinzufügen',
    C_SAVE: 'Speichern',
    C_ADD: 'Hinzufügen',
    C_SEARCH: 'Suchen',
    C_SEARCH_YT: 'In YouTube suchen',
    C_DESCRIPTION: 'Beschreibung',
    C_DELETE: 'Löschen',
    C_MARKER: 'Marker'
};

// end data

const FALLBACK_LANG = 'en';
const SUPPORTED_LANGS = {
    en: DEFAULT,
    de: GERMAN
};

let cachedLang: string;

function getLang(): string {

    if (cachedLang) {
        return cachedLang;
    }

    let lang: string;
    const nav = window.navigator as NavigatorExt;

    if (nav.languages) {
        lang = firstSupported(nav.languages);
    }

    if (!lang) {
        lang = firstSupported([nav.userLanguage || nav.language]);
    }
    if (!lang) {
        lang = FALLBACK_LANG;
    }
    cachedLang = lang;
    return lang;
}

function firstSupported(languages: readonly string[]): string {
    let first: string;
    const n = languages.length;
    for (let i = 0; i < n && !first; i++) {
        first = isSupported(languages[i]);
    }
    return first;
}

function isSupported(lang: string): string {
    const langKey = lang.toLowerCase().substr(0, 2);
    return SUPPORTED_LANGS[langKey] ? langKey : undefined;
}

interface NavigatorExt extends Navigator {
    userLanguage: string;
    browserLanguage: string;
    systemLanguage: string;
}

@Pipe({
    name: 'xlate'
})
export class XlatePipe implements PipeTransform {

    transform(k: any, args?: any): any {
        const lcl = SUPPORTED_LANGS[getLang()];
        return lcl[k] || DEFAULT[k] || k;
        // return lcl[k] || k;
    }
}
