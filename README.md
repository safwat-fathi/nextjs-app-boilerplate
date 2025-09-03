# 🚀 Welcome to the Next.js with App Directory Boilerplate! 🎉

Hello, awesome developer! 👋

Welcome to your new favorite boilerplate, designed to supercharge your Next.js projects with a cutting-edge setup! Let's dive into this fantastic journey together. 🚀

## Features 🎁

Here's a quick look at the goodies packed in this boilerplate:

- **⚡️ TypeScript**: Static typing at its finest, ensuring your code is reliable and bug-free.
- **🔍 ESLint**: Keeps your code clean and consistent, like a lint roller for your codebase.
- **🌍 i18n with next-international**: Type-safe internationalization made easy, with full TypeScript support.
- **🐳 Docker**: Easily containerize your app and run it anywhere with Docker.
- **🎨 TailwindCSS**: Utility-first CSS framework for rapid UI development.
- **✨ Prettier**: Opinionated code formatter to keep your codebase looking sleek.
- **🐶 Husky**: Git hooks made easy, ensuring linting and tests run on commits.
- **🚫 Custom Error Pages**: Beautifully designed error pages for a polished user experience.
- **📂 Enhanced Directory Structure**: Organized and scalable structure for your growing app.
- **📡 Next.js API Examples**: Pre-built API routes to get you started quickly.
- **⏳ Custom Loading Screens**: Delightful loading screens to improve user experience.
- **🕵️‍♂️ Custom HTTP Client**: Leveraging fetch API for Next.js caching to make data fetching efficient.
- **🔐 Custom Auth Service**: Secure authentication with cookie-based storage.

## Getting Started 🏁

Follow these steps to get up and running in no time!

### 1. Clone the Repository 📥

```bash
git clone https://github.com/yourusername/nextjs-app-boilerplate.git
cd nextjs-app-boilerplate
```

### 2. Install Dependencies 📦

```bash
yarn install
```

### 3. Environment Variables 🛠️

Create a `.env.local` file in the root of your project and add your environment variables. Example:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

### 4. Run the Development Server 🏃‍♂️

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your app in action!

### 5. Docker 🐋

To run your app with Docker:

```bash
docker build -t nextjs-app .
docker run -p 3000:3000 nextjs-app
```

## Project Structure 🗂️

Here's a peek at the organized directory structure:

```
/app            // app directory
    /[locale]   // pages directory
    /api        // api directory
/lib            // library directory - custom application code
    /components // Reusable components
    /hooks      // Custom hooks
    /utils      // Custom utilities
    /providers  // App context providers
    /services   // API and auth services and other custom services to handle your business logic
/public         // Static assets
```

## Custom Scripts 🚀

We've added some custom scripts to make your life easier:

- **Linting**: `yarn lint`
- **Formatting**: `yarn format`
- **Developing**: `yarn dev`
- **Building**: `yarn run build`
- **Starting**: `yarn start`

## Contributing 🤝

We love contributions! Feel free to open issues or submit pull requests to improve this boilerplate.

## License 📄

This project is licensed under the MIT License.

---

Get ready to build something amazing with this powerful boilerplate! If you have any questions or need support, don't hesitate to reach out. Happy coding! 🎉

---

With ❤️ by Safwat Fathi

---

Need help? Check out the:

- [Next.js Documentation](https://nextjs.org/docs)
- [DaisyUI Documentation](https://daisyui.com/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [next-international Documentation](https://next-international.vercel.app/) docs for more info i18n

---

Feel free to reach out to [safwat.rashwan@gmail.com](mailto:safwat.rashwan@gmail.com) for any inquiries.

---

Ready? Set. Code! 💻

---

If you like this project, give it a ⭐ on [GitHub](https://github.com/yourusername/nextjs-app-boilerplate)!

---

**Happy coding!** ✨
