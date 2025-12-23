# Job Application Autofill – Chrome Extension

## Overview
This Chrome extension helps users quickly autofill common job application fields
such as **Full Name, Email Address, Phone Number, and Skills / Experience** with a single click.

The purpose of this project is to demonstrate JavaScript fundamentals,
DOM manipulation, and a basic understanding of Chrome Extensions using **Manifest V3**.
The focus is on working functionality and clarity rather than extra features.

---

## Tech Stack
- JavaScript (ES6+)
- Chrome Extensions (Manifest V3)

---

## Features
- Simple popup with an **“Autofill Form”** button
- Automatically detects and fills common job application fields
- Uses content scripts to safely interact with webpage DOM
- Works on standard input fields and text areas

---

## Setup & Installation
1. Clone this repository
2. Open Google Chrome and navigate to `chrome://extensions`
3. Enable **Developer Mode** (top-right corner)
4. Click **Load unpacked**
5. Select the project folder

The extension should now appear in your Chrome toolbar.

---

## How to Use
1. Open any job application form in your browser
2. Click the extension icon
3. Click the **“Autofill Form”** button
4. The form fields will be filled automatically

---

## How It Works (Brief)
- The popup button sends a message to the content script
- The content script scans the page for `input` and `textarea` elements
- Fields are matched using their `name` and `placeholder` attributes
- Values are filled and an `input` event is triggered for compatibility with modern frameworks like React

---

## Assumptions & Limitations
- Assumes standard form fields (`input`, `textarea`)
- Field detection is based on common keywords in `name` or `placeholder`
- User data is hardcoded for demonstration purposes
- Highly custom or non-standard forms may require additional handling

---

## Project Structure
```
job-autofill-extension/
│
├── manifest.json
├── popup.html
├── popup.js
├── script.js
├── README.md
```

---

## Notes
This project was built as part of a technical assignment for :contentReference[oaicite:0]{index=0}, with an emphasis on clarity, simplicity, and practical problem-solving.
