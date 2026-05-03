// ==UserScript==
// @name         AnimeVietSub Ads Block
// @icon         data:image/png;base64,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
// @version      13.0.0
// @description  Chặn phần tử quảng cáo, fix tối màn hình web.
// @author       AnTay
// @match        https://animevietsub.bz/*
// @match        https://animevietsub.bz/phim/
// @connect      animevietsub.bz
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // 1. DANH SÁCH ĐEN CÁC DOMAIN & SELECTOR
    const BLACKLIST = {
        domains: [
            'five88', 'ball88', 'yo88', 'hitclub', 'gemwin', 'zowin',
            'min88', '6789x', 'nhatvip', 'haywin', 'sunwin', 'rikvip',
            'utm_source', 'animevietsubapp', 'catfish'
        ],
        selectors: [
            '#avs-pause-ad',            // Khối quảng cáo khi pause bạn gửi
            '.avs-pause-ad-box',
            '.avs-pause-ad-img',
            '.ads-banner',
            '#hide_catfix',
            '#url-_preload-ads-2',
            '.jw-ads',                  // Ads của trình phát JW Player
            'div[style*="z-index: 999999"]',
            'iframe[src*="ads"]'
        ],
        buttons: [
            '.avs-pause-ad-resume',     // Nút "Đóng và xem tiếp"
            '.avs-pause-ad-dismiss',    // Nút "Đóng quảng cáo"
            '.jw-ad-skip',              // Skip ad của trình phát
            '.popup-icon-close',
            '#close-_preload-ads-1'
        ]
    };

    // 2. HÀM XỬ LÝ CHÍNH
    function powerClean() {
        // A. Xử lý khối Pause Ad (Ưu tiên giả lập click để video chạy tiếp)
        const pauseContainer = document.getElementById('avs-pause-ad');
        if (pauseContainer) {
            const resumeBtn = pauseContainer.querySelector('.avs-pause-ad-resume') ||
                              pauseContainer.querySelector('.avs-pause-ad-dismiss');
            if (resumeBtn && typeof resumeBtn.click === 'function') {
                resumeBtn.click();
            }
            pauseContainer.remove();
        }

        // B. Tự động click các nút đóng/bỏ qua khác
        BLACKLIST.buttons.forEach(s => {
            document.querySelectorAll(s).forEach(btn => {
                if (btn && typeof btn.click === 'function') btn.click();
            });
        });

        // C. Xóa các phần tử theo Selector cứng
        BLACKLIST.selectors.forEach(s => {
            document.querySelectorAll(s).forEach(el => el.remove());
        });

        // D. Quét và diệt theo Link (href) - Chặn toàn bộ banner cá cược
        document.querySelectorAll('a[href]').forEach(link => {
            const href = link.href.toLowerCase();
            if (BLACKLIST.domains.some(domain => href.includes(domain))) {
                const wrapper = link.closest('div, center, li, section') || link;
                wrapper.remove();
            }
        });

        // E. Mở khóa giao diện (Sửa lỗi tối màn hình, khóa chuột)
        const unlock = (el) => {
            if (!el) return;
            el.style.setProperty('overflow', 'auto', 'important');
            el.style.setProperty('pointer-events', 'auto', 'important');
            el.style.setProperty('filter', 'none', 'important');
            el.style.setProperty('user-select', 'auto', 'important');
        };
        unlock(document.body);
        unlock(document.documentElement);

        // Gỡ bỏ các lớp phủ (overlay) tàng hình hoặc đen mờ có z-index cao
        document.querySelectorAll('div').forEach(div => {
            const style = window.getComputedStyle(div);
            if (parseInt(style.zIndex) > 100 && style.position === 'fixed') {
                // Chỉ xóa nếu div không chứa video (tránh xóa nhầm trình phát)
                if (!div.querySelector('video') && !div.querySelector('.jw-video')) {
                    div.remove();
                }
            }
        });
    }

    // 3. CƠ CHẾ THEO DÕI BIẾN ĐỘNG (MutationObserver)
    // Giúp script phản ứng ngay lập tức khi quảng cáo vừa xuất hiện
    const observer = new MutationObserver(() => {
        powerClean();
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });

    // 4. CÁC THIẾT LẬP BỔ SUNG
    // Vô hiệu hóa hàm redirect popup của web
    window.createPopupAndRedirect = function() { return false; };

    // Cho phép chuột phải để sử dụng DevTool bình thường
    window.addEventListener('contextmenu', (e) => e.stopPropagation(), true);

    // Chạy lần đầu ngay khi load
    powerClean();

})();
