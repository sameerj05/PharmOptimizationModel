<h1 align="center">PharmOptimizationModel</h1>

<p align="center">
  <img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"/>
  <img alt="Streamlit" src="https://img.shields.io/badge/Streamlit-FF4B4B?style=for-the-badge&logo=streamlit&logoColor=white"/>
  <img alt="Pandas" src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white"/>
  <img alt="NumPy" src="https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white"/>
  <img alt="ARIMA" src="https://img.shields.io/badge/ARIMA-F3C623?style=for-the-badge"/>
  <img alt="License" src="https://img.shields.io/badge/License-Unlicensed-lightgrey?style=for-the-badge"/>
  <img alt="Repository" src="https://img.shields.io/badge/GitHub-sameerj05-181717?style=for-the-badge&logo=github"/>
</p>

<p align="center">
  A Python project for pharmaceutical inventory optimization. Features a Streamlit dashboard for visualizing inventory trends, ARIMA-based demand forecasting, and large-scale data cleaning with Pandas and NumPy.
</p>

<p align="center">
  <b>Created at the Rutgers Bits Datathon 2025 and presented to judges at Barclays.</b>
</p>

---

### 🚀 Key Features

<table>
<tr>
<td>

#### 📊 Streamlit Dashboard
- Visualize pharmaceutical inventory trends
- Interactive stock management tools
- Real-time data exploration

</td>
<td>

#### 🔮 Demand Forecasting
- ARIMA time series forecasting
- Predict demand fluctuations
- Mitigate stockout/overstocking risks

</td>
<td>

#### 🧹 Data Cleaning & Processing
- Processed & cleaned 600,000+ sales records
- Used Pandas and NumPy for data integrity
- Automated pipeline for large datasets

</td>
</tr>
</table>

---

### 🏗️ Technical Architecture

<table>
<tr>
<td>

#### Core Scripts
- `clean_data.py`: Data cleaning pipeline
- `app.py`: Main optimization logic
- `dashboard.py`: Streamlit dashboard (if present)

</td>
<td>

#### Data Files
- `sales_data.csv`: Raw input data
- `cleaned__salesmonthly.csv`: Cleaned output

</td>
<td>

#### Documentation
- `Pharmaceutical Inventory Optimization.pdf`: Project report and methodology

</td>
</tr>
</table>

---

### 🛠️ Technologies

![Python](https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=white)
![Streamlit](https://img.shields.io/badge/-Streamlit-FF4B4B?style=flat&logo=streamlit&logoColor=white)
![Pandas](https://img.shields.io/badge/-Pandas-150458?style=flat&logo=pandas&logoColor=white)
![NumPy](https://img.shields.io/badge/-NumPy-013243?style=flat&logo=numpy&logoColor=white)
![ARIMA](https://img.shields.io/badge/-ARIMA-F3C623?style=flat)
![CSV](https://img.shields.io/badge/-CSV-blue?style=flat)

---

### 🏁 Getting Started

#### System Requirements
- Python 3.7 or higher
- pip

#### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/sameerj05/PharmOptimizationModel.git
   cd PharmOptimizationModel
   ```

2. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Clean the Data**
   ```bash
   python clean_data.py
   ```
   - Processes `sales_data.csv` and outputs `cleaned__salesmonthly.csv`.

4. **Run the Optimization Model**
   ```bash
   python app.py
   ```
   - Uses the cleaned data to perform inventory optimization.

5. **Launch the Streamlit Dashboard** (if available)
   ```bash
   streamlit run dashboard.py
   ```
   - Visualize trends and interact with inventory data.

---

### 🗂️ Project Structure

```
PharmOptimizationModel/
├── Pharmaceutical Inventory Optimization.pdf   # Project documentation
├── app.py                                     # Main application script
├── clean_data.py                              # Data cleaning script
├── cleaned__salesmonthly.csv                  # Cleaned sales data (sample)
├── sales_data.csv                             # Raw sales data (sample)
├── requirements.txt                           # Python dependencies
├── dashboard.py                               # Streamlit dashboard (if present)
```

---

### 📄 Documentation

For a detailed explanation of the methodology and results, see [Pharmaceutical Inventory Optimization.pdf](Pharmaceutical%20Inventory%20Optimization.pdf).

---

### 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for improvements or bug fixes.

---

### 👥 Contributors

<p align="center">
  <b>Mohammed Hossain</b> &nbsp;|&nbsp;
  <a href="https://github.com/MohammedYashHossain"><img alt="GitHub" src="https://img.shields.io/badge/GitHub-MohammedYashHossain-181717?style=flat-square&logo=github"/></a>
  &nbsp;|&nbsp;
  <a href="https://www.linkedin.com/in/mohammedyhossain/"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-MohammedYashHossain-blue?style=flat-square&logo=linkedin"/></a>
  <br><br>
  <b>Sameer Jiandani</b> &nbsp;|&nbsp;
  <a href="https://github.com/sameerj05"><img alt="GitHub" src="https://img.shields.io/badge/GitHub-sameerj05-181717?style=flat-square&logo=github"/></a>
  &nbsp;|&nbsp;
  <a href="https://www.linkedin.com/in/sameerjiandani/"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-SameerJiandani-blue?style=flat-square&logo=linkedin"/></a>
  <br><br>
  <b>Rayyan Khatib</b> &nbsp;|&nbsp;
  <a href="https://www.linkedin.com/in/rayyan-khatib/"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-RayyanKhatib-blue?style=flat-square&logo=linkedin"/></a>
  <br><br>
  <b>Yassir Khan</b> &nbsp;|&nbsp;
  <a href="https://www.linkedin.com/in/yassirmkhan/"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-YassirKhan-blue?style=flat-square&logo=linkedin"/></a>
</p>

---

<p align="center">
  <i>This project was developed as a demonstration of pharmaceutical inventory optimization using Python, Streamlit, ARIMA, Pandas, and NumPy.<br>
  Created at the <b>Rutgers Bits Datathon 2025</b> and presented to judges at <b>Barclays</b>.<br>
  Contributors: <b>Mohammed Hossain</b>, <b>Sameer Jiandani</b>, <b>Rayyan Khatib</b>, <b>Yassir Khan</b>.
  </i>
</p> 
