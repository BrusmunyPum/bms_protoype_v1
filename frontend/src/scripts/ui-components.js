/**
 * BMS DigiTech - Custom UI Components
 * Replaces native browser elements (alert, confirm, select) with elegant enterprise-grade UI
 */

// 1. Toast Notification System (Replaces window.alert)
function showToast(message, type = 'success', duration = 3200) {
    let container = document.getElementById('bmsToastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'bmsToastContainer';
        container.className = 'fixed top-5 right-5 z-[9999] flex flex-col gap-2.5 pointer-events-none select-none';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'pointer-events-auto bg-white rounded-2xl p-3.5 px-4 shadow-2xl border flex items-center gap-3 text-sm min-w-[280px] max-w-md transition-all duration-300 transform translate-y-0 opacity-100';

    let iconHtml = '';
    let borderClass = 'border-slate-100';

    if (type === 'success') {
        iconHtml = '<div class="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 text-base"><i class="fas fa-circle-check"></i></div>';
        borderClass = 'border-emerald-100';
    } else if (type === 'error') {
        iconHtml = '<div class="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center flex-shrink-0 text-base"><i class="fas fa-circle-xmark"></i></div>';
        borderClass = 'border-rose-100';
    } else if (type === 'warning') {
        iconHtml = '<div class="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 text-base"><i class="fas fa-triangle-exclamation"></i></div>';
        borderClass = 'border-amber-100';
    } else {
        iconHtml = '<div class="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 text-base"><i class="fas fa-circle-info"></i></div>';
        borderClass = 'border-indigo-100';
    }

    toast.classList.add(borderClass);
    toast.innerHTML = `
        ${iconHtml}
        <div class="flex-1 font-medium text-slate-800 text-xs leading-relaxed">${message}</div>
        <button onclick="this.parentElement.remove()" class="text-slate-300 hover:text-slate-600 p-1 rounded-lg transition">
            <i class="fas fa-xmark text-xs"></i>
        </button>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('opacity-0', '-translate-y-2');
        setTimeout(() => {
            if (toast.parentElement) toast.remove();
        }, 300);
    }, duration);
}

// 2. Custom Confirm Dialog (Replaces window.confirm)
function showCustomConfirm(options) {
    const {
        title = 'បញ្ជាក់ការប្រតិបត្តិ',
        message = 'តើលោកអ្នកពិតជាចង់បន្តសកម្មភាពនេះមែនទេ?',
        confirmText = 'យល់ព្រម',
        cancelText = 'បោះបង់',
        type = 'primary', // primary, danger
        onConfirm = () => {}
    } = options;

    let modal = document.getElementById('bmsCustomConfirmModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'bmsCustomConfirmModal';
        modal.className = 'fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[9998] flex items-center justify-center p-4 select-none';
        document.body.appendChild(modal);
    }

    const isDanger = type === 'danger';
    const iconHtml = isDanger 
        ? '<div class="w-12 h-12 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center text-xl mx-auto mb-3"><i class="fas fa-triangle-exclamation"></i></div>'
        : '<div class="w-12 h-12 rounded-2xl bg-emerald-50 text-primary flex items-center justify-center text-xl mx-auto mb-3"><i class="fas fa-circle-question"></i></div>';

    const confirmBtnClass = isDanger
        ? 'bg-rose-600 hover:bg-rose-700 text-white'
        : 'bg-primary hover:bg-primary-light text-white';

    modal.innerHTML = `
        <div class="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-sm w-full p-6 text-center transform transition-all">
            ${iconHtml}
            <h4 class="text-base font-bold text-slate-900 mb-1.5">${title}</h4>
            <p class="text-xs text-slate-500 leading-relaxed mb-6">${message}</p>
            <div class="flex items-center justify-center gap-2.5">
                <button id="bmsConfirmCancelBtn" class="flex-1 py-2.5 px-4 rounded-xl text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 transition">
                    ${cancelText}
                </button>
                <button id="bmsConfirmOkBtn" class="flex-1 py-2.5 px-4 rounded-xl text-xs font-medium ${confirmBtnClass} shadow-sm transition">
                    ${confirmText}
                </button>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');

    const closeConfirm = () => {
        modal.classList.add('hidden');
    };

    document.getElementById('bmsConfirmCancelBtn').onclick = closeConfirm;
    document.getElementById('bmsConfirmOkBtn').onclick = () => {
        closeConfirm();
        if (typeof onConfirm === 'function') {
            onConfirm();
        }
    };
}

// 3. Custom Dropdown Helpers
// 3. Custom Dropdown Helpers
function toggleCustomDropdown(dropdownId) {
    const container = document.getElementById(dropdownId);
    if (!container) return;
    const menu = container.querySelector('.bms-custom-select-menu');
    const arrow = container.querySelector('.bms-custom-select-arrow');
    const isHidden = menu.classList.contains('hidden');
    
    // Close other open dropdowns first
    document.querySelectorAll('.bms-custom-select-menu').forEach(m => {
        if (m !== menu) {
            m.classList.add('hidden');
            const p = m.closest('.bms-custom-select');
            if (p) p.classList.remove('z-50');
            const parentRow = m.closest('tr');
            if (parentRow) parentRow.classList.remove('z-40', 'relative');
        }
    });
    document.querySelectorAll('.bms-custom-select-arrow').forEach(a => {
        if (a !== arrow) a.classList.remove('rotate-180');
    });

    if (isHidden) {
        container.classList.add('z-50', 'relative');
        menu.classList.remove('hidden');
        if (arrow) arrow.classList.add('rotate-180');
    } else {
        container.classList.remove('z-50');
        menu.classList.add('hidden');
        if (arrow) arrow.classList.remove('rotate-180');
    }
}

function selectCustomOption(dropdownId, value, displayText) {
    const container = document.getElementById(dropdownId);
    if (!container) return;
    const hiddenInput = container.querySelector('input[type="hidden"]');
    const labelElem = container.querySelector('.selected-label');
    const menu = container.querySelector('.bms-custom-select-menu');
    const arrow = container.querySelector('.bms-custom-select-arrow');

    if (hiddenInput) {
        hiddenInput.value = value;
        hiddenInput.dispatchEvent(new Event('change'));
    }
    if (labelElem) {
        labelElem.textContent = displayText || value;
        labelElem.classList.remove('text-slate-400');
        labelElem.classList.add('text-slate-800', 'font-medium');
    }

    container.querySelectorAll('.checkmark').forEach(cm => cm.classList.add('opacity-0'));
    if (window.event && window.event.currentTarget) {
        const activeCheck = window.event.currentTarget.querySelector('.checkmark');
        if (activeCheck) activeCheck.classList.remove('opacity-0');
    }

    container.classList.remove('z-50');
    if (menu) menu.classList.add('hidden');
    if (arrow) arrow.classList.remove('rotate-180');
}

function toggleProductDropdown(btn) {
    const container = btn.closest('.bms-custom-select');
    if (!container) return;
    const tr = container.closest('tr');
    const menu = container.querySelector('.bms-custom-select-menu');
    const isHidden = menu.classList.contains('hidden');

    // Close all other dropdowns
    document.querySelectorAll('.bms-custom-select-menu').forEach(m => {
        if (m !== menu) {
            m.classList.add('hidden');
            const p = m.closest('.bms-custom-select');
            if (p) p.classList.remove('z-50');
            const parentRow = m.closest('tr');
            if (parentRow) parentRow.classList.remove('z-40', 'relative');
        }
    });

    if (isHidden) {
        if (tr) tr.classList.add('z-40', 'relative');
        container.classList.add('z-50', 'relative');
        menu.classList.remove('hidden');
    } else {
        if (tr) tr.classList.remove('z-40', 'relative');
        container.classList.remove('z-50');
        menu.classList.add('hidden');
    }
}

function selectProductOption(optElem, name, price, cost) {
    const container = optElem.closest('.bms-custom-select');
    if (!container) return;
    const tr = container.closest('tr');
    const hiddenInput = container.querySelector('.item-product-val');
    const labelElem = container.querySelector('.product-selected-label');
    const menu = container.querySelector('.bms-custom-select-menu');

    if (hiddenInput) {
        hiddenInput.value = name;
        hiddenInput.dataset.price = price;
        hiddenInput.dataset.cost = cost;
    }
    if (labelElem) {
        labelElem.textContent = name;
        labelElem.classList.remove('text-slate-400');
        labelElem.classList.add('text-slate-800', 'font-medium');
    }
    container.classList.remove('z-50');
    if (tr) tr.classList.remove('z-40', 'relative');
    if (menu) menu.classList.add('hidden');

    if (tr) {
        const priceInput = tr.querySelector('.item-price');
        if (priceInput) priceInput.value = price.toFixed(2);
        if (typeof recalcQuote === 'function') recalcQuote();
        if (typeof recalcPageQuote === 'function') recalcPageQuote();
        if (typeof recalcInvoice === 'function') recalcInvoice();
        if (typeof recalcPageInvoice === 'function') recalcPageInvoice();
    }
}

// Global click handler to close all custom select dropdown menus when clicked outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.bms-custom-select')) {
        document.querySelectorAll('.bms-custom-select-menu').forEach(menu => {
            menu.classList.add('hidden');
        });
        document.querySelectorAll('.bms-custom-select-arrow').forEach(arrow => {
            arrow.classList.remove('rotate-180');
        });
        document.querySelectorAll('.bms-custom-select').forEach(c => {
            c.classList.remove('z-50');
        });
        document.querySelectorAll('tr').forEach(r => {
            r.classList.remove('z-40', 'relative');
        });
    }
});
