# Mode - A Linear App Clone for Task Management

Mode is a modern task management application inspired by [Linear](https://linear.app), designed to help teams track and manage their issues efficiently. This project is built with Next.js and provides a sleek, user-friendly interface for organizing and prioritizing tasks.

## Features

- **Task Management**: Create, update, and track issues with customizable status and priority levels
- **Status Tracking**: Organize tasks by status (Backlog, Todo, In Progress, Done)
- **Priority Levels**: Set priorities (Low, Medium, High) for your tasks
- **User Authentication**: Secure authentication system for team members
- **Modern UI**: Clean, responsive interface with dark mode support

## Tech Stack

- [Next.js](https://nextjs.org) - React framework for server-side rendering and static site generation
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [PostgreSQL](https://www.postgresql.org/) - Relational database
- [Drizzle ORM](https://drizzle.dev/) - TypeScript ORM for SQL databases

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Setup

Make sure to set up your environment variables in a `.env` file:

```
DATABASE_URL=your_database_connection_string
```

## Database Setup

Initialize the database and run migrations:

```bash
npm run db:push
npm run db:seed
```

## Deployment

The easiest way to deploy this app is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Drizzle ORM Documentation](https://orm.drizzle.team/docs/overview)

## Screenshot

![Screenshot 2025-03-28 at 17 17 33](https://github.com/user-attachments/assets/546dab14-a4d6-47db-a95d-ecec835d39de)
