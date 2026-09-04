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
    'reports-overview': {
        title: 'របាយការណ៍ទូទៅ',
        subtitle: 'ទិដ្ឋភាពទូទៅនៃប្រាក់ចំណេញ ចំណូល និងចំណាយ',
        icon: 'fa-chart-pie',
        parent: 'menu-reports'
    },
    'reports-sales': {
        title: 'របាយការណ៍លក់',
        subtitle: 'ទិន្នន័យវិភាគការលក់ និងអតិថិជនសំខាន់ៗ',
        icon: 'fa-file-invoice-dollar',
        parent: 'menu-reports'
    },
    'reports-purchases': {
        title: 'របាយការណ៍ទិញ',
        subtitle: 'ទិន្នន័យវិភាគការទិញ និងការចំណាយលើអ្នកផ្គត់ផ្គង់',
        icon: 'fa-cart-shopping',
        parent: 'menu-reports'
    },
    'reports-stock': {
        title: 'របាយការណ៍ស្តុក',
        subtitle: 'ទិន្នន័យតម្លៃស្តុក និងការវិភាគប្រាក់ចំណេញតាមមុខទំនិញ',
        icon: 'fa-boxes-stacked',
        parent: 'menu-reports'
    },
    'settings-company': {
        title: 'ព័ត៌មានក្រុមហ៊ុន',
        subtitle: 'ការកំណត់ព័ត៌មានទូទៅ អាសយដ្ឋាន រូបសញ្ញា និងត្រាក្រុមហ៊ុន',
        icon: 'fa-building',
        parent: 'menu-settings'
    },
    'settings-users': {
        title: 'គ្រប់គ្រងអ្នកប្រើ',
        subtitle: 'គ្រប់គ្រងគណនី តួនាទី និងសិទ្ធិប្រើប្រាស់ប្រព័ន្ធ',
        icon: 'fa-users-gear',
        parent: 'menu-settings'
    },
    'settings-tax': {
        title: 'ពន្ធ និងរូបិយប័ណ្ណ',
        subtitle: 'ការកំណត់អត្រាពន្ធ រូបិយប័ណ្ណគោល និងអត្រាប្តូរប្រាក់',
        icon: 'fa-coins',
        parent: 'menu-settings'
    },
    'settings-notifications': {
        title: 'ការជូនដំណឹង',
        subtitle: 'ការកំណត់ការផ្ញើសារដាស់តឿន និងដំណឹងប្រព័ន្ធស្វ័យប្រវត្តិ',
        icon: 'fa-bell',
        parent: 'menu-settings'
    },
    'settings-system': {
        title: 'ប្រព័ន្ធ និងសុវត្ថិភាព',
        subtitle: 'ការបម្រុងទុកទិន្នន័យ ប្រវត្តិប្រតិបត្តិការ និងការថែទាំប្រព័ន្ធ',
        icon: 'fa-sliders',
        parent: 'menu-settings'
    },
    'settings-general': {
        title: 'ការកំណត់ប្រព័ន្ធ',
        subtitle: 'ការកំណត់ទូទៅ សិទ្ធិអ្នកប្រើប្រាស់ និងប្រព័ន្ធ',
        icon: 'fa-gear',
        parent: 'menu-settings'
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
        if (icon) {
            icon.classList.add('rotate-90');
        }
        if (btn) {
            btn.classList.add('bg-white/10', 'text-white', 'font-medium');
            btn.classList.remove('text-emerald-100');
        }
    } else {
        menu.classList.add('hidden');
        if (icon) {
            icon.classList.remove('rotate-90');
        }
        // Only remove active style from parent button if none of its child items are currently active
        const hasActiveChild = menu.querySelector('.nav-sub-item.bg-primary');
        if (!hasActiveChild && btn) {
            btn.classList.remove('bg-white/10', 'text-white', 'font-medium');
            btn.classList.add('text-emerald-100');
        }
    }
}

function setActiveNavItem(itemId) {
    if (!itemId || !BMS_NAV_ITEMS[itemId]) {
        itemId = 'dashboard';
    }

    const meta = BMS_NAV_ITEMS[itemId];
    const activeParentId = meta ? meta.parent : null;

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

    // 3. Reset inactive parent menu buttons & icons
    const allParentIds = ['menu-sell', 'menu-buy', 'menu-stock', 'menu-reports', 'menu-settings'];
    allParentIds.forEach(pId => {
        if (pId !== activeParentId) {
            const btn = document.getElementById('btn-' + pId);
            const icon = document.getElementById('icon-' + pId);
            const menu = document.getElementById(pId);
            if (btn) {
                btn.classList.remove('bg-white/10', 'text-white', 'font-medium');
                btn.classList.add('text-emerald-100', 'hover:bg-white/10', 'hover:text-white', 'font-normal');
            }
            if (icon) {
                icon.classList.remove('rotate-90');
            }
            if (menu) {
                menu.classList.add('hidden');
            }
        }
    });

    // 4. Activate target item
    const targetEl = document.querySelector(`[data-nav="${itemId}"]`);
    if (targetEl) {
        targetEl.classList.remove('text-emerald-100', 'text-emerald-100/75', 'hover:bg-white/10', 'font-normal');
        targetEl.classList.add('bg-primary', 'text-white', 'shadow-sm', 'font-medium');
    }

    // 5. If item belongs to a parent menu, expand and highlight parent
    if (meta && meta.parent) {
        const parentMenu = document.getElementById(meta.parent);
        const parentIcon = document.getElementById('icon-' + meta.parent);
        const parentBtn = document.getElementById('btn-' + meta.parent);

        if (parentMenu) {
            parentMenu.classList.remove('hidden');
        }
        if (parentIcon) {
            parentIcon.classList.add('rotate-90');
        }
        if (parentBtn) {
            parentBtn.classList.remove('text-emerald-100', 'font-normal');
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
                if (window.location.pathname.endsWith('invoice.html') || window.location.pathname.endsWith('invoices.html')) {
                    e.preventDefault();
                    setActiveNavItem('sell-invoices');
                }
                return;
            }

            // If user clicked Quotes / Price List
            if (navId === 'sell-prices') {
                try { sessionStorage.setItem('bms_active_nav', 'sell-prices'); } catch(err){}
                if (window.location.pathname.endsWith('quote.html') || window.location.pathname.endsWith('quotes.html')) {
                    e.preventDefault();
                    setActiveNavItem('sell-prices');
                }
                return;
            }

            // If user clicked Customers
            if (navId === 'sell-customers') {
                try { sessionStorage.setItem('bms_active_nav', 'sell-customers'); } catch(err){}
                if (window.location.pathname.endsWith('customer.html')) {
                    e.preventDefault();
                    setActiveNavItem('sell-customers');
                }
                return;
            }

            // If user clicked Receipts / Payments
            if (navId === 'sell-receipts') {
                try { sessionStorage.setItem('bms_active_nav', 'sell-receipts'); } catch(err){}
                if (window.location.pathname.endsWith('payment.html')) {
                    e.preventDefault();
                    setActiveNavItem('sell-receipts');
                }
                return;
            }

            // If user clicked Purchase Bills
            if (navId === 'buy-invoices') {
                try { sessionStorage.setItem('bms_active_nav', 'buy-invoices'); } catch(err){}
                if (window.location.pathname.endsWith('bills.html')) {
                    e.preventDefault();
                    setActiveNavItem('buy-invoices');
                }
                return;
            }

            // If user clicked Suppliers
            if (navId === 'buy-suppliers') {
                try { sessionStorage.setItem('bms_active_nav', 'buy-suppliers'); } catch(err){}
                if (window.location.pathname.endsWith('suppliers.html')) {
                    e.preventDefault();
                    setActiveNavItem('buy-suppliers');
                }
                return;
            }

            // If user clicked Disbursements (Expenses)
            if (navId === 'buy-expenses') {
                try { sessionStorage.setItem('bms_active_nav', 'buy-expenses'); } catch(err){}
                if (window.location.pathname.endsWith('disbursement.html')) {
                    e.preventDefault();
                    setActiveNavItem('buy-expenses');
                }
                return;
            }

            // If user clicked Stock Balance
            if (navId === 'stock-balance') {
                try { sessionStorage.setItem('bms_active_nav', 'stock-balance'); } catch(err){}
                if (window.location.pathname.endsWith('balance.html')) {
                    e.preventDefault();
                    setActiveNavItem('stock-balance');
                }
                return;
            }

            // If user clicked Stock Catalog
            if (navId === 'stock-catalog') {
                try { sessionStorage.setItem('bms_active_nav', 'stock-catalog'); } catch(err){}
                if (window.location.pathname.endsWith('catalog.html')) {
                    e.preventDefault();
                    setActiveNavItem('stock-catalog');
                }
                return;
            }

            // If user clicked Stock Movements
            if (navId === 'stock-movements') {
                try { sessionStorage.setItem('bms_active_nav', 'stock-movements'); } catch(err){}
                if (window.location.pathname.endsWith('movement.html')) {
                    e.preventDefault();
                    setActiveNavItem('stock-movements');
                }
                return;
            }

            // If user clicked Reports Overview
            if (navId === 'reports-overview') {
                try { sessionStorage.setItem('bms_active_nav', 'reports-overview'); } catch(err){}
                if (window.location.pathname.includes('/reports/overview/') || window.location.pathname.endsWith('overview.html')) {
                    e.preventDefault();
                    setActiveNavItem('reports-overview');
                }
                return;
            }

            // If user clicked Reports Sales
            if (navId === 'reports-sales') {
                try { sessionStorage.setItem('bms_active_nav', 'reports-sales'); } catch(err){}
                if (window.location.pathname.includes('/reports/sales/') || window.location.pathname.endsWith('sales.html')) {
                    e.preventDefault();
                    setActiveNavItem('reports-sales');
                }
                return;
            }

            // If user clicked Reports Purchases
            if (navId === 'reports-purchases') {
                try { sessionStorage.setItem('bms_active_nav', 'reports-purchases'); } catch(err){}
                if (window.location.pathname.includes('/reports/purchases/') || window.location.pathname.endsWith('purchases.html')) {
                    e.preventDefault();
                    setActiveNavItem('reports-purchases');
                }
                return;
            }

            // If user clicked Reports Stock
            if (navId === 'reports-stock') {
                try { sessionStorage.setItem('bms_active_nav', 'reports-stock'); } catch(err){}
                if (window.location.pathname.includes('/reports/stock/') || window.location.pathname.endsWith('stock.html')) {
                    e.preventDefault();
                    setActiveNavItem('reports-stock');
                }
                return;
            }

            // If user clicked Company Settings
            if (navId === 'settings-company') {
                try { sessionStorage.setItem('bms_active_nav', 'settings-company'); } catch(err){}
                if (window.location.pathname.includes('/settings/company/') || window.location.pathname.endsWith('company.html')) {
                    e.preventDefault();
                    setActiveNavItem('settings-company');
                }
                return;
            }

            // If user clicked User Management
            if (navId === 'settings-users') {
                try { sessionStorage.setItem('bms_active_nav', 'settings-users'); } catch(err){}
                if (window.location.pathname.includes('/settings/users/')) {
                    e.preventDefault();
                    setActiveNavItem('settings-users');
                }
                return;
            }

            // If user clicked Tax Settings
            if (navId === 'settings-tax') {
                try { sessionStorage.setItem('bms_active_nav', 'settings-tax'); } catch(err){}
                if (window.location.pathname.includes('/settings/tax/') || window.location.pathname.endsWith('tax.html')) {
                    e.preventDefault();
                    setActiveNavItem('settings-tax');
                }
                return;
            }

            // If user clicked Notifications Settings
            if (navId === 'settings-notifications') {
                try { sessionStorage.setItem('bms_active_nav', 'settings-notifications'); } catch(err){}
                if (window.location.pathname.includes('/settings/notifications/') || window.location.pathname.endsWith('notifications.html')) {
                    e.preventDefault();
                    setActiveNavItem('settings-notifications');
                }
                return;
            }

            // If user clicked System Settings
            if (navId === 'settings-system') {
                try { sessionStorage.setItem('bms_active_nav', 'settings-system'); } catch(err){}
                if (window.location.pathname.includes('/settings/system/') || window.location.pathname.endsWith('system.html')) {
                    e.preventDefault();
                    setActiveNavItem('settings-system');
                }
                return;
            }

            // If user clicked General Settings / Reports (legacy)
            if (navId === 'settings-general' || navId === 'settings') {
                try { sessionStorage.setItem('bms_active_nav', 'settings-company'); } catch(err){}
                if (window.location.pathname.endsWith('settings.html')) {
                    e.preventDefault();
                    setActiveNavItem('settings-company');
                }
                return;
            }

            if (navId === 'reports') {
                try { sessionStorage.setItem('bms_active_nav', 'reports-overview'); } catch(err){}
                if (window.location.pathname.endsWith('reports.html')) {
                    e.preventDefault();
                    setActiveNavItem('reports-overview');
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

    const normalizedPath = decodeURIComponent(window.location.pathname).replace(/\\/g, '/').toLowerCase();

    const isDashboard = normalizedPath.endsWith('/dashboard.html') || normalizedPath.endsWith('dashboard.html');
    const isInvoices = normalizedPath.includes('/sales/invoice/') || normalizedPath.endsWith('/invoice.html') || normalizedPath.endsWith('invoice.html');
    const isQuotes = normalizedPath.includes('/sales/quote/') || normalizedPath.endsWith('/quote.html') || normalizedPath.endsWith('quote.html');
    const isCustomers = normalizedPath.includes('/sales/customer/') || normalizedPath.endsWith('/customer.html') || normalizedPath.endsWith('customer.html');
    const isPayments = normalizedPath.includes('/sales/payment/') || normalizedPath.endsWith('/payment.html') || normalizedPath.endsWith('payment.html');
    const isBills = normalizedPath.includes('/buy/bills/') || normalizedPath.endsWith('/bills.html') || normalizedPath.endsWith('bills.html');
    const isSuppliers = normalizedPath.includes('/buy/suppliers/') || normalizedPath.endsWith('/suppliers.html') || normalizedPath.endsWith('suppliers.html');
    const isDisbursement = normalizedPath.includes('/buy/disbursement/') || normalizedPath.endsWith('/disbursement.html') || normalizedPath.endsWith('disbursement.html');
    const isBalance = normalizedPath.includes('/stock/balance/') || normalizedPath.endsWith('/balance.html') || normalizedPath.endsWith('balance.html');
    const isCatalog = normalizedPath.includes('/stock/catalog/') || normalizedPath.endsWith('/catalog.html') || normalizedPath.endsWith('catalog.html');
    const isMovement = normalizedPath.includes('/stock/movement/') || normalizedPath.endsWith('/movement.html') || normalizedPath.endsWith('movement.html');
    
    // Reports sub-pages
    const isReportsOverview = normalizedPath.includes('/reports/overview/') || (normalizedPath.endsWith('/overview.html') && normalizedPath.includes('/reports/'));
    const isReportsSales = normalizedPath.includes('/reports/sales/') || (normalizedPath.endsWith('/sales.html') && normalizedPath.includes('/reports/'));
    const isReportsPurchases = normalizedPath.includes('/reports/purchases/') || (normalizedPath.endsWith('/purchases.html') && normalizedPath.includes('/reports/'));
    const isReportsStock = normalizedPath.includes('/reports/stock/') || (normalizedPath.endsWith('/stock.html') && normalizedPath.includes('/reports/'));
    const isLegacyReports = normalizedPath.endsWith('/reports.html') && !normalizedPath.includes('/overview/');

    // Settings sub-pages
    const isCompany = normalizedPath.includes('/settings/company/') || (normalizedPath.endsWith('/company.html') && normalizedPath.includes('/settings/'));
    const isUsers = normalizedPath.includes('/settings/users/') || normalizedPath.includes('/users/');
    const isTax = normalizedPath.includes('/settings/tax/') || (normalizedPath.endsWith('/tax.html') && normalizedPath.includes('/settings/'));
    const isNotifications = normalizedPath.includes('/settings/notifications/') || (normalizedPath.endsWith('/notifications.html') && normalizedPath.includes('/settings/'));
    const isSystem = normalizedPath.includes('/settings/system/') || (normalizedPath.endsWith('/system.html') && normalizedPath.includes('/settings/'));
    const isLegacySettings = normalizedPath.endsWith('/settings.html') && !isCompany && !isUsers && !isTax && !isNotifications && !isSystem;

    let initialNav = urlParam;
    if (!initialNav) {
        if (isDashboard) {
            initialNav = 'dashboard';
        } else if (isInvoices) {
            initialNav = 'sell-invoices';
        } else if (isQuotes) {
            initialNav = 'sell-prices';
        } else if (isCustomers) {
            initialNav = 'sell-customers';
        } else if (isPayments) {
            initialNav = 'sell-receipts';
        } else if (isBills) {
            initialNav = 'buy-invoices';
        } else if (isSuppliers) {
            initialNav = 'buy-suppliers';
        } else if (isDisbursement) {
            initialNav = 'buy-expenses';
        } else if (isBalance) {
            initialNav = 'stock-balance';
        } else if (isCatalog) {
            initialNav = 'stock-catalog';
        } else if (isMovement) {
            initialNav = 'stock-movements';
        } else if (isReportsOverview) {
            initialNav = 'reports-overview';
        } else if (isReportsSales) {
            initialNav = 'reports-sales';
        } else if (isReportsPurchases) {
            initialNav = 'reports-purchases';
        } else if (isReportsStock) {
            initialNav = 'reports-stock';
        } else if (isLegacyReports) {
            initialNav = 'reports-overview';
        } else if (isCompany) {
            initialNav = 'settings-company';
        } else if (isUsers) {
            initialNav = 'settings-users';
        } else if (isTax) {
            initialNav = 'settings-tax';
        } else if (isNotifications) {
            initialNav = 'settings-notifications';
        } else if (isSystem) {
            initialNav = 'settings-system';
        } else if (isLegacySettings) {
            initialNav = 'settings-company';
        } else {
            initialNav = savedNav || 'dashboard';
        }
    }

    setActiveNavItem(initialNav);
}

document.addEventListener('DOMContentLoaded', initSidebarNav);
