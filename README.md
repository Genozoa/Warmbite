# WarmBite Website

A responsive marketing website for WarmBite, featuring self-heating Filipino meals and information about how the product works.

## Project Overview
This project is a static website for WarmBite. It includes:
- A home page with hero content and calls to action
- A How It Works page explaining the PAWE method
- A Meals page with meal categories, a carousel, and product detail interactions
- An About Us page with distribution and brand information

## Folder Structure
```text
warmbite2/
├── index.html
├── about-us.html
├── how-it-works.html
├── meals.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── public/
└── README.md
```

## How to Run Locally
You can open the site directly in a browser by opening index.html, or serve the folder from a simple local web server.

Example with Python:
```bash
python -m http.server 8000
```
Then visit http://localhost:8000.

## Main Features
- Responsive layout for desktop, tablet, and mobile screens
- Mobile-friendly navigation
- Hero branding and CTA buttons
- Meal showcase carousel
- Product detail modal
- Email, phone, and map-related links

## Styling and Scripts
- Styling is handled in css/style.css
- Interactive behavior is handled in js/script.js

## Deployment
This site can be deployed to any static hosting service such as:
- GitHub Pages
- Netlify
- Cloudflare Pages

## Security and Privacy Notes
- This is a static site with no user accounts, login system, or payment processing
- Do not commit private credentials, API keys, or other secrets
- Review public contact details before publishing if you want to avoid sharing personal information
- Use HTTPS on deployment and keep links updated

## Maintenance Tips
- Keep text and imagery consistent across all pages
- Update the contact email, phone number, and map links if they change
- Test the site on mobile and desktop after major updates
