# 🚀 Deployment Guide - MediGuide AI

This guide will help you deploy MediGuide AI to production.

---

## 📋 Pre-Deployment Checklist

### 1. Environment Setup
- [ ] Node.js 18+ installed
- [ ] Firebase project created
- [ ] Domain name registered (optional)
- [ ] SSL certificate ready (automatic with most hosts)

### 2. Configuration
- [ ] `.env` file configured with production values
- [ ] Firebase Security Rules set up
- [ ] API keys secured
- [ ] CORS configured

### 3. Code Quality
- [ ] All tests passing (`npm test`)
- [ ] No TypeScript errors (`npm run type-check`)
- [ ] No linting errors (`npm run lint`)
- [ ] Production build successful (`npm run build`)

---

## 🔧 Deployment Options

### Option 1: Firebase Hosting (Recommended)

**Pros**: Free tier, automatic SSL, CDN, easy setup  
**Cost**: Free for small projects, $0.026/GB for larger

#### Steps:

1. **Install Firebase CLI**
```bash
npm install -g firebase-tools
```

2. **Login to Firebase**
```bash
firebase login
```

3. **Initialize Firebase**
```bash
firebase init hosting
```

Select:
- Use existing project
- Public directory: `dist`
- Single-page app: Yes
- GitHub auto-deploy: Optional

4. **Build the project**
```bash
npm run build
```

5. **Deploy**
```bash
firebase deploy
```

Your app will be live at: `https://your-project.web.app`

#### Custom Domain Setup:
```bash
firebase hosting:channel:deploy production
```

Then add your custom domain in Firebase Console.

---

### Option 2: Vercel

**Pros**: Zero config, automatic deployments, free SSL  
**Cost**: Free for personal projects

#### Steps:

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy**
```bash
vercel
```

3. **Production Deploy**
```bash
vercel --prod
```

#### Or use GitHub Integration:
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Configure build settings:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Add environment variables
5. Deploy!

---

### Option 3: Netlify

**Pros**: Drag-and-drop deploy, form handling, serverless functions  
**Cost**: Free for personal projects

#### Steps:

1. **Build the project**
```bash
npm run build
```

2. **Deploy via Netlify CLI**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

#### Or use Netlify Drop:
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your `dist` folder
3. Done!

#### Or GitHub Integration:
1. Connect your GitHub repository
2. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy!

---

### Option 4: AWS S3 + CloudFront

**Pros**: Scalable, reliable, full control  
**Cost**: ~$1-5/month for small projects

#### Steps:

1. **Create S3 Bucket**
```bash
aws s3 mb s3://mediguide-ai
```

2. **Build and Upload**
```bash
npm run build
aws s3 sync dist/ s3://mediguide-ai
```

3. **Configure CloudFront**
- Create distribution
- Point to S3 bucket
- Enable HTTPS
- Set up custom domain

---

### Option 5: Docker + Any Cloud

**Pros**: Portable, consistent, works anywhere  
**Cost**: Varies by provider

#### Dockerfile:
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### Deploy:
```bash
docker build -t mediguide-ai .
docker run -p 80:80 mediguide-ai
```

---

## 🔐 Environment Variables

### Production `.env`:
```env
# Firebase Production Config
VITE_FIREBASE_API_KEY=your_production_api_key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Optional: Analytics
VITE_GA_TRACKING_ID=UA-XXXXXXXXX-X

# Optional: Error Tracking
VITE_SENTRY_DSN=https://xxx@sentry.io/xxx
```

---

## 🛡️ Security Configuration

### Firebase Security Rules

**Firestore Rules** (`firestore.rules`):
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Appointments
    match /appointments/{appointmentId} {
      allow read, write: if request.auth != null 
        && request.auth.uid == resource.data.userId;
    }
    
    // Doctor Reports
    match /doctorReports/{reportId} {
      allow read, write: if request.auth != null 
        && request.auth.uid == resource.data.userId;
    }
    
    // Lab Reports
    match /labReports/{reportId} {
      allow read, write: if request.auth != null 
        && request.auth.uid == resource.data.userId;
    }
  }
}
```

**Deploy Rules**:
```bash
firebase deploy --only firestore:rules
```

---

## 📊 Performance Optimization

### 1. Build Optimization
```bash
# Analyze bundle size
npm run build -- --mode production

# Check bundle
npx vite-bundle-visualizer
```

### 2. Image Optimization
- Use WebP format
- Lazy load images
- Compress images (TinyPNG, ImageOptim)

### 3. Code Splitting
Already configured in Vite!

### 4. Caching
Configure in `vite.config.ts`:
```typescript
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          firebase: ['firebase/app', 'firebase/auth', 'firebase/firestore']
        }
      }
    }
  }
})
```

---

## 🔍 Monitoring & Analytics

### 1. Google Analytics
Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
```

### 2. Firebase Analytics
Already integrated!

### 3. Error Tracking (Sentry)
```bash
npm install @sentry/react
```

### 4. Performance Monitoring
Use Firebase Performance Monitoring or Lighthouse CI

---

## 🧪 Testing Before Deploy

### 1. Local Production Build
```bash
npm run build
npm run preview
```

### 2. Test Checklist
- [ ] All pages load correctly
- [ ] Authentication works
- [ ] Database operations work
- [ ] Images load properly
- [ ] Forms submit successfully
- [ ] Mobile responsive
- [ ] All languages work
- [ ] No console errors

### 3. Lighthouse Audit
```bash
npm install -g lighthouse
lighthouse http://localhost:4173 --view
```

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 90+

---

## 🔄 CI/CD Setup

### GitHub Actions (`.github/workflows/deploy.yml`):
```yaml
name: Deploy to Firebase

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
          projectId: your-project-id
```

---

## 📱 Post-Deployment

### 1. Verify Deployment
- [ ] Visit production URL
- [ ] Test all features
- [ ] Check analytics
- [ ] Monitor errors

### 2. Set Up Monitoring
- [ ] Configure uptime monitoring (UptimeRobot, Pingdom)
- [ ] Set up error alerts
- [ ] Enable performance monitoring

### 3. Backup Strategy
- [ ] Automated Firestore backups
- [ ] Code repository backups
- [ ] Environment variable backups

### 4. Documentation
- [ ] Update README with production URL
- [ ] Document deployment process
- [ ] Create runbook for common issues

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf node_modules dist
npm install
npm run build
```

### Firebase Deploy Fails
```bash
# Re-login
firebase logout
firebase login
firebase deploy
```

### Environment Variables Not Working
- Check `.env` file exists
- Verify variable names start with `VITE_`
- Restart dev server after changes

### 404 on Refresh
Configure hosting for SPA:
```json
{
  "hosting": {
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

---

## 📞 Support

Need help with deployment?
- 📧 Email: mnmukadam04@gmail.com
- 🐛 [Open an Issue](https://github.com/M-Mahek-03/CMC-5/issues)

---

## ✅ Deployment Complete!

Your MediGuide AI is now live! 🎉

**Next Steps**:
1. Share your app URL
2. Monitor performance
3. Gather user feedback
4. Plan next features

---

**Last Updated**: December 21, 2024
