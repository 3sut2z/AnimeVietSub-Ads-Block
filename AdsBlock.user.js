// ==UserScript==
// @name         Animevietsub Ads Blocker
// @version      20.0.1
// @icon         data:image/png;base64,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
// @description  Chặn quảng cáo, tracker, cookie bên thứ 3, tự động đóng ad và mở khóa UI diện rộng.
// @author       AnTay
// @license      MIT

// @match        *://animevietsub.bz/*
// @match        *://*.googleapiscdn.com/8

// @grant        GM_addStyle

// @run-at       document-start
// @downloadURL  https://github.com/3sut2z/AnimeVietSub-Ads-Block/raw/main/AdsBlock.user.js
// @updateURL    https://github.com/3sut2z/AnimeVietSub-Ads-Block/raw/main/AdsBlock.user.js
// ==/UserScript==

(function() {
    'use strict';

    const bypassLogic = () => {

        const smartTVHandler = {
            get: function(target, prop) {
                return prop === 'SmartTV' ? () => true : target[prop];
            }
        };
        window.is = new Proxy(window.is || {}, smartTVHandler);

        window.createPopupAndRedirect = function() { return false; };
        window.markPopupAsOpened = function() { return true; };

        try {
            const originalCookie = document.__lookupGetter__('cookie');
            Object.defineProperty(document, 'cookie', {
                get: function() {
                    const c = originalCookie.call(document);
                    return c.includes('popupOpened=true') ? c : (c ? c + '; popupOpened=true' : 'popupOpened=true');
                },
                set: function(val) {
                    return val; // Chặn việc web cố tình set popupOpened=false
                }
            });
        } catch (e) {}
    };

    const lockSystem = () => {
        const BLACKLIST = ['bom88', 'rikvip', 'five88', 'ball88', 'yo88', 'hitclub', 'min88', 'nhatvip', 'sunwin', 'go88', 'haywin', 'p3'];

        const originalOpen = window.open;
        window.open = function(url, target, features) {
            if (!url) return null;
            const lowUrl = url.toLowerCase();
            if (BLACKLIST.some(d => lowUrl.includes(d))) {
                console.warn('[Shield] Đã chặn đứng cửa sổ quảng cáo:', url);
                return null;
            }

            window.location.href = url;
            return null;
        };

        Object.defineProperty(window, 'open', { configurable: false, writable: false });
    };

    document.addEventListener('click', function(e) {
        const target = e.target.closest('a, [onclick], button');
        if (target) {
            const href = (target.href || "").toLowerCase();
            const onClick = (target.getAttribute('onclick') || "").toLowerCase();
            const badKeywords = ['bom88', 'rikvip', 'five88', 'ball88', 'yo88', 'sunwin'];

            if (badKeywords.some(k => href.includes(k) || onClick.includes(k))) {
                e.preventDefault();
                e.stopImmediatePropagation();
                target.remove();
                return false;
            }

            if (target.tagName === 'A' && target.target === '_blank') {
                target.target = '_self';
            }
        }
    }, true);

    GM_addStyle(`
        #pc-catfixx, #mobile-catfish-top, #mobile-catfixx,
        .header-ads-pc, .header-ads-mobile, .below-player, .below-playerm,
        #avs-pause-ad, #avs-pause-ad-box, iframe[src*="bom88"], iframe[src*="rikvip"],
        a[href*="bom88"], a[href*="rikvip"], a[href*="five88"],
        div[class*="ads-"], .ads-container {
            display: none !important;
            visibility: hidden !important;
            height: 0 !important;
            pointer-events: none !important;
        }
        body, html {
            overflow: auto !important;
            pointer-events: auto !important;
            user-select: auto !important;
        }
    `);

    const observer = new MutationObserver(() => {

        const closeWords = ['ĐÓNG', 'TẮT', 'CLOSE', 'SKIP', '×'];
        document.querySelectorAll('button, span, div[role="button"]').forEach(btn => {
            if (closeWords.includes(btn.innerText.trim().toUpperCase())) {
                const s = window.getComputedStyle(btn);
                if (s.display !== 'none' && parseInt(s.zIndex) > 0) btn.click();
            }
        });

        document.querySelectorAll('div').forEach(div => {
            const z = parseInt(window.getComputedStyle(div).zIndex);
            if (z > 500 && !div.querySelector('video') && !div.id.includes('player')) {
                div.remove();
            }
        });
    });

    bypassLogic();
    lockSystem();
    observer.observe(document.documentElement, { childList: true, subtree: true });

    window.addEventListener('contextmenu', e => e.stopPropagation(), true);
    window.addEventListener('keydown', e => {
        if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74))) {
            e.stopPropagation();
        }
    }, true);

})();
