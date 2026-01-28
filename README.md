# Simple Calculator

A clean, modern calculator built with React, Next.js, and Tailwind CSS. Inspired by the iOS calculator design, this project features a beautiful dark theme interface with smooth interactions and accurate calculations.

![Calculator Preview](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat&logo=tailwind-css)

## Features

- **Basic Arithmetic Operations**: Addition, subtraction, multiplication, and division
- **Additional Functions**: 
  - Clear (AC/C) - Smart clearing that shows AC or C based on state
  - Toggle sign (+/-) - Switch between positive and negative numbers
  - Percentage (%) - Quick percentage calculations
- **Decimal Support**: For precise decimal calculations
- **Visual Feedback**: 
  - Active operation highlighting
  - Button press animations
  - Responsive hover states
- **Smart Display**: 
  - Dynamic text sizing based on number length
  - Scientific notation for very large numbers (>12 digits)
- **Responsive Design**: Works beautifully on all screen sizes

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/simple-calculator.git
cd simple-calculator
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the calculator.

## Usage

- **Numbers**: Click any number button (0-9) to input digits
- **Operations**: Click +, −, ×, or ÷ to perform calculations
- **Equals**: Click = to complete the calculation
- **Clear**: Click AC to reset or C to clear current input
- **Decimal**: Click . to add decimal points
- **Toggle Sign**: Click +/− to switch between positive/negative
- **Percentage**: Click % to convert the current number to a percentage

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Deployment**: [Vercel](https://vercel.com)

## Project Structure

```
simple-calculator/
├── app/
│   ├── page.tsx          # Main calculator component
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles and Tailwind config
├── components/           # Reusable UI components (if any)
├── public/              # Static assets
└── README.md            # This file
```

## Contributing

We welcome contributions from the community! Whether you're fixing bugs, adding new features, or improving documentation, your help is appreciated.

### How to Contribute

1. **Fork the repository**
   - Click the "Fork" button at the top right of this page

2. **Clone your fork**
   ```bash
   git clone https://github.com/yourusername/simple-calculator.git
   cd simple-calculator
   ```

3. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

4. **Make your changes**
   - Write clean, readable code
   - Follow the existing code style
   - Test your changes thoroughly

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   # or
   git commit -m "fix: fix bug description"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Describe your changes in detail

### Contribution Ideas

Here are some ways you can improve this calculator:

#### Features to Add
- [ ] Keyboard support for number and operator input
- [ ] Calculation history panel
- [ ] Memory functions (M+, M-, MR, MC)
- [ ] Scientific calculator mode (√, x², sin, cos, tan, log)
- [ ] Backspace/delete last digit function
- [ ] Expression preview (show full equation)
- [ ] Copy result to clipboard
- [ ] Multiple calculator themes
- [ ] Light/dark mode toggle
- [ ] Sound effects for button presses
- [ ] Haptic feedback for mobile devices

#### Technical Improvements
- [ ] Fix floating-point precision issues
- [ ] Add comprehensive unit tests
- [ ] Improve error handling (division by zero, overflow)
- [ ] Add accessibility improvements (ARIA labels, keyboard navigation)
- [ ] Implement LocalStorage for history persistence
- [ ] Add number formatting (thousands separators)
- [ ] Create a component library for buttons
- [ ] Add internationalization (i18n) support

#### Documentation
- [ ] Add screenshots and demo GIF
- [ ] Create contribution guidelines document
- [ ] Add code comments and JSDoc
- [ ] Write user guide documentation
- [ ] Add architecture documentation

### Code Style Guidelines

- Use TypeScript for type safety
- Follow React best practices and hooks guidelines
- Use functional components over class components
- Keep components small and focused
- Write descriptive variable and function names
- Add comments for complex logic
- Use Tailwind CSS utility classes for styling
- Maintain consistent code formatting (Prettier/ESLint)

### Reporting Issues

Found a bug or have a suggestion? Please [open an issue](https://github.com/yourusername/simple-calculator/issues) with:
- A clear title and description
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots if applicable
- Your environment (browser, OS, etc.)

### Code of Conduct

Please be respectful and constructive in all interactions. We're here to learn and build together.

## License

This project is open source and available under the [MIT License](LICENSE).

## Deployment

The easiest way to deploy this calculator is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/simple-calculator)

Or deploy manually:

1. Push your code to GitHub
2. Sign up for [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

## Acknowledgments

- Design inspired by Apple's iOS Calculator
- Built with [v0.dev](https://v0.dev) by Vercel
- Icons and styling using Tailwind CSS

## Support

If you find this project helpful, please consider:
- Starring the repository
- Sharing it with others
- Contributing improvements
- Reporting issues

---

**Made with ❤️ by the community**

*Start your first contribution today and help make this calculator even better!*
