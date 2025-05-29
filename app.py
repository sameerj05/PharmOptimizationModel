import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
from statsmodels.tsa.arima.model import ARIMA

st.title("Pharmaceutical Drug Sales Dashboard (Separate Forecast Graph)")


sales_df = pd.read_csv('sales_data.csv')


sales_df.columns = sales_df.columns.str.upper()


column_name_mapping = {
    "M01AB": "Anti-inflammatory (Acetic acid derivatives)",
    "M01AE": "Anti-inflammatory (Propionic acid derivatives)",
    "N02BA": "Analgesics (Salicylic acid derivatives)",
    "N02BE": "Analgesics (Pyrazolones & Anilides)",
    "N05B": "Psycholeptics (Anxiolytic drugs)",
    "N05C": "Psycholeptics (Hypnotics & sedatives)",
    "R03": "Airway disease drugs",
    "R06": "Antihistamines (Systemic use)"
}


sales_df.rename(columns=column_name_mapping, inplace=True)


sales_df['DATUM'] = pd.to_datetime(sales_df['DATUM'], errors='coerce')
# Create a monthly period column
sales_df['MONTH'] = sales_df['DATUM'].dt.to_period('M')


st.header("CSV Data Overview")
st.dataframe(sales_df.head(10))  # Show first 10 rows


st.header("Python Script")
code_snippet = """
# ARIMA Forecasting Example
model = ARIMA(monthly_sales, order=(1,1,1))
results = model.fit()
forecast = results.forecast(steps=months_to_forecast)
"""
st.code(code_snippet, language="python")


st.header("Histogram: Anti-inflammatory (Propionic acid derivatives)")
hist_column = "Anti-inflammatory (Propionic acid derivatives)"
if hist_column in sales_df.columns:
    fig_hist, ax_hist = plt.subplots()
    ax_hist.hist(sales_df[hist_column], color="green", edgecolor="black")
    ax_hist.set_title(f"Histogram of {hist_column}")
    ax_hist.set_xlabel("Values")
    ax_hist.set_ylabel("Sales")
    st.pyplot(fig_hist)
else:
    st.error(f"Column '{hist_column}' not found in the dataset.")


st.header("Monthly Sales Trends & Separate Forecast")


selected_drug = st.selectbox("Select a drug category:", list(column_name_mapping.values()))

# Slider for how many months to forecast
months_to_forecast = st.slider("Months to Forecast", min_value=1, max_value=24, value=6, step=1)

def forecast_monthly_sales(column: str):
    """
    1) Plot the historical monthly sales in one chart.
    2) Fit a simple ARIMA model and show the forecast in a separate chart.
    3) Display the ARIMA model summary and forecast table.
    """
    
    monthly_sales = sales_df.groupby('MONTH')[column].sum()
    # Convert PeriodIndex to Timestamp for resampling
    monthly_sales.index = monthly_sales.index.to_timestamp()
    # Resample to include all months and fill missing values with 0
    monthly_sales = monthly_sales.resample('M').sum().fillna(0)
    # Sort by date to ensure chronological order
    monthly_sales = monthly_sales.sort_index()

    
    fig_hist, ax_hist = plt.subplots(figsize=(12, 6))
    ax_hist.plot(
        monthly_sales.index,
        monthly_sales.values,
        marker="o",
        linestyle="-",
        color="blue",
        label="Historical Sales"
    )
    ax_hist.set_title(f"Historical Monthly Sales of {column}")
    ax_hist.set_xlabel("Month")
    ax_hist.set_ylabel("Sales")

    # Format x-axis
    ax_hist.xaxis.set_major_locator(mdates.AutoDateLocator())
    ax_hist.xaxis.set_major_formatter(mdates.DateFormatter("%Y-%m"))
    fig_hist.autofmt_xdate()
    ax_hist.legend()

    st.pyplot(fig_hist)

    
    try:
        # A simple ARIMA(1,1,1) model
        model = ARIMA(monthly_sales, order=(1,1,1))
        results = model.fit()

        
        forecast = results.forecast(steps=months_to_forecast)

       
        last_date = monthly_sales.index[-1]
        future_dates = pd.date_range(
            start=last_date + pd.offsets.MonthEnd(1),
            periods=months_to_forecast,
            freq='M'
        )
        forecast_series = pd.Series(forecast, index=future_dates)

     
        fig_forecast, ax_forecast = plt.subplots(figsize=(12, 6))
        ax_forecast.plot(
            forecast_series.index,
            forecast_series.values,
            marker="o",
            linestyle="--",
            color="orange",
            label="Forecast"
        )
        ax_forecast.set_title(f"{months_to_forecast}-Month Forecast for {column}")
        ax_forecast.set_xlabel("Month")
        ax_forecast.set_ylabel("Forecasted Sales")

        ax_forecast.xaxis.set_major_locator(mdates.AutoDateLocator())
        ax_forecast.xaxis.set_major_formatter(mdates.DateFormatter("%Y-%m"))
        fig_forecast.autofmt_xdate()
        ax_forecast.legend()

        st.pyplot(fig_forecast)

        
        with st.expander("ARIMA Model Summary"):
            st.write(results.summary())

        forecast_df = pd.DataFrame({
            "Forecast Date": forecast_series.index.strftime("%Y-%m"),
            "Forecasted Sales": forecast_series.values.round(2)
        })
        st.subheader(f"{months_to_forecast}-Month Forecast Data for {column}")
        st.dataframe(forecast_df)

    except Exception as e:
        st.error(f"Forecast failed: {e}")

# Call the forecasting function
forecast_monthly_sales(selected_drug)
