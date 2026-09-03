// Sidebar navigation configuration and interactive active states
const BMS_NAV_ITEMS = {
    'dashboard': {
        title: 'ផ្ទាំងគ្រប់គ្រង',
        subtitle: 'ស្វាគមន៍មកកាន់ប្រព័ន្ធគ្រប់គ្រងអាជីវកម្ម BMS DigiTech',
        icon: 'fa-border-all',
        parent: null
    },
    'sell-invoices': {
        title: 'វិក្កយបត្រលក់',
        subtitle: 'គ្រប់គ្រងវិក្កយបត្រលក់ និងការចេញវិក្កយបត្រ',
        icon: 'fa-file-invoice-dollar',
        parent: 'menu-sell'
    },
    'sell-prices': {
        title: 'តារាងតម្លៃ',
        subtitle: 'គ្រប់គ្រងតារាងតម្លៃទំនិញ និងសេវាកម្ម',
        icon: 'fa-file-alt',
        parent: 'menu-sell'
    },
    'sell-customers': {
        title: 'បញ្ជីអតិថិជន',
        subtitle: 'គ្រប់គ្រងទិន្នន័យ និងព័ត៌មានទំនាក់ទំនងអតិថិជន',
        icon: 'fa-users',
        parent: 'menu-sell'
    },
    'sell-receipts': {
        title: 'បង្កាន់ដៃទូទាត់',
        subtitle: 'តាមដានការទូទាត់ និងបង្កាន់ដៃទទួលប្រាក់',
        icon: 'fa-credit-card',
        parent: 'menu-sell'
    },
    'buy-invoices': {
        title: 'វិក្កយបត្របញ្ញាទិញ',
        subtitle: 'គ្រប់គ្រងការបញ្ជាទិញ និងវិក្កយបត្រពីអ្នកផ្គត់ផ្គង់',
        icon: 'fa-file-invoice',
        parent: 'menu-buy'
    },
    'buy-suppliers': {
        title: 'អ្នកផ្គត់ផ្គង់',
        subtitle: 'បញ្ជីព័ត៌មាន និងទំនាក់ទំនងអ្នកផ្គត់ផ្គង់',
        icon: 'fa-truck',
        parent: 'menu-buy'
    },
    'buy-expenses': {
        title: 'ការទូទាត់ចំណាយ',
        subtitle: 'កត់ត្រា និងគ្រប់គ្រងការចំណាយអាជីវកម្ម',
        icon: 'fa-money-check-alt',
        parent: 'menu-buy'
    },
    'stock-balance': {
        title: 'តុល្យភាពស្តុក',
        subtitle: 'តាមដានចំនួន និងស្ថានភាពស្តុកទំនិញក្នុងឃ្លាំង',
        icon: 'fa-box',
        parent: 'menu-stock'
    },
    'stock-catalog': {
        title: 'កាតាឡុកទំនិញ',
        subtitle: 'បញ្ជីទំនិញ ផលិតផល និងប្រភេទទំនិញទាំងអស់',
        icon: 'fa-list',
        parent: 'menu-stock'
    },
    'stock-movements': {
        title: 'ចលនាស្តុក',
        subtitle: 'ប្រវត្តិនាំចូល នាំចេញ និងផ្លាស់ប្តូរស្តុក',
        icon: 'fa-clock-rotate-left',
        parent: 'menu-stock'
    },
    'reports': {
        title: 'របាយការណ៍ហិរញ្ញវត្ថុ',
        subtitle: 'របាយការណ៍លក់ ចំណូល ចំណាយ និងប្រាក់ចំណេញ',
        icon: 'fa-chart-line',
        parent: null
    },
    'settings': {
        title: 'ការកំណត់ប្រព័ន្ធ',
        subtitle: 'ការកំណត់ទូទៅ សិទ្ធិអ្នកប្រើប្រាស់ និងប្រព័ន្ធ',
        icon: 'fa-gear',
        parent: null
    }
};

function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    const icon = document.getElementById('icon-' + menuId);
    const btn = document.getElementById('btn-' + menuId);
    
    if (!menu) return;
    const isHidden = menu.classList.contains('hidden');

    if (isHidden) {
        menu.classList.remove('hidden');
        menu.classList.add('block');
        if (icon) {
            icon.classList.remove('fa-chevron-right');
            icon.classList.add('fa-chevron-down');
        }
        if (btn) {
            btn.classList.add('bg-white/10', 'text-white');
            btn.classList.remove('text-emerald-100');
        }
    } else {
        menu.classList.add('hidden');
        menu.classList.remove('block');
        if (icon) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-right');
        }
        // Only remove active style from parent button if none of its child items are currently active
        const hasActiveChild = menu.querySelector('.nav-sub-item.bg-primary');
        if (!hasActiveChild && btn) {
            btn.classList.remove('bg-white/10', 'text-white');
            btn.classList.add('text-emerald-100');
        }
    }
}

function setActiveNavItem(itemId) {
    if (!itemId || !BMS_NAV_ITEMS[itemId]) {
        itemId = 'dashboard';
    }

    // 1. Reset all top-level items
    document.querySelectorAll('.nav-item').forEach(el => {
        el.classList.remove('bg-primary', 'text-white', 'shadow-sm', 'font-medium');
        el.classList.add('text-emerald-100', 'hover:bg-white/10', 'hover:text-white', 'font-normal');
    });

    // 2. Reset all sub-items
    document.querySelectorAll('.nav-sub-item').forEach(el => {
        el.classList.remove('bg-primary', 'text-white', 'shadow-sm', 'font-medium');
        el.classList.add('text-emerald-100/75', 'hover:bg-white/10', 'hover:text-white', 'font-normal');
    });

    // 3. Reset all parent menu buttons
    document.querySelectorAll('.nav-parent').forEach(el => {
        el.classList.remove('bg-white/10', 'text-white', 'font-medium');
        el.classList.add('text-emerald-100', 'hover:bg-white/10', 'hover:text-white', 'font-normal');
    });

    // 4. Activate target item
    const targetEl = document.querySelector(`[data-nav="${itemId}"]`);
    if (targetEl) {
        targetEl.classList.remove('text-emerald-100', 'text-emerald-100/75', 'hover:bg-white/10', 'font-normal');
        targetEl.classList.add('bg-primary', 'text-white', 'shadow-sm', 'font-medium');
    }

    // 5. If item belongs to a parent menu, expand and highlight parent
    const meta = BMS_NAV_ITEMS[itemId];
    if (meta && meta.parent) {
        const parentMenu = document.getElementById(meta.parent);
        const parentIcon = document.getElementById('icon-' + meta.parent);
        const parentBtn = document.getElementById('btn-' + meta.parent);

        if (parentMenu) {
            parentMenu.classList.remove('hidden');
            parentMenu.classList.add('block');
        }
        if (parentIcon) {
            parentIcon.classList.remove('fa-chevron-right');
            parentIcon.classList.add('fa-chevron-down');
        }
        if (parentBtn) {
            parentBtn.classList.remove('text-emerald-100');
            parentBtn.classList.add('bg-white/10', 'text-white', 'font-medium');
        }
    }

    // 6. Save in sessionStorage
    try {
        sessionStorage.setItem('bms_active_nav', itemId);
    } catch(e) {}

    // 7. Update empty.html page content if elements exist
    const pageTitle = document.getElementById('page-title');
    const pageSubtitle = document.getElementById('page-subtitle');
    const emptyIcon = document.getElementById('empty-icon');
    const emptyTitle = document.getElementById('empty-title');
    const emptyDesc = document.getElementById('empty-desc');

    if (pageTitle && meta) pageTitle.textContent = meta.title;
    if (pageSubtitle && meta) pageSubtitle.textContent = meta.subtitle;
    if (emptyIcon && meta && meta.icon) emptyIcon.className = `fas ${meta.icon} text-3xl`;
    if (emptyTitle && meta) emptyTitle.textContent = `មិនទាន់មានទិន្នន័យ ${meta.title} នៅឡើយទេ`;
    if (emptyDesc && meta) emptyDesc.textContent = `សូមចុចប៊ូតុង "បង្កើត" ខាងលើដើម្បីបញ្ចូលទិន្នន័យ ${meta.title} ថ្មី`;
    if (meta && document.getElementById('page-title')) {
        document.title = `BMS DigiTech - ${meta.title}`;
    }
}

function initSidebarNav() {
    // Attach click listeners to all nav items
    document.querySelectorAll('[data-nav]').forEach(el => {
        el.addEventListener('click', (e) => {
            const navId = el.getAttribute('data-nav');
            if (!navId) return;

            // If user clicked Dashboard
            if (navId === 'dashboard') {
                try { sessionStorage.setItem('bms_active_nav', 'dashboard'); } catch(err){}
                if (window.location.pathname.endsWith('dashboard.html')) {
                    e.preventDefault();
                    setActiveNavItem('dashboard');
                }
                return;
            }

            // If user clicked Sales Invoices
            if (navId === 'sell-invoices') {
                try { sessionStorage.setItem('bms_active_nav', 'sell-invoices'); } catch(err){}
                if (window.location.pathname.endsWith('invoices.html')) {
                    e.preventDefault();
                    setActiveNavItem('sell-invoices');
                }
                return;
            }

            // If currently on empty.html and clicking any empty.html item
            const isAtEmptyPage = window.location.pathname.endsWith('empty.html') || window.location.pathname.endsWith('empty.html/');
            if (isAtEmptyPage) {
                e.preventDefault();
                setActiveNavItem(navId);
                const url = new URL(window.location.href);
                url.searchParams.set('nav', navId);
                window.history.pushState({}, '', url);
            } else {
                // If navigating from dashboard or invoices to an empty page item
                try { sessionStorage.setItem('bms_active_nav', navId); } catch(err){}
            }
        });
    });

    // Handle back/forward navigation
    window.addEventListener('popstate', () => {
        const urlParam = new URLSearchParams(window.location.search).get('nav');
        if (urlParam) {
            setActiveNavItem(urlParam);
        }
    });

    // Initial page load detection
    const urlParam = new URLSearchParams(window.location.search).get('nav');
    let savedNav = null;
    try { savedNav = sessionStorage.getItem('bms_active_nav'); } catch(e) {}

    const isDashboard = window.location.pathname.endsWith('dashboard.html');
    const isInvoices = window.location.pathname.endsWith('invoices.html');
    
    let initialNav = urlParam || (isDashboard ? 'dashboard' : (isInvoices ? 'sell-invoices' : (savedNav || 'sell-invoices')));
    
    if (isDashboard && !urlParam) {
        initialNav = 'dashboard';
    } else if (isInvoices && !urlParam) {
        initialNav = 'sell-invoices';
    }
    
    setActiveNavItem(initialNav);
}

document.addEventListener('DOMContentLoaded', initSidebarNav);
