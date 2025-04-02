SpaceX Launch Explorer
COMP 3133 – Full Stack Development II – Lab Test 2
By: Daria Ignateva (101431121)

This is an Angular application that displays SpaceX launch missions using the SpaceX API. Users can filter launches based on year, launch success, and landing success, and view detailed mission information.

🌟 Features
View All SpaceX Missions with launch year, success status, and rocket details.

Filter Missions based on launch year, launch success, and landing success.

View Detailed Information about each mission, including mission patch, launch site, and failure details.

Modern UI built with Angular Material.

Deployed on Vercel for easy access.

📸 Screenshots
Home Page - Mission List

Filtered Missions

Mission Details Page

🛠️ Tech Stack
Frontend: Angular, Angular Material

Backend API: SpaceX API

Deployment: Vercel

🚀 Setup & Installation
1️⃣ Clone the repository
bash
Copy
Edit
git clone https://github.com/your-github-username/your-repo-name.git
cd your-repo-name
2️⃣ Install dependencies
bash
Copy
Edit
npm install
3️⃣ Run the app locally
bash
Copy
Edit
ng serve
Then, open http://localhost:4200/ in your browser.

4️⃣ Build for production
bash
Copy
Edit
ng build --configuration=production
5️⃣ Deploy on Vercel
bash
Copy
Edit
vercel --prod
📂 Project Structure
pgsql
Copy
Edit
/src
  ├── app/
  │   ├── mission-list/  --> Displays the list of SpaceX launches
  │   ├── mission-details/  --> Shows details of a specific mission
  │   ├── services/  --> Fetches data from SpaceX API
  │   ├── app.routes.ts  --> Configures Angular routes
  │   ├── app.component.ts  --> Main entry component
  ├── assets/
  ├── styles.css  --> Global styles
  ├── main.ts  --> Application bootstrap
  ├── index.html  --> App entry point
  ├── angular.json  --> Angular configuration
  ├── package.json  --> Dependencies and scripts
