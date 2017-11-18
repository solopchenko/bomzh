/**
 * Facebook service provider
 */

export default {
    counterUrl: 'https://graph.facebook.com/?id={url}&callback=?',
    convertNumber: (data) => data.share.share_count,
    popupUrl: 'https://www.facebook.com/sharer/sharer.php?u={url}',
    popupWidth: 600,
    popupHeight: 500,
    svgIconPath: '5.9 16h3.3V8h2.2l.3-2.8H9.2V3.8c0-.7.1-1.1 1.1-1.1h1.4V0H9.5C6.9 0 5.9 1.3 5.9 3.6v1.7H4.3V8H6v8zz',
};
