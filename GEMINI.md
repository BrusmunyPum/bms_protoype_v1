# BMS DigiTech - Project Guidelines & Mandatory Standards

ឯកសារនេះជាគោលការណ៍ណែនាំ និងស្តង់ដារកាតព្វកិច្ចដែលត្រូវអនុវត្តលើ**គ្រប់ទំព័រទាំងអស់ (ALL Pages)** នៃគម្រោង BMS DigiTech ដោយគ្មានការលើកលែង។

---

## ១. គោលការណ៍ភាសាខ្មែរសុទ្ធសាធ (100% Strict Khmer Language)
* អត្ថបទទាំងអស់លើ UI ទាំងមូល (ចំណងជើង, ស្លាក, ប៊ូតុង, តារាង, ដំណឹង Toast, Dialog, Placeholder) និងរាល់ការពន្យល់ឆ្លើយតបជាមួយអ្នកប្រើប្រាស់ ត្រូវតែជា**ភាសាខ្មែរសុទ្ធសាធ ១០០%**។
* ហាមដាច់ខាតការសរសេរពាក្យអង់គ្លេសលាយឡំ ឬពាក្យក្នុងរង្វង់ក្រចកជាភាសាអង់គ្លេស។

---

## ២. ស្តង់ដារកម្ពស់ក្បាលទំព័រ និងក្បាល Sidebar ស្មើគ្នាពិតប្រាកដ (Header Height Alignment)
* ទាំងក្បាល Sidebar ម៉ាកយីហោ (`div`) និង Content Header ខាងស្តាំ (`header`) ត្រូវកំណត់កម្ពស់ថេរ **`h-[72px] px-6 flex-shrink-0`** ដូចគ្នា ១០០% ដើម្បីឱ្យបន្ទាត់បាត (Border divider line) រត់ត្រង់ជួរផ្ដេកតែមួយឥតខ្ចោះ (Pixel-perfect seamless line)។
* **Sidebar Brand Container**:
  ```html
  <div class="h-[72px] px-6 flex items-center border-b border-white/10 flex-shrink-0">
      <h1 class="text-xl font-semibold tracking-wider whitespace-nowrap">BMS DigiTech</h1>
  </div>
  ```
* **Content Top Header**:
  ```html
  <header class="bg-white px-6 h-[72px] flex justify-between items-center shadow-sm z-10 flex-shrink-0">
      <div>
          <h2 class="text-xl font-semibold text-gray-800 leading-tight">ចំណងជើងទំព័រ</h2>
          <p class="text-xs font-normal text-gray-500 mt-0.5">ការពិពណ៌នាសង្ខេបអំពីទំព័រ</p>
      </div>
      ...
  </header>
  ```

---

## ៣. ស្តង់ដារតម្រងកាលបរិច្ឆេទរួម (Unified Date Range Picker Standard)
* រាល់ទំព័រទាំងអស់ដែលមានតម្រងកាលបរិច្ឆេទ (ដូចជា វិក្កយបត្រ, សម្រង់តម្លៃ, ផ្ទាំងគ្រប់គ្រង Dashboard, របាយការណ៍, លទ្ធកម្ម, ស្តុកទំនិញ) **ត្រូវតែប្រើប្រាស់ Component ដូចគ្នាបេះបិទ ១០០% តាមគំរូទំព័រវិក្កយបត្រ (`invoice.html`)**៖
  1. **ប៊ូតុងចុចបើក (Trigger Button)**:
     * ស្លាកអត្ថបទមុខ៖ `<span class="text-xs text-slate-400 hidden sm:inline">កាលបរិច្ឆេទ:</span>`
     * ប៊ូតុង Trigger៖ `h-9 px-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs rounded-xl flex items-center gap-2 shadow-sm transition-all focus:outline-none cursor-pointer`
     * រូបតំណាងប្រតិទិន៖ `<i class="fas fa-calendar-days text-primary text-xs"></i>`
     * អត្ថបទកាលបរិច្ឆេទសកម្ម៖ `<span id="selectedDateLabel" class="font-medium text-slate-800">1 កញ្ញា - 30 កញ្ញា</span>`
     * សញ្ញាព្រួញបង្វិល៖ `<i class="fas fa-chevron-down text-[10px] text-slate-400 transition-transform duration-200 ml-0.5" id="datePickerChevron"></i>`
  2. **ផ្ទាំងទម្លាក់ចុះពីរជួរឈរ (Popover `w-[480px]`)**:
     * **ជួរឈរខាងឆ្វេង (Presets ១០ ជម្រើសរហ័ស)**៖ ថ្ងៃនេះ, ម្សិលមិញ, សប្តាហ៍នេះ, សប្តាហ៍មុន, ខែនេះ (Default Active `bg-[#0f2b5c] text-white`), ខែមុន, ឆ្នាំនេះ, ៧ ថ្ងៃចុងក្រោយ, ១៤ ថ្ងៃចុងក្រោយ, ៣០ ថ្ងៃចុងក្រោយ។
     * **ជួរឈរខាងស្តាំ (Dynamic Calendar Grid)**៖
       - ក្បាលខែឆ្នាំ មានប៊ូតុងរំកិលខែ `< >`
       - ឈ្មោះថ្ងៃជាភាសាខ្មែរ ចាប់ផ្តើមពីថ្ងៃចន្ទ (`ច`, `អ`, `ព`, `ព្រ`, `សុ`, `ស`, `អា`)
       - ក្រឡាប្រតិទិនគណនាស្វ័យប្រវត្តិ អាចចុចជ្រើសរើសចន្លោះកាលបរិច្ឆេទ (Range Selection) មានរង្វង់មូល Navy `#0f2b5c` នៅថ្ងៃចាប់ផ្តើម/បញ្ចប់ និងផ្ទៃពណ៌ `bg-slate-100` នៅចន្លោះកណ្តាល។
     * **ផ្នែកខាងក្រោម (Footer Bar)**៖
       - Capsule Pill Tag បង្ហាញកាលបរិច្ឆេទដែលបានរើសជាមួយប៊ូតុង `x` សម្អាត
       - ប៊ូតុង «បោះបង់» និងប៊ូតុង «ជ្រើសរើស» (`bg-[#0f2b5c] text-white`)
  3. **Script ដំណើរការ**:
     - ប្រើប្រាស់អនុគមន៍ `toggleDatePicker()`, `changeCalendarMonth()`, `renderCalendarGrid()`, `handleDateClick()`, `selectPreset()`, `clearRangeTag()`, `applyDateRange()` ដូចគ្នាបេះបិទ។

---

## ៤. រចនាសម្ព័ន្ធម៉ូឌុល និងថតរង (Modular Feature Subfolder Standard)
* រាល់មុខងារកូននីមួយៗក្នុងម៉ូឌុល (ដូចជា ការលក់ `sales/`, ការទិញ `buy/`, ស្តុក `stock/`, ហិរញ្ញវត្ថុ `finance/`) ត្រូវមានថតរងដាច់ដោយឡែក (Subfolder per child feature)។
* ថតរងនីមួយៗត្រូវរៀបចំឯកសារជា ៣ ទំព័រគោល៖
  1. `[feature].html` (ឧ. `invoice.html`, `quote.html`)៖ ទំព័រតារាងបញ្ជីទិន្នន័យមេ (List View)
  2. `create-[feature].html` (ឧ. `create-invoice.html`, `create-quote.html`)៖ ទំព័រទម្រង់បង្កើតទិន្នន័យថ្មី (Create Form Page)
  3. `edit-[feature].html` (ឧ. `edit-invoice.html`, `edit-quote.html`)៖ ទំព័រទម្រង់កែប្រែទិន្នន័យ (Edit Form Page)
* ហាមដាច់ខាតការដាក់ឯកសារលាយឡំគ្នាក្នុង Root Folder ដោយគ្មានការបែងចែកថតរង ដើម្បីភាពស្អាត និងងាយស្រួលគ្រប់គ្រង (Clean & Modular Architecture)។

---

## ៥. គោលការណ៍ទម្រង់បង្កើត និងកែប្រែ (Dedicated Pages for Create & Edit Forms)
* **ហាមដាច់ខាតការប្រើប្រាស់ Modal Dialog Pop-up** សម្រាប់ទម្រង់បង្កើតថ្មី (Add/Create) ឬទម្រង់កែប្រែ (Edit)។
* រាល់ទម្រង់ Add/Create និង Edit ត្រូវតែជា**ទំព័រពេញលេញដាច់ដោយឡែក (Dedicated Full Page)** ដែលមានប៊ូតុងត្រឡប់ក្រោយ (`← ត្រឡប់ក្រោយ`) និងប្លង់ទម្រង់ទូលាយកម្រិតសហគ្រាស (Enterprise Layout)។

---

## ៦. ហាមដាច់ខាតការប្រើប្រាស់ Browser Native UI (Default Elements)
* **ហាមប្រើ Native `<select>`**៖ ត្រូវប្រើ Custom Dropdown Component ជានិច្ច (មាន Avatar, Checkmark, Hover Effect, និង Stacking Context `z-50`)។
* **ហាមប្រើ `window.alert()`**៖ ត្រូវប្រើ `showToast(message, type)` ជានិច្ច (អណ្តែតជ្រុងលើស្តាំ គែមស្រាល ចលនា Slide-in)។
* **ហាមប្រើ `window.confirm()`**៖ ត្រូវប្រើ `showCustomConfirm(options)` ជានិច្ច (Modal សួរបញ្ជាក់កណ្តាលអេក្រង់ ស្អាតតាមប្រព័ន្ធ)។

---

## ៧. លាក់របាររំកិលទាំងអស់ជាសកល (Globally Hidden Scrollbars)
* រាល់ទំព័រទាំងអស់ត្រូវលាក់របាររំកិលទាំងផ្ដេក និងបញ្ឈរ (Horizontal & Vertical Scrollbars) តាមរយៈ CSS ក្នុង `frontend/src/styles/custom.css` ដោយនៅតែរក្សាដំណើរការរំកិលបានយ៉ាងរលូន ១០០%។

---

## ៨. ប្លង់ទំព័រពេញទទឹងអេក្រង់ (Full Width Layout)
* គ្រប់ទំព័រទាំងអស់ រាល់មាតិកាក្នុង `<main>` ត្រូវតែប្រើប្រាស់ `w-full` ដើម្បីលាតសន្ធឹងពេញផ្ទៃអេក្រង់ ១០០% ហាមដាច់ខាតការប្រើប្រាស់ `max-w-* mx-auto` (ដូចជា `max-w-5xl` ឬ `max-w-7xl`)។

---

## ៩. ជួរឈរសកម្មភាពក្នុងតារាង (Table Row Actions)
* ជួរឈរសកម្មភាពក្នុងតារាងទាំងអស់ ត្រូវប្រើប្រាស់ប៊ូតុង **`⋮`** តែមួយគត់ជាមួយ Floating Action Dropdown Menu (`#rowActionDropdown`) ដែលមានរចនាបថ Capsule Header, រូបតំណាងក្នុងប្រអប់មូលតូច, Hover Effect ស្រស់ស្អាត, និងតំណភ្ជាប់ទៅកាន់ទំព័រ `edit-[feature].html?id=...`។
