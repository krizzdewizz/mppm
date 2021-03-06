import { Pipe, PipeTransform } from '@angular/core';

// tslint:disable:max-line-length

// data

const DEFAULT = {
    C_NAME: 'Title',
    C_YT_OR_VIDEO_ID: 'YouTube URL or Video ID',
    C_EDIT_TRACK: 'Edit Track',
    C_ADD_TRACK: 'Add Track',
    C_SAVE: 'Save',
    C_ADD: 'Add',
    C_SEARCH: 'Search',
    C_SEARCH_YT: 'Search in YouTube',
    C_DESCRIPTION: 'Description',
    C_DELETE: 'Delete',
    C_MARKER: 'Marker',
    C_IMPORT: 'Import Tracks',
    C_IMPORT_TRACKS: 'Import [countTracks] tracks',
    C_REMOVE_ALL_TRACKS: 'Remove All Tracks',
    C_EXPORT: 'Export Tracks',
    C_IMPORT_ERROR: 'The file could not be imported. Maybe it\'s not a previously exported MPP file.',
    C_INFO: 'Info',
    C_YT_SEARCH_ERROR: 'An error occurred while searching. Please try again later or visit YouTube and copy the video url manually.',
    C_APPEND: 'Append',
    C_REPLACE: 'Replace',
    C_LOCAL_AUDIO_FILE: 'Local Audio File',
    C_HELP_PLAY_PAUSE: 'Play / Pause',
    C_HELP_TO_START: 'To Beginning',
    C_HELP_BACKWARD: 'Backward',
    C_HELP_FORWARD: 'Forward',
    C_HELP_TO_MARKER: 'To Marker',
    C_HELP_PLAY_MARKER_BACKWARD: 'Marker Backward',
    C_HELP_MARKER_FORWARD: 'Marker Forward',
    C_HELP_ADD_MARKER: 'Add Marker',
    C_YT_DOWNLOAD_ERROR: 'An error occured while downloading the audio stream. Please try again later.'
};

const GERMAN = {
    C_NAME: 'Titel',
    C_YT_OR_VIDEO_ID: 'YouTube URL oder Video ID',
    C_EDIT_TRACK: 'Track bearbeiten',
    C_ADD_TRACK: 'Track hinzufügen',
    C_SAVE: 'Speichern',
    C_ADD: 'Hinzufügen',
    C_SEARCH: 'Suchen',
    C_SEARCH_YT: 'In YouTube suchen',
    C_DESCRIPTION: 'Beschreibung',
    C_DELETE: 'Löschen',
    C_MARKER: 'Marker',
    C_IMPORT: 'Tracks Importieren',
    C_IMPORT_TRACKS: 'Importiere [countTracks] Tracks',
    C_REMOVE_ALL_TRACKS: 'Alle Tracks entfernen',
    C_EXPORT: 'Tracks Exportieren',
    C_IMPORT_ERROR: 'Die Datei konnte nicht importiert werden. Vielleicht ist es keine zuvor exportierte MPP Datei.',
    C_INFO: 'Info',
    C_YT_SEARCH_ERROR: 'Bei der Suche ist ein Fehler aufgetreten. Bitte versuche es später nochmals oder gehe zu YouTube und kopiere die Video Url manuell.',
    C_APPEND: 'Anhängen',
    C_REPLACE: 'Ersetzen',
    C_LOCAL_AUDIO_FILE: 'Lokale Audio Datei',
    C_HELP_PLAY_PAUSE: 'Wiedergabe / Pause',
    C_HELP_TO_START: 'Zum Anfang',
    C_HELP_BACKWARD: 'Zurück',
    C_HELP_FORWARD: 'Vorwärts',
    C_HELP_TO_MARKER: 'Zum Marker',
    C_HELP_PLAY_MARKER_BACKWARD: 'Marker zurück',
    C_HELP_MARKER_FORWARD: 'Marker vorwärts',
    C_HELP_ADD_MARKER: 'Marker hinzufügen',
    C_YT_DOWNLOAD_ERROR: 'Beim Download des Audiostreams ist ein Fehler aufgetreten. Bitte versuchen sie es später nochmal.'
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

    const nav = window.navigator as NavigatorExt;
    const lang = firstSupported(nav.languages || []);
    return cachedLang = (lang || firstSupported([nav.userLanguage || nav.language]) || FALLBACK_LANG);
}

function firstSupported(languages: readonly string[]): string {
    let first: string;
    for (let i = 0, n = languages.length; i < n && !first; i++) {
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

@Pipe({ name: 'xlate' })
export class XlatePipe implements PipeTransform {
    transform(k: any, args?: any): any {
        const lcl = SUPPORTED_LANGS[getLang()];
        let msg = lcl[k] || DEFAULT[k] || k;

        if (args) {
            Object
                .keys(args)
                .forEach(key => msg = msg.replace(`[${key}]`, args[key]));
        }

        return msg;
    }
}
