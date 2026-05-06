// ==UserScript==
// @name         Animevietsub Ads Blocker
// @version      18.0.0
// @vesion        data:image/png;base64,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
// @description  Chặn quảng cáo, tracker, cookie bên thứ 3, tự động đóng ad và mở khóa UI diện rộng.
// @author       AnTay
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // 1. DANH SÁCH ĐEN TOÀN DIỆN (Domains & Keywords)
    const BLACKLIST_DOMAINS = [
        'five88', 'ball88', 'yo88', 'hitclub', 'gemwin', 'zowin', 'min88', '6789x', 'nhatvip', 
        'haywin', 'sunwin', 'rikvip', 'go88', '789club', 'iwin', 'oxbet', 'lucky88', 'debet',
        'google-analytics', 'googletagmanager', 'facebook.net', 'doubleclick', 'histats', 
        'onclickalgo', 'mobiads', 'popads', 'adnxs', 'criteo', 'pubmatic', 'animevietsubapp'
    ];

    const AD_KEYWORDS = ['utm_source', 'utm_medium', 'catfish', 'popunder', 'ads-server', 'banner'];

    // 2. PRIVACY & ANTI-TRACKING (Chặn Cookie & Storage bên thứ 3)
    const initPrivacyGuard = () => {
        // Chặn Cookie bên thứ ba
        const originalCookie = document.__lookupSetter__('cookie');
        document.__defineSetter__('cookie', function(val) {
            if (BLACKLIST_DOMAINS.some(d => val.toLowerCase().includes(d))) return;
            return originalCookie.call(document, val);
        });

        // Vô hiệu hóa Tracking APIs
        const noop = () => {};
        window.ga = window.fbq = window.gtag = noop;
        
        // Chặn ghi đè LocalStorage từ domain rác
        const originalSetItem = localStorage.setItem;
        localStorage.setItem = function(key, value) {
            if (AD_KEYWORDS.some(k => key.toLowerCase().includes(k))) return;
            originalSetItem.apply(this, arguments);
        };
    };

    // 3. CORE CLEANING ENGINE (Heuristic & Pattern Matching)
    function heavyCleaning() {
        // A. Xử lý các phần tử dựa trên URL (Link, Ảnh, Iframe)
        const selectors = 'a[href], img[src], iframe[src], source[src]';
        document.querySelectorAll(selectors).forEach(el => {
            const url = (el.href || el.src || "").toLowerCase();
            if (BLACKLIST_DOMAINS.some(d => url.includes(d)) || AD_KEYWORDS.some(k => url.includes(k))) {
                const container = el.closest('div, section, center, ins, aside, #avs-pause-ad') || el;
                container.remove();
            }
        });

        // B. Tự động click các nút "Đóng/Xong/Bỏ qua"
        const closeWords = ['đóng', 'tắt', 'close', 'skip', 'bỏ qua', '×', 'resume'];
        document.querySelectorAll('button, span, a, div[role="button"]').forEach(el => {
            const txt = el.innerText ? el.innerText.toLowerCase().trim() : "";
            const isAdBtn = el.className && typeof el.className === 'string' && el.className.includes('ad-');
            
            if (closeWords.some(w => txt.includes(w)) || isAdBtn) {
                const style = window.getComputedStyle(el);
                if (style.display !== 'none' && parseInt(style.zIndex) > 5) {
                    if (typeof el.click === 'function') el.click();
                }
            }
        });

        // C. Phá hủy các lớp phủ (Overlay Fix)
        document.querySelectorAll('div').forEach(div => {
            const style = window.getComputedStyle(div);
            if (parseInt(style.zIndex) > 99 && style.position === 'fixed') {
                if (!div.querySelector('video') && !div.querySelector('canvas') && !div.id.includes('player')) {
                    if (style.backgroundColor.includes('rgba(0, 0, 0') || style.opacity < 1) {
                        div.remove();
                    }
                }
            }
        });

        // D. Mở khóa UI tuyệt đối (Scroll & Click)
        const forceUnlock = (el) => {
            if (!el) return;
            if (window.getComputedStyle(el).overflow === 'hidden') {
                el.style.setProperty('overflow', 'auto', 'important');
            }
            el.style.setProperty('pointer-events', 'auto', 'important');
            el.style.setProperty('user-select', 'auto', 'important');
            el.style.setProperty('filter', 'none', 'important');
        };
        forceUnlock(document.body);
        forceUnlock(document.documentElement);
    }

    // 4. ANTI-POPUP & POPUNDER
    const blockPopups = () => {
        const originalOpen = window.open;
        window.open = function(url) {
            if (!url) return originalOpen.apply(this, arguments);
            const lowUrl = url.toLowerCase();
            if (BLACKLIST_DOMAINS.some(d => lowUrl.includes(d)) || AD_KEYWORDS.some(k => lowUrl.includes(k))) {
                console.log("%c[Shield] Popup Blocked:", "color: yellow", url);
                return null;
            }
            return originalOpen.apply(this, arguments);
        };
        
        // Vô hiệu hóa các hàm redirect tùy chỉnh của web
        window.createPopupAndRedirect = () => false;
    };

    // 5. THỰC THI & THEO DÕI
    initPrivacyGuard();
    blockPopups();

    const observer = new MutationObserver(heavyCleaning);
    observer.observe(document.documentElement, { childList: true, subtree: true });

    // Chạy dọn dẹp ngay khi bắt đầu và sau khi load xong
    heavyCleaning();
    window.addEventListener('load', heavyCleaning);

    // Mở khóa chuột phải (DevTools)
    window.addEventListener('contextmenu', (e) => e.stopPropagation(), true);

})();
