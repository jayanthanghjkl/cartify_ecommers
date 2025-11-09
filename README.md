# 🛒 Cartify — Modern E-Commerce Web App

Cartify is a **modern, elegant, and fully functional e-commerce web app** built using **React**, **Zustand**, and **Zod**.  
It delivers a seamless shopping experience with product browsing, cart management, and secure checkout — all styled with a premium color theme inspired by [Webflow Store Starter Template](https://store-starter-template.webflow.io/) and [HTMLCodex E-Shop Template](https://htmlcodex.com/demo/?item=1176).

---

## ✨ Features

- 🧠 **Global State Management:** Powered by Zustand for clean and reactive app-wide state.  
- 🧾 **Schema Validation:** Zod ensures type-safe form handling and API validation.  
- 🔒 **Authentication:** Login and Signup dropdown next to the cart icon with mock API integration.  
- 🛍️ **Cart System:** Add, update, and remove items dynamically.  
- 🧩 **Responsive Design:** Fully responsive with a premium white & rose-pink theme.  
- 🎨 **Theme Colors:**  
  - Primary: `#D19C97`  
  - Background: White  
  - Text: Black  

---

## 🏗️ Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend | React (Vite) |
| State Management | Zustand |
| Validation | Zod |
| Styling | CSS / Tailwind |
| API Source | DummyJSON / Reqres (Mock APIs) |
| Version Control | Git & GitHub |

---

## 📂 Folder Structure

```

cartify/
┣ src/
┃ ┣ components/
┃ ┃ ┣ Header.jsx
┃ ┃ ┣ Cart.jsx
┃ ┃ ┗ LoginDropdown.jsx
┃ ┣ pages/
┃ ┃ ┣ Home.jsx
┃ ┃ ┗ Checkout.jsx
┃ ┣ store/
┃ ┃ ┣ cartStore.js
┃ ┃ ┗ authStore.js
┃ ┣ schemas/
┃ ┃ ┣ checkoutSchema.js
┃ ┃ ┗ authSchema.js
┃ ┗ App.jsx
┣ public/
┣ package.json
┗ vite.config.js

````

---

## ⚙️ Setup Instructions

```bash
# Clone the repository
git clone https://github.com/jayanthanghjkl/cartify-blueprint.git
cd cartify

# Install dependencies
npm install

# Run the app locally
npm run dev

# Build for production
npm run build
````

---

## 🌐 API Integration

Currently using **DummyJSON** and **Reqres** for mock data and authentication.
You can replace these with your custom backend later or integrate a free product API like **FakeStoreAPI** or **Open E-Commerce API**.

---

## 💡 Inspirations

* [Store Starter Template – Webflow](https://store-starter-template.webflow.io/)
* [E-Shop Template – HTMLCodex](https://htmlcodex.com/demo/?item=1176)

---

## 🧠 Developer

**👨‍💻 Developed by:** [Jayanthan](https://github.com/jayanthanghjkl)
A passionate learner from **Webzenith Solutions 100 Days Bootcamp**, focused on building scalable and type-safe web applications.

---

## 🚀 Project Status

✅ Fully functional front-end
✅ Zustand + Zod integrated
✅ Login/Signup dropdown added
🚧 Backend API integration next

---

### 🏷️ Tags

`#React` `#Vite` `#Zustand` `#Zod` `#EcommerceApp` `#WebzenithSolutions` `#WebDevelopment` `#Frontend`
