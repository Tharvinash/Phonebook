
# Phonebook Application

A full-stack phonebook application using Django for the backend and React for the frontend.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- Python 3.9 or higher
- Node.js 14 or higher
- npm

### Backend (Django)

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Tharvinash/Phonebook.git
   cd phonebookBackEnd/phonebook

2. **Create a Virtual Environment**

   ```bash
   python -m venv venv

3. **Activate the Virtual Environment**

   ```bash
   venv\Scripts\activate

4. **Install Dependenciest**

   ```bash
   pip install -r requirements.txt

5. **Install Dependenciest**

   ```bash
   python manage.py migrate


6. **Start the Development Server**

   ```bash
   python manage.py runserver

### Frontend (React)

1. **Navigate to the Frontend Directory**

   ```bash
   cd phonebookFrontEnd/phonebook

2. **Install Dependencies**

   ```bash
   npm install

3. **Start the Development Server**

   ```bash
   npm run dev

### API Endpoints
- GET /api/contacts/ - Retrieve all contacts
- POST /api/contacts/ - Create a new contact
- PUT /api/contacts/{id}/ - Update a contact by ID
- DELETE /api/contacts/{id}/ - Delete a contact by ID
