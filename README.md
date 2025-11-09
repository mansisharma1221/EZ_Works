# 💻 EZ Labs Front-End Intern Task

A modern, fully responsive **React.js single-page web app** built as part of the **EZ Labs Front-End Internship test**.  
This project recreates the **given Figma design** and includes a **Contact Form** integrated with a real API endpoint for form submission.

---

## ✨ Features

✅ **Recreated Home Page** from Figma design  
📱 **Fully Responsive Layout** for mobile, tablet, and desktop  
🧾 **Contact Form Integration** with live API connection  
🧩 **Form Validations**
- No empty fields allowed  
- Valid email format required  
💬 **Success Message** on successful API response (status 200)  
⚡ **Smooth performance** with Vite + Bootstrap  
🎨 **Clean and Minimal UI Design**

---

## 🛠️ Tech Stack

- ⚛️ **React.js (Vite)**
- 🎨 **Bootstrap 5**
- 🧩 **CSS3**
- 🔗 **Fetch / Axios API Integration**
- 🧪 **Postman** (for API testing)

---

## 📁 Project Structure
EZ_test/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── HeroSection.jsx
│ │ ├── Services.jsx
│ │ └── ContactForm.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── postman_dump.json
├── README.md
├── package.json
├── vite.config.js
└── .gitignore


---

## 🧪 API Information

**Endpoint:**  
`https://vernanbackend.ezlab.in/api/contact-us/`

**Method:**  
`POST`

### 📨 Request Body Example
```json
{
  "name": "Mansi Sharma",
  "email": "mansi@gmail.com",
  "phone": "9876543210",
  "message": "This is a test message"
}
```
### ✅ Expected Response
```
{
  "message": "Contact request submitted successfully, but email notification failed",
  "data": {
    "id": 4908,
    "name": "Mansi Sharma",
    "email": "mansi@gmail.com",
    "phone": "9876543210",
    "message": "This is a test message",
    "created_at": "2025-11-09T14:41:58.666737Z",
    "updated_at": "2025-11-09T14:41:58.666754Z"
  }
}
```

✅ The above response confirms that the API integration is working successfully.

🧾 Postman Dump

📄 The file postman_dump.json is included in this repository.
It contains the exported Postman collection used to test the API endpoint and verify response codes.

###⚙️ How to Run Locally
```
# 1️⃣ Clone the repository
git clone https://github.com/mansisharma1221/EZ_test.git

# 2️⃣ Navigate into the folder
cd EZ_test

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the development server
npm run dev

```
Then open http://localhost:5173
 in your browser 🚀

## 👩‍💻 Author

Mansi Sharma
🎯 Front-End Developer | Creative Coder | UI Enthusiast
🔗 GitHub Profile

“Good design is not just what it looks like — it’s how it works.”
— Built with ❤️ using React.js and Bootstrap


