Employee Management System (EMS)

📌 Project Overview

The Employee Management System (EMS) is a full-stack web application designed to streamline HR operations such as employee registration, attendance tracking, leave management, and payroll processing. The system ensures role-based access control (RBAC), providing different functionalities for employees, managers, and administrators.

🚀 Features

🔐 Authentication & Authorization

Implemented Spring Security with JWT to ensure secure access.

Role-based access control for Employees, Managers, and Admins.

👨‍💼 Employee Management

Admins can add, update, delete, and view employee records.

Stores employee details like personal info, job role, and salary.

📊 Attendance & Leave Management

Employees can check in/check out for attendance.

Leave request system where managers can approve/reject requests.

💰 Payroll System

Automatically calculates salaries based on attendance, tax deductions, and bonuses.

Generates pay slips dynamically.

📈 Dashboard & Reports

HR/Admins can view graphical reports for:

Total employees

Attendance trends

Leave statistics

Salary distribution

🛠 Tech Stack

🔹 Backend

Java, Spring Boot, Hibernate, Spring Security (JWT)

MySQL (JPA & Hibernate ORM)

🔹 Frontend

React.js, Redux, Tailwind CSS

🔹 Database

MySQL (Hosted on AWS RDS for cloud deployment)

🔹 DevOps & Tools

Maven, Git, Postman, Docker, AWS (EC2, S3)

🔄 System Workflow

1️⃣ User Authentication – Secure login with JWT tokens.
2️⃣ Employee Management – HR/Admins can create employee profiles, assign job roles, and edit details.
3️⃣ Attendance & Leave – Employees mark attendance and apply for leave.
4️⃣ Payroll Processing – Automated salary calculations with pay slip generation.
5️⃣ Admin Dashboard – Real-time analytics and reports.

🏗 Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/your-username/Employee-Management-System.git
cd Employee-Management-System

2️⃣ Backend Setup

cd backend
mvn spring-boot:run

Ensure MySQL is running and update application.properties with your database credentials.

3️⃣ Frontend Setup

cd frontend
npm install
npm start

🚀 Deployment

🌍 Cloud Deployment (AWS)

Backend deployed on AWS EC2 with MySQL on AWS RDS.

Frontend hosted using AWS S3 + CloudFront.

Dockerized application for containerized deployment.

⚡ Challenges Faced & Solutions

Challenge

Solution

Securing API endpoints

Implemented Spring Security with JWT

Handling large employee data

Optimized queries and implemented pagination

Managing frontend state

Used Redux for efficient state management

Deployment & Scalability

Dockerized and deployed on AWS EC2

📌 Future Enhancements

✅ Implement Multi-Tenant Database Support

✅ Add Automated Email Notifications for payroll & leave approvals

✅ Integrate AI-based Employee Analytics

🤝 Contributing

Contributions are welcome! If you'd like to contribute:

Fork the repository.

Create a new branch (feature-xyz).

Commit your changes.

Open a Pull Request.

📝 License

This project is licensed under the MIT License.