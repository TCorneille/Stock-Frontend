# ⚡ Limited Drop Page – Frontend

A high-performance React + TypeScript frontend for handling limited stock drops with real-time updates and optimistic UI.

---

## 🎯 Project Goals

* Real-time stock refresh
* Prevent duplicate reservations
* Show 5-minute countdown after reservation
* Handle race conditions gracefully
* Optimistic UI for instant feedback
* Strict TypeScript architecture

---

## 🏗 Tech Stack

* React
* TypeScript (Strict Mode)
* Redux Toolkit
* RTK Query
* Optimistic UI Updates

---

## 📁 Folder Structure

```
src/
│
├── app/
│   └── store.ts
│
├── features/
│   └── drop/
│       ├── dropApi.ts
│       ├── types.ts
│       └── LimitedDropPage.tsx
│
├── hooks/
│   └── useCountdown.ts
│
├── components/
│   ├── StockBadge.tsx
│   ├── ReserveButton.tsx
│   └── CountdownTimer.tsx
│
└── App.tsx
```

---

## 🔥 Key Features

### 🟢 Real-Time Stock Updates

* Uses RTK Query polling (every 5 seconds)

### ⚡ Optimistic Reservation

* Stock decreases immediately in UI
* Automatically rolls back on API failure

### ⏳ Countdown Timer

* 5-minute reservation timer
* Automatically detects expiration

### 🚫 Edge Case Handling

* Race condition failures
* Stock becomes zero while viewing
* Network/API timeout errors
* Duplicate reservation prevention

---

## 🛠 Installation

```bash
npm install
```

---

## 🚀 Run Development

```bash
npm run dev
```

---

## 🧠 Architecture Decisions

### RTK Query Instead of Axios

* Built-in caching
* Automatic re-fetch
* Easy optimistic updates
* Tag-based invalidation

### Optimistic UI Pattern

Uses `onQueryStarted`:

* Updates stock immediately
* Rolls back if backend rejects
* Provides instant user feedback

---

## 🔄 Data Flow

```
User Click Reserve
        ↓
Optimistic UI Update
        ↓
API Request Sent
        ↓
Success → Confirm
Failure → Rollback
```

---

## 🎨 UX Behavior

* Disable button when sold out
* Show loading state while reserving
* Show countdown after reservation
* Show expiration message automatically

---
=gi

---





