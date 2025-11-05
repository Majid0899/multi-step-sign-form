🌟 Multi-Step Signup Form
    A responsive 3-step signup form built with React, Tailwind CSS, and Framer Motion.Includes form validation, smooth transitions, and a success confirmation screen.

🚀 Features

✅ Multi-step navigation (Next / Back)
✅ Form validation (email format, password match, required fields)
✅ Review & Edit before submission
✅ Success message on completion
✅ Responsive design (Desktop + Mobile)
✅ Tailwind CSS styling
✅ Smooth transitions using Framer Motion

🧱 Project Structure
src/
 ├── components/
 │   ├── Step1PersonalInfo.jsx
 │   ├── Step2AccountDetails.jsx
 │   ├── Step3Review.jsx
 │   ├── ProgressBar.jsx
 │   └── SuccessScreen.jsx
 ├── App.jsx
 ├── index.css
 └── main.jsx


🧰 Tech Stack

| Technology        | Purpose                     |
| ----------------- | --------------------------- |
| **React**         | UI framework                |
| **Tailwind CSS**  | Styling & responsiveness    |
| **Framer Motion** | Smooth step transitions     |
| **Vite / CRA**    | Build tool (whichever used) |

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/Majid0899/multi-step-sign-form.git
cd multi-step-signup-form

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm start

4️⃣ Build for production
npm run build

🧩 Form Steps Overview
Step 1: Personal Information

Full Name

Email Address

Phone Number

Validates required fields & email format, name , phone number.

Step 2: Account Details

Username

Password (show/hide toggle)

Confirm Password

Password must be ≥ 6 characters and match

Step 3: Review & Confirmation

Displays all entered details

Option to go back and edit

Submit button to finish signup

Success Screen

Displays “Signup Successful 🎉” message after completion



📱 Responsiveness

Mobile-first design

Scales cleanly on tablets and desktop

Uses Tailwind’s responsive utility classes

🧠 Validation Rules
Field	Rule
Full Name	Required atleast two word
Email	Must be a valid format
Phone	Required
Password	≥ 6 characters
Confirm Password	Must match password


Local storage to save progress


Progress bar with icons



📸 Screenshots
Step	Preview
Step 1	

Step 2	

Step 3	

Success

🧑‍💻 Author

Majid Khan
majidkhan0899@gmail.com

