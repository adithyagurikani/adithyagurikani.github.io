<<<<<<< HEAD
# React Portfolio

A modern, elegant portfolio website built with React, Vite, and Framer Motion.

## Features

✨ **Smooth Animations** - Powered by Framer Motion for buttery-smooth page transitions and interactions
🎨 **Dark/Light Theme** - Toggle between themes with smooth transitions
📱 **Fully Responsive** - Looks great on all devices
📧 **Contact Form** - Integrated with EmailJS for real email sending
🎯 **Scroll Animations** - Elements animate into view as you scroll
⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **EmailJS** - Email service for contact form
- **React Hot Toast** - Toast notifications
- **Lucide React** - Icon library

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Setting Up EmailJS

To enable the contact form to send real emails:

1. **Create an EmailJS Account**
   - Go to [EmailJS](https://www.emailjs.com/)
   - Sign up for a free account

2. **Create an Email Service**
   - In the EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions

3. **Create an Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use these template variables:
     ```
     From: {{from_name}} ({{from_email}})
     Message: {{message}}
     ```

4. **Get Your Credentials**
   - Service ID: Found in "Email Services"
   - Template ID: Found in "Email Templates"
   - Public Key: Found in "Account" > "API Keys"

5. **Update Contact.jsx**
   - Open `src/components/Contact.jsx`
   - Find the commented EmailJS code around line 24
   - Uncomment it and replace the placeholders:
     ```javascript
     await emailjs.send(
       'YOUR_SERVICE_ID',      // Replace with your Service ID
       'YOUR_TEMPLATE_ID',     // Replace with your Template ID
       {
         from_name: formData.name,
         from_email: formData.email,
         message: formData.message,
       },
       'YOUR_PUBLIC_KEY'       // Replace with your Public Key
     );
     ```

## Customization

### Personal Information

Update the following files with your information:

- `src/components/Hero.jsx` - Your name and introduction
- `src/components/About.jsx` - About text and skills
- `src/components/Experience.jsx` - Work experience
- `src/components/Projects.jsx` - Your projects
- `src/components/Testimonials.jsx` - Testimonials
- `src/components/Contact.jsx` - Contact email
- `src/components/SocialSidebar.jsx` - Social media links
- `src/components/EmailSidebar.jsx` - Email address

### Colors and Theme

Edit `src/App.css` to customize the color scheme:

```css
:root {
    --dark-navy: #020c1b;
    --navy: #0a192f;
    --green: #64ffda;
    /* ... more variables */
}
```

## Project Structure

```
react-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── SocialSidebar.jsx
│   │   └── EmailSidebar.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### GitHub Pages

```bash
npm run build
# Deploy the 'dist' folder to GitHub Pages
```

## License

MIT License - feel free to use this for your own portfolio!

## Credits

Inspired by [Brittany Chiang's portfolio](https://brittanychiang.com/)
=======
# adithyagurikani.github.io
>>>>>>> d068072c6c48262c8b722071410a0762af0b9ed0
