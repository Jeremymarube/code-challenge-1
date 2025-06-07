# Code-Challenge-1
# Week 1 Code Challenge

A collection of JavaScript solutions for three practical coding challenges focusing on everyday calculations in Kenya.

## Description

This repository contains solutions for three JavaScript challenges that simulate real-world scenarios:

1. **Chai Bora Ingredient Calculator** - Calculate ingredients needed for making Kenyan chai
2. **Boda Boda Ride Fare Estimator** - Estimate motorcycle taxi fares based on distance
3. **Mobile Money Transaction Fee Estimator** - Calculate transaction fees for mobile money transfers

Each challenge is designed to practice fundamental JavaScript concepts including user input handling, mathematical calculations, conditional logic, and console output formatting.

## Project Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of JavaScript
- Text editor or IDE (VS Code recommended)

### Installation & Running
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/Code-Challenge-1.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Code-Challenge-1
   ```

3. Open any of the challenge folders and run the JavaScript files:
   - Open the HTML file in a browser, or
   - Run the JavaScript file in Node.js, or
   - Copy the code into your browser's developer console

### Project Structure
```
Code-Challenge-1/
├── README.md
├── chaiCalculator/
│   └── chai.js
├── bodaFareCalculator/
│   └── fare.js
└── mobileMoneyEstimator/
    └── fee.js
```

## Challenges Overview

### Challenge 1: Chai Bora Ingredient Calculator ☕
**File:** `chaiCalculator/chai.js`

Calculates the exact ingredients needed to make multiple cups of traditional Kenyan chai.

**Standard Recipe (per cup):**
- Water: 200 ml
- Milk: 50 ml
- Tea Leaves (Majani): 1 tablespoon
- Sugar (Sukari): 2 teaspoons

**Features:**
- Interactive user input via prompt
- Proportional ingredient calculation
- Formatted console output

### Challenge 2: Boda Boda Ride Fare Estimator 🛵
**File:** `bodaFareCalculator/fare.js`

Estimates the cost of a motorcycle taxi ride based on distance traveled.

**Pricing Structure:**
- Base Fare: KES 50
- Per Kilometer: KES 15

**Features:**
- Distance-based fare calculation
- User-friendly Swahili prompts
- Detailed fare breakdown

### Challenge 3: Mobile Money Transaction Fee Estimator 📱
**File:** `mobileMoneyEstimator/fee.js`

Calculates transaction fees for mobile money transfers with realistic fee constraints.

**Fee Structure:**
- Base Rate: 1.5% of transaction amount
- Minimum Fee: KES 10
- Maximum Fee: KES 70

**Features:**
- Conditional fee calculation
- Min/max fee enforcement
- Total debit amount calculation

## Usage Examples

### Chai Calculator
```
Input: 3 cups
Output: 
To make 3 cups of Kenyan Chai, you will need:
Water: 600 ml
Milk: 150 ml
Tea Leaves (Majani): 3 tablespoons
Sugar (Sukari): 6 teaspoons
```

### Boda Fare Calculator
```
Input: 5 km
Output:
Uko kwote? Io ni 5 km:
Ukikalia Pikipiki: KES 50
Mpaka Uko: KES 75
Total: KES 125
```

### Mobile Money Estimator
```
Input: KES 2000
Output:
Sending KES 2000:
Calculated Transaction Fee: KES 30
Total amount to be debited: KES 2030
```

## Technologies Used

- **JavaScript (ES6+)** - Core programming language
- **Browser APIs** - prompt() for user input, console.log() for output

## Learning Objectives

- Practice JavaScript fundamentals (variables, functions, operators)
- Handle user input and data type conversion
- Implement mathematical calculations and formulas
- Use conditional statements for business logic
- Format and display output effectively
- Apply version control with Git and GitHub

## Author & License

**Author:** [Jeremy Marube]  
**Email:** [jeremymarube1@gmail.com]  
**GitHub:** [Jeremymarube]

### License
This project is open source and free to use.