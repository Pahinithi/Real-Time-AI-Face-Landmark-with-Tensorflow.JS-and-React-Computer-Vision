# Facial Landmark Recognition with Tensorflow.JS and React

Facial Landmark Recognition is a web-based application that detects key facial landmarks in real-time or on uploaded images using TensorFlow.JS and React. The application identifies key facial features like eyes, nose, and mouth to help with various tasks like facial analysis, gesture recognition, and emotion detection.


## Table of Contents

- [Overview](#overview)
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This project uses **TensorFlow.JS** to detect facial landmarks in real-time directly in the browser. It’s built on a **React** framework, making the user interface responsive and interactive. The web app can either utilize a webcam for real-time detection or analyze images uploaded by the user to locate key facial landmarks.

The application is designed for developers and enthusiasts who are keen to explore the application of machine learning models within web technologies using TensorFlow.JS.

## Demo

You can try the live demo of this application here:  
[**Live Demo**](https://drive.google.com/file/d/1Jj0IcL__yo7DcXnuuKlvS2-ahKMbmCVg/view?usp=share_link)

---

## Features

- **Real-time Detection**: Detect facial landmarks through your webcam in real-time.
- **Image Upload**: Upload an image to detect facial landmarks on it.
- **TensorFlow.JS Model**: Utilizes a pre-trained facial landmark model from TensorFlow.JS.
- **Responsive UI**: Built with React and Bootstrap to ensure a smooth user experience.
- **Visual Landmark Markers**: Display markers for facial features like eyes, nose, and mouth.

---

## Technologies Used

- **React** – A JavaScript library for building user interfaces.
- **TensorFlow.JS** – Machine learning library that brings ML to the browser.
- **WebCam API** – Captures video input directly from the user’s webcam.
- **Bootstrap** – Front-end framework for responsive web design.

---

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/facial-landmark-recognition.git
   cd facial-landmark-recognition
   ```

2. **Install the dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

## Usage

### Real-time Landmark Detection:

1. **Start your webcam**: Click the "Start Webcam" button to activate your webcam.
2. **Facial landmark detection**: Watch as the app detects and marks key facial features in real-time on your face.

### Image Upload Landmark Detection:

1. **Upload an image**: Click "Upload Image" to select a photo from your computer.
2. **See the results**: The app will process the image and mark key facial landmarks.

---

## Project Structure

Here's a breakdown of the project's file structure:

```bash
.
├── public
│   ├── index.html                # Main HTML template
│   └── ...
├── src
│   ├── components
│   │   ├── WebcamComponent.js     # Handles webcam functionality
│   │   ├── ImageUploadComponent.js# Manages image uploads
│   │   └── LandmarkDisplay.js     # Displays the detected landmarks on the face
│   ├── assets                    # Images and static files
│   ├── App.js                    # Main React app file
│   └── index.js                  # Entry point for the React app
├── .gitignore                     # Ignored files during version control
├── package.json                   # Dependencies and scripts
└── README.md                      # This file
```

- **WebcamComponent.js**: Manages real-time facial detection via the webcam.
- **ImageUploadComponent.js**: Allows users to upload images for landmark detection.
- **LandmarkDisplay.js**: Displays the detected facial landmarks with visual markers.

---

## Screenshots

<img width="1728" alt="CV01" src="https://github.com/user-attachments/assets/cc125c6b-e490-486b-9da8-99c4a9677076">


---

## Contributing

Contributions are always welcome! Here’s how you can get involved:

1. **Fork** the repository.
2. **Create your feature branch** (`git checkout -b feature/NewFeature`).
3. **Commit your changes** (`git commit -m 'Add new feature'`).
4. **Push to the branch** (`git push origin feature/NewFeature`).
5. **Open a pull request** to review and merge the changes.

---

## License

This project is licensed under the MIT License. 

---

### Developed by Nithilan

Thank you for checking out the project! Feel free to reach out if you have any questions or suggestions.

---

## Additional Information

### Known Issues

- **Webcam permissions**: The app requires webcam access. Ensure that permissions are granted in the browser.
- **Browser compatibility**: This application is designed to work best in modern browsers like Chrome and Firefox. Compatibility with older browsers may vary.

