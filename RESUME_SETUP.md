# Resume Setup Instructions

Your resume functionality is now ready! Here's how to complete the setup:

## 📁 **Step 1: Add Your Resume PDF**

1. **Create your resume PDF** (if you don't have one already)
2. **Name the file**: `Ansh_Resume.pdf` 
3. **Place the file** in: `public/resume/Ansh_Resume.pdf`

## 🔧 **Step 2: File Structure**

Your project should now have this structure:
```
portfolio/
├── public/
│   └── resume/
│       └── Ansh_Resume.pdf  ← Your resume goes here
├── src/
│   └── assets/
│       └── Components/
│           ├── Contact.jsx  ← Updated with resume functionality
│           └── ResumeModal.jsx  ← New modal component
```

## ✨ **Features Implemented**

### **Two Resume Buttons:**
1. **👁️ View Resume**: Opens resume in a modal with PDF viewer
2. **⬇️ Download Resume**: Directly downloads the PDF file

### **Modal Features:**
- **📱 Mobile responsive** design
- **🖥️ PDF viewer** with iframe
- **⬇️ Download button** in modal header and footer
- **❌ Close button** and backdrop click to close
- **⚠️ Fallback message** if PDF doesn't load

### **Button Styling:**
- **Primary button** (View Resume): Blue background
- **Secondary button** (Download Resume): Blue border, transparent background
- **📱 Mobile responsive**: Stack vertically on small screens

## 🧪 **Step 3: Test the Functionality**

1. **Start your development server**: `npm run dev`
2. **Navigate to the contact section**
3. **Click "View Resume"** → Should open modal with PDF viewer
4. **Click "Download Resume"** → Should download the PDF file
5. **Test on mobile devices** → Buttons should work properly

## 🛠️ **Troubleshooting**

### **PDF Not Displaying in Modal:**
- Check that the file path is correct: `/public/resume/Ansh_Resume.pdf`
- Make sure the file name matches exactly (case-sensitive)
- Try refreshing the page or clearing browser cache

### **Download Not Working:**
- Verify the PDF file exists in the correct location
- Check browser's download settings
- Try using a different browser

### **Modal Issues:**
- Check for JavaScript console errors
- Ensure the ResumeModal component is imported correctly
- Verify the modal state management is working

## 📝 **Customization Options**

### **Change File Name:**
If you want to use a different filename, update these locations:
1. `ResumeModal.jsx` → Line 6: Change `resumeUrl`
2. `Contact.jsx` → Line 39: Change `link.href` and `link.download`

### **Update Modal Title:**
In `ResumeModal.jsx` → Line 32: Change "Resume - Ansh Sharma"

### **Modify Button Text:**
In `Contact.jsx`:
- Line 116: Change "View Resume" text
- Line 130: Change "Download Resume" text

## 🚀 **Advanced Features (Optional)**

If you want to add more features later:
- **📊 Track downloads** with analytics
- **🔍 Add search functionality** within PDF
- **📱 Better mobile PDF viewing** with alternative viewers
- **🔗 Resume version history** with multiple files
- **📧 Email resume** functionality

## 📱 **Mobile Considerations**

- The modal is fully responsive
- PDF viewing works better on tablets/desktop
- Mobile users can easily download and view in their PDF app
- Buttons are touch-friendly with proper spacing

Your resume functionality is now complete and ready to use! 🎉