const i18n = require('i18n');
const path = require('path');

i18n.configure({
    locales: ['en', 'da'],
    directory: path.join(__dirname, '..', 'locales'),
    defaultLocale: 'da',
    queryParameter: 'lang',
    header: 'accept-language'
});

module.exports = i18n;
