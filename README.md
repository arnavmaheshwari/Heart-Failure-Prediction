# Heart Failure Prediction

![Python](https://img.shields.io/badge/Python-3.x-blue?style=flat-square&logo=python)
![scikit-learn](https://img.shields.io/badge/scikit--learn-ML-orange?style=flat-square&logo=scikit-learn)
![Flask](https://img.shields.io/badge/Flask-Backend-green?style=flat-square&logo=flask)
![Angular](https://img.shields.io/badge/Angular-16-red?style=flat-square&logo=angular)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

A machine learning-powered web application for predicting heart failure risk using gradient boosting models with Shapley value-based interpretability analysis.

---

## Overview

Heart Failure Prediction is a comprehensive machine learning project that combines advanced predictive modeling with intuitive visualization. The application leverages gradient boosting algorithms trained on heart disease datasets to predict the likelihood of heart failure, providing clinicians and researchers with both predictions and explainable AI insights through Shapley values.

**Key Use Cases:**
- Risk assessment for cardiac patients
- Medical decision support systems
- Research on heart failure predictors
- Educational purposes for ML practitioners

---

## Features

### 🔬 Machine Learning
- **Multiple Model Support**: Trained and compared multiple classification models
- **Gradient Boosting**: Primary predictive model using scikit-learn's GradientBoostingClassifier
- **Model Persistence**: Pre-trained model serialization using joblib for fast inference
- **Data Analysis**: Comprehensive exploratory data analysis with NumPy and pandas

### 📊 Interpretability
- **Shapley Values**: Post-model analysis using SHAP values for feature importance interpretation
- **Explainable Predictions**: Understand which features drive each prediction

### 🌐 Web Application
- **Flask REST API**: Lightweight backend for model serving
- **Angular Frontend**: Modern, responsive user interface for predictions
- **CORS Support**: Cross-origin resource sharing enabled for seamless client-server communication
- **Real-time Predictions**: Submit patient data and receive predictions instantly

### 📈 Data Processing
- **Pandas Integration**: Efficient data manipulation and preprocessing
- **NumPy Computations**: Fast numerical operations for model inference

---

## Tech Stack

| Category | Technologies |
|----------|---------------|
| **ML/Data Science** | scikit-learn, NumPy, pandas |
| **Backend** | Flask, Flask-CORS |
| **Frontend** | Angular 16, TypeScript, RxJS |
| **Model Serialization** | joblib |
| **Build Tool** | Angular CLI |
| **Package Management** | npm |

---

## Architecture

```
┌─────────────────────────────────────────────────────┐
│                   Angular Frontend                   │
│              (heart_failure/ directory)              │
│         - Patient data input forms                   │
│         - Real-time prediction display              │
│         - Result visualization                      │
└──────────────────┬──────────────────────────────────┘
                   │ HTTP/REST
                   ▼
┌─────────────────────────────────────────────────────┐
│            Flask Backend (api.py)                    │
│         - /predict endpoint                         │
│         - CORS middleware                           │
│         - Model loading                             │
└──────────────────┬──────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────┐
│       Trained Gradient Boosting Model                │
│      (gradientBoost_model.joblib)                    │
│         - Inference engine                          │
│         - Feature processing                        │
└─────────────────────────────────────────────────────┘
```

**Data Flow:**
1. User submits patient features through Angular UI
2. Frontend sends HTTP POST request to `/predict` endpoint
3. Flask backend loads the pre-trained model and processes features
4. Gradient Boosting model generates prediction
5. Backend returns prediction to frontend
6. Frontend displays result to user

---

## Project Structure

```
Heart-Failure-Prediction/
├── api.py                              # Flask REST API server
├── AllModels.ipynb                     # Comprehensive model comparison and training
├── LoadingModel.ipynb                  # Model loading and inference examples
├── gradientBoost_model.joblib          # Pre-trained gradient boosting model
├── heart.csv                           # Heart failure dataset
├── How To Run Flask App.txt            # Flask startup instructions
├── heart_failure/                      # Angular frontend application
│   ├── package.json                    # Angular dependencies and scripts
│   ├── angular.json                    # Angular CLI configuration
│   ├── tsconfig.json                   # TypeScript configuration
│   ├── src/                            # Angular source code
│   └── README.md                       # Frontend-specific documentation
└── README.md                           # This file
```

### Directory Descriptions

- **`api.py`** - Flask application serving ML predictions via REST API
- **`AllModels.ipynb`** - Jupyter notebook with exploratory analysis, model training, and comparison
- **`LoadingModel.ipynb`** - Notebook demonstrating model loading and usage
- **`heart_failure/`** - Complete Angular application for the web frontend
- **`heart.csv`** - Dataset containing heart disease features and labels

---

## Getting Started

### Prerequisites

- **Python 3.x** with pip
- **Node.js** (v16+) and npm
- **Git**

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/arnavmaheshwari/Heart-Failure-Prediction.git
cd Heart-Failure-Prediction
```

#### 2. Set Up Backend (Flask)

```bash
# Create a Python virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install Python dependencies
pip install flask flask-cors numpy pandas scikit-learn joblib
```

#### 3. Set Up Frontend (Angular)

```bash
cd heart_failure

# Install Node.js dependencies
npm install
```

### Running the Application

#### Start the Flask Backend

```bash
# From the root directory
set FLASK_APP=api.py
flask run
```

The API will be available at `http://localhost:5000`

#### Start the Angular Frontend

```bash
# From the heart_failure/ directory
npm start
```

The frontend will be available at `http://localhost:4200`

---

## API Documentation

### Base URL
```
http://localhost:5000
```

### Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/` | Health check endpoint | None |
| POST | `/predict` | Get heart failure prediction | None |

### POST /predict

**Request:**
```json
{
  "data": [value1, value2, value3, ...]
}
```

**Response:**
```
Prediction value (0 or 1)
```

**Notes:**
- Features should match the order used during model training
- CORS is enabled for cross-origin requests
- Predictions are returned as binary classification (0: No failure, 1: Failure risk)

---

## Dataset

The project uses the **`heart.csv`** dataset containing cardiovascular health records with the following characteristics:

- **Format**: CSV
- **Rows**: 303 patient records
- **Features**: Various cardiovascular indicators (age, sex, chest pain type, blood pressure, cholesterol, etc.)
- **Target**: Binary classification (presence/absence of heart disease)

---

## Model Training & Analysis

### AllModels.ipynb

Comprehensive Jupyter notebook containing:
- Dataset loading and exploration
- Data preprocessing and feature engineering
- Training multiple classification models
- Model performance comparison
- Hyperparameter tuning
- Shapley value analysis for feature importance

### LoadingModel.ipynb

Demonstrates:
- Loading the pre-trained `gradientBoost_model.joblib`
- Making predictions on new data
- Model inference pipeline

---

## Deployment

The application can be deployed using standard web hosting platforms:

### Option 1: Local/On-Premise
```bash
# Start Flask server
python api.py

# Build Angular for production
cd heart_failure
npm run build
```

Production build output will be in `heart_failure/dist/`

### Option 2: Cloud Platforms

**Heroku, AWS, Azure, or Google Cloud:**
- Deploy Flask app to backend service
- Deploy Angular build to CDN or static hosting
- Configure environment variables for API endpoints

---

## Performance Considerations

- **Model Size**: Pre-trained model is ~180KB, enabling fast loading
- **Inference Speed**: Gradient Boosting provides rapid predictions
- **Scalability**: Flask can handle multiple concurrent requests; consider adding load balancing for production

---

## Security

- **CORS Protection**: Cross-Origin Resource Sharing configured on Flask backend
- **Input Validation**: Ensure frontend validates patient data before submission
- **Production Recommendation**: Implement authentication/authorization for clinical environments

---

## Future Improvements

- Add user authentication and authorization
- Implement result logging and audit trails
- Expand model comparison with deep learning approaches
- Add confidence intervals to predictions
- Create mobile application version
- Integrate with electronic health record (EHR) systems
- Add batch prediction capabilities
- Implement real-time model monitoring and retraining
- Enhanced UI with data visualization libraries
- REST API documentation (Swagger/OpenAPI)

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code follows PEP 8 style guidelines and includes appropriate documentation.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details (if present).

---

## Author

**Arnav Maheshwari**
- GitHub: [@arnavmaheshwari](https://github.com/arnavmaheshwari)

---

## Acknowledgements

This project leverages exceptional open-source libraries and frameworks:

- **scikit-learn** - Machine learning and predictive modeling
- **NumPy** - Numerical computing and array operations
- **pandas** - Data manipulation and analysis
- **Flask** - Lightweight web framework and API development
- **Angular** - Modern frontend framework
- **SHAP** - Shapley value-based model interpretability
- **joblib** - Model serialization and persistence
