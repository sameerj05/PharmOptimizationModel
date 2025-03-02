import pandas as pd
import os
import zipfile

def extract_zip(zip_path, extract_to):
    """Extracts a zip file to a specified directory."""
    if not os.path.exists(extract_to):
        os.makedirs(extract_to)
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        zip_ref.extractall(extract_to)

def clean_data(file_path):
    """Cleans the given dataset by handling missing values, standardizing columns, renaming categories, and ensuring suitability for time series analysis."""
    df = pd.read_csv(file_path)
    
    # Convert date column to datetime format
    df['datum'] = pd.to_datetime(df['datum'], errors='coerce')
    
    # Drop rows where date conversion failed
    df = df.dropna(subset=['datum'])
    
    # Sort data by date to maintain time order
    df = df.sort_values(by=['datum'])
    
    # Rename category columns for better readability
    column_renames = {
        'M01AB': 'Anti-inflammatory_Acetic_Acid',
        'M01AE': 'Anti-inflammatory_Propionic_Acid',
        'N02BA': 'Analgesics_Salicylic_Acid',
        'N02BE': 'Analgesics_Pyrazolones_Anilides',
        'N05B': 'Psycholeptics_Anxiolytics',
        'N05C': 'Psycholeptics_Hypnotics_Sedatives',
        'R03': 'Obstructive_Airway_Drugs',
        'R06': 'Antihistamines_Systemic'
    }
    df.rename(columns=column_renames, inplace=True, errors='ignore')
    
    # Handle missing values using forward fill for time continuity
    for col in df.columns:
        if df[col].dtype == 'object':
            df[col] = df[col].fillna(df[col].mode()[0])
        else:
            df[col] = df[col].fillna(method='ffill')
    
    # Remove duplicates
    df = df.drop_duplicates()
    
    # Standardize column names
    df.columns = df.columns.str.lower().str.replace(" ", "_")
    
    # Convert numeric columns to proper types
    numeric_cols = df.select_dtypes(include=['float64', 'int64']).columns
    df[numeric_cols] = df[numeric_cols].apply(pd.to_numeric, errors='coerce')
    
    # Remove outliers (values beyond 3 standard deviations)
    for col in numeric_cols:
        mean = df[col].mean()
        std = df[col].std()
        df = df[(df[col] >= mean - 3 * std) & (df[col] <= mean + 3 * std)]
    
    # Ensure date format is consistent
    df['datum'] = df['datum'].dt.strftime('%Y-%m-%d')
    
    return df

# Define paths
zip_path = r"C:\Users\sjian\Python\datathon\archive.zip"
extract_path = r"C:\Users\sjian\Python\datathon\extracted_data"
cleaned_extract_path = r"C:\Users\sjian\Python\datathon\cleaned_data"

# Ensure cleaned data directory exists
if not os.path.exists(cleaned_extract_path):
    os.makedirs(cleaned_extract_path)

# Extract zip file
extract_zip(zip_path, extract_path)

# Apply cleaning to all files
cleaned_data = {}
for file in os.listdir(extract_path):
    file_path = os.path.join(extract_path, file)
    cleaned_data[file] = clean_data(file_path)

# Save cleaned files in a separate folder
for file, df in cleaned_data.items():
    cleaned_path = os.path.join(cleaned_extract_path, "cleaned_" + file)
    df.to_csv(cleaned_path, index=False)

print("Data cleaning complete. Cleaned files are saved in the 'cleaned_data' folder with 'cleaned_' prefix.")

