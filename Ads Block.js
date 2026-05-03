/**
 * AnimeVietSub Ultimate Ad-Blocker Logic
 * Version: 12.0 (GitHub Remote Ready)
 */
(function() {
    'use strict';

    // 1. Cấu hình danh sách đen (Domain và Selectors)
    const AD_DOMAINS = [
        'min88.site', 'five88', 'ball88', 'yo88', 'hitclub', 
        'gemwin', 'zowin', '6789x', 'nhatvip', 'haywin', 
        'sunwin', 'rikvip', 'utm_source', 'animevietsubapp'
    ];

    const AD_SELECTORS = [
        '#avs-pause-ad',            // Khối quảng cáo khi pause
        '.avs-pause-ad-box',
        '.avs-pause-ad-img',
        '.ads-banner',
        '#hide_catfix',
        '.jw-ads',                  // Ad trong JW Player
        'iframe[src*="ads"]',
        'div[style*="z-index: 999999"]'
    ];

    // 2. Hàm xử lý Click tự động (Để video chạy tiếp mà không bị khựng)
    function autoClickLogic() {
        const pauseContainer = document.getElementById('avs-pause-ad');
        if (pauseContainer) {
            // Ưu tiên bấm "Đóng và xem tiếp"
            const resumeBtn = pauseContainer.querySelector('.avs-pause-ad-resume') || 
                              pauseContainer.querySelector('.avs-pause-ad-dismiss');
            if (resumeBtn && typeof resumeBtn.click === 'function') {
                resumeBtn.click();
            }
            pauseContainer.remove();
        }

        // Bấm các nút skip ad mặc định của trình phát
        const skipButtons = document.querySelectorAll('.jw-ad-skip, .popup-icon-close, #close-_preload-ads-1');
        skipButtons.forEach(btn => btn.click());
    }

    // 3. Hàm quét và xóa phần tử quảng cáo
    function removeAdElements() {
        // Xóa theo Selectors cứng
        AD_SELECTORS.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => el.remove());
        });

        // Xóa theo Link (href) - Diệt tận gốc banner cá cược
        document.querySelectorAll('a[href]').forEach(link => {
            const href = link.href.toLowerCase();
            if (AD_DOMAINS.some(domain => href.includes(domain))) {
                const wrapper = link.closest('div, center, li') || link;
                wrapper.remove();
            }
        });
    }

    // 4. Hàm mở khóa Giao diện (Quan trọng để fix lỗi không click được video)
    function unlockUI() {
        const html = document.documentElement;
        const body = document.body;

        if (html && body) {
            // Ép trình duyệt luôn cho phép cuộn và click
            html.style.setProperty('overflow', 'auto', 'important');
            body.style.setProperty('overflow', 'auto', 'important');
            body.style.setProperty('pointer-events', 'auto', 'important');
            
            // Loại bỏ filter tối màn hình nếu có
            html.style.setProperty('filter', 'none', 'important');
            body.style.setProperty('filter', 'none', 'important');
        }

        // Xóa các lớp phủ (backdrop) tàng hình hoặc đen mờ
        document.querySelectorAll('div').forEach(div => {
            const style = window.getComputedStyle(div);
            const zIndex = parseInt(style.zIndex);
            
            if (zIndex > 100 && style.position === 'fixed') {
                // Nếu div không chứa video và không phải là khung player chính thì xóa
                if (!div.querySelector('video') && !div.querySelector('.jw-video')) {
                    div.remove();
                }
            }
        });
    }

    // 5. Vòng lặp kiểm tra (Tần suất cao để ad không kịp hiện)
    function startProtection() {
        autoClickLogic();
        removeAdElements();
        unlockUI();
    }

    // Khởi chạy
    console.log("%c[Ad-Blocker] Logic Started from GitHub API", "color: #00e676; font-weight: bold;");
    
    // Quét liên tục mỗi 500ms
    const runner = setInterval(startProtection, 500);

    // Chặn hàm redirect của trang web gốc
    if (typeof window.createPopupAndRedirect === 'function') {
        window.createPopupAndRedirect = function() { return false; };
    }

    // Vô hiệu hóa việc khóa chuột phải (Để dùng DevTool)
    document.addEventListener('contextmenu', (e) => e.stopPropagation(), true);

})();
