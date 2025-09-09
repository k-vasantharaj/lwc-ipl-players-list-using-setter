🏏 IPL Players List using Setter – Parent-Child Communication
📖 Overview

This Salesforce Lightning Web Component (LWC) demonstrates:
✨ Parent-to-Child Communication using @api setter
✨ Conditional Rendering
✨ Data Transformation (Uppercasing Names)

It displays IPL players grouped by their teams (MI & CSK) inside Lightning Carousels, with images and descriptions styled using SLDS.

🎯 Features

✅ Pass player data from parent to child
✅ Split players into CSK and MI using @api setter
✅ Convert all player names to UPPERCASE
✅ Display players with image, name, and description
✅ Styled using Salesforce Lightning Design System (SLDS)
✅ Works on App Page, Home Page, and Record Page

🛠️ Technologies Used

⚡ Lightning Web Components (LWC)
🎨 Salesforce Lightning Design System (SLDS)
📜 JavaScript (ES6+)
🏗️ HTML5
🎭 CSS3
☁️ Salesforce Platform

⚙️ Installation

📂 Clone this repository:

git clone -https://github.com/k-vasantharaj/lwc-ipl-players-list-using-setter/tree/main


🚀 Deploy to your Salesforce Org using SFDX or VS Code

🛠️ Add the component via Lightning App Builder to:

🏠 Home Page

📄 Record Page

📱 App Page

▶️ How It Works

🔹 Step 1: Parent Component

Contains an array of IPL players with details like name, team, image, and description

Passes the data to the child component using players={playersObj}

🔹 Step 2: Child Component

Uses an @api setter to:

Convert names to UPPERCASE

Filter players into MI and CSK groups

🔹 Step 3: Display Players

Renders players in Lightning Carousels per team

Each player shows:

🖼️ Image

🔠 Name (uppercase)

📝 Description

🚀 Example Usage

1️⃣ Parent passes 6 IPL players → MS Dhoni, Jadeja, Ashwin (CSK) & Rohit, SKY, Bumrah (MI)
2️⃣ Child processes → splits into MI & CSK groups, uppercases names
3️⃣ UI → Carousels display players grouped by their team

📸 Screenshots

<img width="164" height="263" alt="1" src="https://github.com/user-attachments/assets/47c7b416-b708-4f7c-86bb-20265fd9779e" />
<img width="164" height="260" alt="2" src="https://github.com/user-attachments/assets/14f3d3ad-0a8a-4040-84cc-379460909f30" />
<img width="164" height="263" alt="3" src="https://github.com/user-attachments/assets/f584c703-473c-4997-b497-6656bce70cb2" />
<img width="166" height="248" alt="5" src="https://github.com/user-attachments/assets/2744eecd-ab20-441d-82dd-01fe74555eec" />
<img width="164" height="248" alt="6" src="https://github.com/user-attachments/assets/dd896be3-7ed1-4e13-8a51-c908067aabcd" />
<img width="164" height="251" alt="7" src="https://github.com/user-attachments/assets/6f93e86a-231d-48a2-8568-2ccc4cd48d2e" />
