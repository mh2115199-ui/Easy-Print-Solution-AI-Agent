# Easy Print Solution AI Agent — Roman Urdu Guide

## Abhi kya chal raha hai?
Dashboard, demo inbox, auto FAQ reply testing, order enquiry, customers, approved FAQs, CSV export aur JSON backup chal rahe hain. Mobile par bhi responsive hai.

## Kaise chalayein?
1. ZIP extract karo. Computer par Node.js 20 ya naya install karo.
2. Project folder mein command prompt kholo aur `npm run dev` likho. Koi package install nahi karna.
3. Jo local link aaye browser mein kholo.
4. Sidebar se Inbox kholo aur test messages bhejo. AI Agent Settings mein greeting aur auto FAQ on/off set karo.
5. Orders mein Add enquiry karo; Export CSV se Excel/Google Sheets import ke liye file milegi.
6. Settings mein Download backup zaroor karte rehna. Browser clear hua to saved data ja sakta hai.

## GitHub aur Netlify
GitHub par new repository banao, extracted project upload karo. Netlify mein Import from GitHub karo. Build `npm run build`, output `dist`. Netlify config included hai.

## Baad mein social media connect karne ke liye
Meta Developers app, permissions, official channel API IDs/tokens, domain/webhook, optional Supabase database aur production-grade secure server message dispatcher ki zaroorat hogi. WhatsApp, Facebook, Instagram **abhi auto-reply nahi karte**. Backend sirf authenticated webhooks receive/store karne ka starter deta hai, full live integrations abhi pending hain. Secrets GitHub, screenshots ya front-end mein mat likhna.

## Free ka sach
Local software free chal sakta hai. Netlify/Supabase free tiers limited hain. AI model API aur Meta messages ki billing/limits alag ho sakti hain.

## Aham
Public Netlify site ka dashboard password protected nahi. Isliye customer ki sensitive details aur secret keys is version mein mat dalo. Production ke liye admin login, secure cloud inbox aur full API reply service agle phase mein implement karna hoga.
