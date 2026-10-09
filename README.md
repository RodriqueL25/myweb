# Interactive Personal Website

**Author:** Rodrick Lungoh  
**Course:** ICT251 Web Technologies  
**Institution:** Mulungushi University – School of Engineering and Technology  
**Live Website:** https://myweb-s7qj.onrender.com/
**GitHub Repository:** https://github.com/RodriqueL25/myweb

---

## About This Project

This is my personal student portfolio, built as part of ICT251 Activity 3. 
It is a static website that showcases my introduction, hobbies, learning plan, 
skills, photo gallery, media, and a contact form.

It was built with:
- **HTML5** for structure
- **CSS3** for styling and responsive design
- **JavaScript (vanilla)** for interactivity

The site is deployed on **Render** via **GitHub**.

---

## JavaScript Features

This project includes four required JavaScript features (one compulsory + three chosen) plus two bonus features for extra polish. All logic lives in `js/script.js` and is loaded with `defer`.

---

### 1. Contact Form Validation + Preview *(compulsory)*
- Validates **name**, **email**, and **message** when the form is submitted.
- Rejects:
  - Empty fields
  - Whitespace-only names or messages (e.g., `"   "`)
  - Incorrectly formatted emails (e.g., `hello`, `test@`, `@test.com`)
- Shows clear error messages next to each field.
- On success, displays a **local preview** of the data on the page using `textContent` (safe from HTML injection).
- Uses `event.preventDefault()` to keep submission local — **no data is sent anywhere**.
- The form is clearly labelled: *"Browser demonstration only — no message is sent."*

**How to test:**
1. Click **Send message** with empty fields → errors appear under each field.
2. Type spaces only in the name → "Please enter your name." appears.
3. Type `hello` in the email field → "Please enter a valid email address." appears.
4. Fill in all fields correctly → a **Validated Preview** box appears below the form showing your data.

---

### 2. Expandable Project Details
- Each project card has a **"Show details"** button.
- Clicking toggles the details open or closed and changes the button text to **"Hide details"**.
- The button uses `aria-expanded` for accessibility.

**How to test:**
1. Scroll to **Projects & Skills**.
2. Click **Show details** on any card → hidden text appears.
3. Click again → details hide and the button returns to **Show details**.

---

### 3. Project Filter / Search
- Visitors can type a keyword (e.g., `html`, `css`, `javascript`) into the search box.
- Projects filter live as you type based on their `data-tags` and visible text.
- A **Reset** button clears the search and returns focus to the input.
- A status message shows how many projects matched, or warns when nothing matches.

**How to test:**
1. Scroll to **Projects & Skills**.
2. Type `css` → only the CSS project shows.
3. Type `javascript` → only the JavaScript project shows.
4. Type `xyz` → a message says "No projects match your search."
5. Click **Reset** → all projects return.

---

### 4. Gallery Viewer (Previous / Next)
- A larger image is displayed with its caption below.
- **Previous** and **Next** buttons change the displayed photo and caption.
- The viewer wraps around correctly:
  - Clicking **Previous** on the first photo goes to the last photo.
  - Clicking **Next** on the last photo goes to the first photo.
- A counter shows the current position (e.g., `2 / 3`).

**How to test:**
1. Scroll to **My Photos**.
2. Click **Next** several times → it cycles through all three photos.
3. Click **Previous** from the first photo → jumps to the last photo.

---

### 5. Dark / Light Theme Switch *(bonus)*
- A button in the navigation bar toggles between light and dark mode.
- Both themes use colour variables so text, buttons, links, and borders remain readable.
- The user's preference is saved in `localStorage` and restored on page reload.

**How to test:**
1. Click **🌙 Dark** → the whole page switches to dark mode.
2. Click **☀ Light** → it switches back to light mode.
3. Refresh the page → the theme you last chose is remembered.

---

### 6. Mobile Navigation Toggle *(bonus)*
- On narrow screens (about 700px or less), the navigation menu is hidden.
- A **☰ Menu** button opens and closes the navigation.
- The button text changes to **✕ Close** when open, and `aria-expanded` reflects the state.

**How to test:**
1. Resize the browser window to a narrow (phone-like) width.
2. Click **☰ Menu** → the navigation opens.
3. Click **✕ Close** → the navigation closes.

---

### Summary Table

| # | Feature | Type |
|---|---|---|
| 1 | Contact form validation + preview | **Compulsory** |
| 2 | Expandable project details | Chosen |
| 3 | Project filter / search | Chosen |
| 4 | Gallery viewer (prev / next) | Chosen |
| 5 | Dark / light theme switch | Bonus |
| 6 | Mobile navigation toggle | Bonus |