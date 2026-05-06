// ==UserScript==
// @name         Animevietsub Ads Blocker
// @version      18.5.1
// @icon         data:image/png;base64,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
// @description  Chặn quảng cáo, tracker, cookie bên thứ 3, tự động đóng ad và mở khóa UI diện rộng.
// @author       AnTay
// @match        https://animevietsub.bz/*
// @match        https://animevietsub.bz/phim/*
// @match        https://lh3.googleusercontent.com/*
// @match        https://min88.site/*
// @connect      animevietsub.bz
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // 1. DANH SÁCH ĐEN TỔNG HỢP (Domain & Keywords)
    const AD_DOMAINS = [
        'five88', 'ball88', 'yo88', 'hitclub', 'gemwin', 'zowin', 'min88', '6789x', 'nhatvip',
        'haywin', 'sunwin', 'rikvip', 'go88', '789club', 'iwin', 'oxbet', 'lucky88', 'debet.gs',
        'google-analytics', 'googletagmanager', 'facebook.net', 'doubleclick', 'histats',
        'onclickalgo', 'mobiads', 'popads', 'adnxs', 'criteo', 'pubmatic', 'animevietsubapp'
    ];

    const AD_KEYWORDS = ['utm_source', 'utm_medium', 'catfish', 'popunder', 'ads-server', 'banner'];

    // 2. NÂNG CẤP CHẶN COOKIE (Sandbox Mode - Không gây lỗi đăng nhập)
    const upgradePrivacyGuard = () => {
        const originalCookieSetter = document.__lookupSetter__('cookie');
        document.__defineSetter__('cookie', function(val) {
            const lowVal = val.toLowerCase();
            // Chỉ chặn nếu cookie chứa domain rác, còn lại cho qua để tránh lỗi web
            if (AD_DOMAINS.some(d => lowVal.includes(d)) || AD_KEYWORDS.some(k => lowVal.includes(k))) {
                return; 
            }
            return originalCookieSetter.call(document, val);
        });
    };

    // 3. SMART CLICKER V3 (Hỗ trợ IN HOA và Tiếng Việt đa dạng)
    function smartClicker() {
        const closeLabels = [
            'ĐÓNG', 'TẮT', 'XONG', 'BỎ QUA', 'XEM TIẾP', 'RESUME', 'SKIP', 'CLOSE', 'DONE',
            'Đóng', 'Tắt', 'Xong', 'Bỏ qua', 'Xem tiếp', 'đóng', 'tắt', 'xong', 'bỏ qua', '×'
        ];

        // Quét tất cả các phần tử có khả năng là nút bấm
        const elements = document.querySelectorAll('button, a, span, div[role="button"], i');
        
        elements.forEach(el => {
            const text = (el.innerText || el.textContent || "").trim();
            const className = (el.className && typeof el.className === 'string') ? el.className : "";
            
            // Kiểm tra nội dung chữ (Khớp chính xác hoặc chứa từ khóa quan trọng)
            const matchesText = closeLabels.some(label => text === label || text.includes(label.toUpperCase()));
            const isAdClass = className.includes('close') || className.includes('dismiss') || className.includes('skip');

            if (matchesText || isAdClass) {
                const style = window.getComputedStyle(el);
                // Chỉ click nếu nút đang hiển thị
                if (style.display !== 'none' && style.visibility !== 'hidden' && parseInt(style.zIndex) > 0) {
                    if (typeof el.click === 'function') {
                        el.click();
                    }
                }
            }
        });
    }

    // 4. DỌN DẸP PHẦN TỬ QUẢNG CÁO (Heuristic Engine)
    function globalClean() {
        // Xóa các link/ảnh dẫn tới domain rác
        document.querySelectorAll('a[href], img[src], iframe[src]').forEach(el => {
            const url = (el.href || el.src || "").toLowerCase();
            if (AD_DOMAINS.some(d => url.includes(d)) || AD_KEYWORDS.some(k => url.includes(k))) {
                const container = el.closest('div, section, center, ins, aside, #avs-pause-ad') || el;
                container.remove();
            }
        });

        // Xử lý các lớp phủ làm đơ/tối màn hình
        document.querySelectorAll('div').forEach(div => {
            const style = window.getComputedStyle(div);
            if (parseInt(style.zIndex) > 50 && style.position === 'fixed') {
                if (!div.querySelector('video') && !div.querySelector('canvas') && !div.id.includes('player')) {
                    const bg = style.backgroundColor;
                    if (bg.includes('rgba(0, 0, 0') || style.opacity < 1) {
                        div.remove();
                    }
                }
            }
        });

        // Mở khóa UI (Scroll & Click)
        const unlock = (el) => {
            if (!el) return;
            if (window.getComputedStyle(el).overflow === 'hidden') {
                el.style.setProperty('overflow', 'auto', 'important');
            }
            el.style.setProperty('pointer-events', 'auto', 'important');
            el.style.setProperty('filter', 'none', 'important');
        };
        unlock(document.body);
        unlock(document.documentElement);
    }

    // 5. ANTI-POPUP VÀ KHỞI CHẠY
    const init = () => {
        upgradePrivacyGuard();
        
        // Chặn cửa sổ bật lên dẫn đến link rác
        const originalOpen = window.open;
        window.open = function(url) {
            if (url && (AD_DOMAINS.some(d => url.toLowerCase().includes(d)) || AD_KEYWORDS.some(k => url.toLowerCase().includes(k)))) {
                return null;
            }
            return originalOpen.apply(this, arguments);
        };

        // Theo dõi thay đổi trang web
        const observer = new MutationObserver(() => {
            smartClicker();
            globalClean();
        });
        observer.observe(document.documentElement, { childList: true, subtree: true });

        // Chạy ngay lập tức
        smartClicker();
        globalClean();
    };

    init();

    // Hỗ trợ DevTools
    window.addEventListener('contextmenu', (e) => e.stopPropagation(), true);

})();
