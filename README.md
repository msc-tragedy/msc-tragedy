# 🕊️ MSC Tragedy - Victim Identification Site

A static public information site for indexing and identifying students, teachers, and staff affected by the recent **school building plane crash**.  
Hosted at: 👉 [msc-tragedy.github.io](https://msc-tragedy.github.io)

---

## 📋 Purpose

This website was created to assist families, volunteers, and authorities in:

- Identifying victims through name, class, parent names, and photos
- Viewing current status (🟥 Forever, 🟡 Missing, 🟢 Hospitalized)
- Providing blood group and hospital info (if available)
- Allowing visitors to **report found persons** or **request information**
- Viewing ID card photos or student images for confirmation

---

## ⚙️ Features

✅ Fast and simple interface (static frontend only)  
✅ Victim info loaded from `victims.json`  
✅ Lightbox popup for each victim's photo  
✅ Filter victims by class, status, or blood group  
✅ Risk level tags:
- 🔴 Urgent
- 🟡 Critical
- 🟢 Stable  

✅ Mobile responsive layout  
✅ “📤 Report Found” and “📞 Request Info” buttons    
✅ Last updated timestamp  
✅ Bengali support planned (Coming soon)

---

## 🧠 Data Fields per Victim

| Field            | Example                          |
|------------------|----------------------------------|
| Victim ID        | `v001`                           |
| Student ID       | `S-2302`                         |
| Name             | `Ayesha Rahman`                  |
| Parents          | `Rahim & Salma Rahman`           |
| Class, Section   | `Class 6`, `B`                   |
| Shift            | `Morning / Day`                  |
| Status           | `forever / missing / hospitalized` |
| Blood Group      | `A+`, `O-`, etc.                 |
| Hospital Name    | `Dhaka Medical Hospital`         |
| Contact Person   | Phone number of guardian/helper  |
| Photo File       | Located at `photos/victimID.jpg` |

---

## 📂 Project Structure

📁 / → Main repo
├── index.html → Main site layout
├── script.js → Frontend logic
├── style.css → Styles and mobile responsiveness
├── victims.json → Data file for all victims
├── disclaimer.html→ Legal disclaimer
├── /photos/ → Victim images (named by victim ID)

---

## ✍️ Contributing

If you'd like to help:
- Add new victim records
- Upload their photos (as `photos/victimID.jpg`)
- Submit a pull request
- OR contact the repository maintainer

---

## ⚠️ Disclaimer

This website is based on publicly reported information and unofficial sources.  
For **official confirmation**, please contact local authorities or the school administration.  
See full [Disclaimer here](https://msc-tragedy.github.io/disclaimer.html)

---

## 🕯️ Respect & Remembrance

This project is dedicated to the memory of those lost, and to the families still searching.  
May this tool ease the burden of uncertainty and support rescue efforts 💙

---

## 📌 Live Site

🌐 [https://msc-tragedy.github.io](https://msc-tragedy.github.io)
