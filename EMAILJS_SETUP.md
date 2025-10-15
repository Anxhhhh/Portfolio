# EmailJS Setup Instructions

Your contact form is now ready to work with EmailJS! Follow these steps to complete the setup:

## 1. Create an EmailJS Account
1. Go to https://emailjs.com
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service
1. Go to the **Email Services** section
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Save the Service ID** - you'll need this

## 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message from {{name}}

Hello,

You have received a new message from your portfolio contact form:

Name: {{name}}
Email: {{email}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. **Save the Template ID** - you'll need this

## 4. Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** in the API Keys section
3. **Copy the Public Key** - you'll need this

## 5. Update Your Component
In your Contact component (`src/assets/Components/Contact.jsx`), replace these values on lines 15-17:

```javascript
const SERVICE_ID = 'your_service_id_here';     // From step 2
const TEMPLATE_ID = 'your_template_id_here';   // From step 3
const PUBLIC_KEY = 'your_public_key_here';     // From step 4
```

## 6. Template Variables
Make sure your EmailJS template uses these variable names:
- `{{name}}` - User's name
- `{{email}}` - User's email
- `{{message}}` - User's message

## 7. Test Your Form
1. Save your changes
2. Run your development server: `npm run dev`
3. Navigate to the contact section
4. Fill out and submit the form
5. Check your email for the message!

## Free Plan Limits
- 200 emails per month
- EmailJS branding in emails
- Basic email templates

## Troubleshooting
- Make sure all IDs are correct and saved
- Check browser console for error messages
- Verify your email service is properly connected
- Ensure template variable names match exactly

## Security Note
The Public Key is safe to use in frontend code - it's designed for client-side use.