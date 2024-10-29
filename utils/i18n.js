const i18n = require('i18n');
const path = require('path');
const { DEFAULT_LOCALE, ALLOWED_LOCALE } = require('./constants');

i18n.configure({
    locales: ALLOWED_LOCALE,
    directory: path.join(__dirname, '..', 'locales'),
    defaultLocale: DEFAULT_LOCALE,
    queryParameter: 'lang',
    header: 'accept-language'
});

module.exports = i18n;
