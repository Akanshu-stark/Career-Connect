# Career Connect --[link](https://job-listing-app-fb704.web.app/)

Career Connect is a job listing website built with React.js. It provides a modern and intuitive platform for users to discover job opportunities, featuring a clean user interface designed with Material UI. The application utilizes Firestore as the backend database for storing and managing job listings and user data, and it's deployed using Firebase for easy access and scalability.

## Features

- **Job Listings**: Browse and search through various job listings.
- **Firestore Integration**: Dynamic data fetching and storage using Firestore.
- **Material UI**: Responsive and attractive UI components.
- **Firebase Deployment**: Fast and reliable hosting via Firebase.

## Technologies Used

- **React.js**: Frontend framework for building the user interface.
- **Material UI**: React components library for a consistent look and feel.
- **Firestore**: NoSQL database for real-time data storage and retrieval.
- **Firebase Hosting**: For deploying and hosting the web application.

## Installation

To get started with Career Connect, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/career-connect.git
   cd career-connect
   ```

2. **Install Dependencies**

   Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

   ```bash
   npm install
   ```

3. **Set Up Firebase**

   Create a Firebase project and configure Firestore and Authentication. Follow these steps:

   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new project or use an existing one.
   - Set up Firestore and enable Firebase Authentication.
   - Obtain your Firebase configuration details from the Firebase Console and create a `.env` file in the root directory of your project with the following content:

     ```env
     REACT_APP_FIREBASE_API_KEY=your-api-key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
     REACT_APP_FIREBASE_PROJECT_ID=your-project-id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
     REACT_APP_FIREBASE_APP_ID=your-app-id
     ```

4. **Run the Development Server**

   Start the development server with:

   ```bash
   npm start
   ```

   Open your browser and navigate to `http://localhost:3000` to view the application.

## Deployment

To deploy the application to Firebase Hosting:

1. **Install Firebase CLI**

   If you haven't already, install the Firebase CLI:

   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**

   Log in to your Firebase account:

   ```bash
   firebase login
   ```

3. **Initialize Firebase**

   Initialize your Firebase project:

   ```bash
   firebase init
   ```

   Follow the prompts to set up Firebase Hosting.

4. **Deploy**

   Deploy your application to Firebase Hosting:

   ```bash
   npm run build
   firebase deploy
   ```

   After deployment, your application will be available at the URL provided by Firebase Hosting.

## Contributing

We welcome contributions to Career Connect! If you have suggestions, improvements, or bug fixes, please create a pull request or open an issue on GitHub.


---
