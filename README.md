# Interactive Personal Website

**Author:** Rodrick Lungoh  
**Course:** ICT251 Web Technologies  
**Institution:** Mulungushi University – School of Engineering and Technology  
**Live Website:** https://your-site-name.onrender.com  
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

## The Four JavaScript Features

### 1. Contact Form Validation + Preview *(compulsory)*
- Validates **name**, **email**, and **message** when the form is submitted.
- Rejects:
  - Empty fields
  - Whitespace-only names or messages (e.g., `"   "`)
  - Incorrectly formatted emails (e.g., `hello`, `test@`, `@test.com`)
- Shows clear error messages next to each field.
- On success, displays a **local preview** of the data on the page using `textContent`.
- Uses `event.preventDefault()` to keep submission local — **no data is sent anywhere**.
- The form is clearly labelled: *"Browser demonstration only — no message is sent."*

**How to test:**
1. Click **Send message** with empty fields → errors appear.
2. Type spaces only in the name → error appears.
3. Type `hello` in the email field → error appears.
4. Fill in all fields correctly → a preview appears below the form.

---

### 2. Project Filter / Search
- Visitors can type a keyword (e.g., `html`, `css`, `javascript`) into the search box.
- The list of projects filters live as they type.
- A **Reset** button clears the search.
- A message shows how many projects matched, or warns when nothing matches.

**How to test:**
1. Scroll to **Projects & Skills**.
2. Type `css` → only the CSS project shows.
3. Type `xyz` → a message says nothing matches.
4. Click **Reset** → all projects return.

---

### 3. Gallery Viewer (Previous / Next)
- A larger image is displayed with a caption.
- **Previous** and **Next** buttons change the displayed photo and caption.
- The viewer wraps around correctly:
  - Clicking **Previous** on the first photo goes to the last photo.
  - Clicking **Next** on the last photo goes to the first photo.
- A counter shows the current position (e.g., `2 / 3`).

**How to test:**
1. Scroll to **My Photos**.
2. Click **Next** several times → it cycles through all 3 photos.
3. Click **Previous** from the first photo → jumps to the last photo.

---

### 4. Mobile Navigation Toggle
- On narrow screens (about 700px or less), the navigation menu is hidden.
- A **Menu** button opens and closes the navigation menu.
- The button uses `aria-expanded` to indicate its state for accessibility.

**How to test:**
1. Resize the browser window to be very narrow (phone width).
2. Click the **☰ Menu** button → the menu opens.
3. Click again → the menu closes.

---

## Project Structure