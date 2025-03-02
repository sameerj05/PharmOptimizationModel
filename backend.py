from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)  # Enable CORS to allow frontend requests

@app.route('/api/data', methods=['GET'])
def get_data():
    df = pd.read_csv("cleaned_cleaned_cleaned_salesdaily.csv")  # Replace with your CSV file
    data_json = df.to_dict(orient="records")  # Convert CSV data to JSON
    return jsonify(data_json)

if __name__ == '__main__':
    app.run(port=5000, debug=True)
