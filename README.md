New Booking Entry – Logistics ERP (Frontend)
Overview

This project is a frontend-only React application that implements a “New Booking Entry” screen for a Logistics ERP system.

The interface is designed for office administrators to enter shipment details quickly and accurately, with a focus on:

Clear form structure

Inline validation

Auto-calculated fields

Responsive, data-dense ERP layout

No backend or API integration is included.

Tech Stack

React (Vite)

TypeScript

Tailwind CSS

React Hook Form

Features

Three logical form sections:

Sender Details

Receiver Details

Package Details

Inline field-level validation

Auto-calculation of total shipping cost

Read-only computed field for total cost

Disabled submit button until the form is valid

Responsive layout:

Desktop: Sender and Receiver sections side by side

Mobile: All sections stacked vertically

Success message and console logging on submission

Getting Started

Follow the steps below to run the project locally.

1. Install dependencies
npm install

2. Start the development server
npm run dev


The application will be available at:

http://localhost:5174

Desktop View Screenshot

Below is the desktop view of the New Booking Entry screen:

Notes

This is a frontend-only implementation.

No backend services or API calls are used.

The project emphasizes component reusability, form validation, and TypeScript safety, as required by the machine test.

