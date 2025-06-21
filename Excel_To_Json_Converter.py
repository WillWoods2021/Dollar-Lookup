import pandas as pd
import json

def convert_excel_to_json(input_excel_path, output_json_path, sheet_name='Looker Upper'):
    # Load the Excel sheet
    df = pd.read_excel(input_excel_path, sheet_name=sheet_name)
    
    # Keep only rows that have both serial number (col B) and description (col A)
    df_clean = df[['Unnamed: 0', 'Unnamed: 1']].dropna()

    # Build JSON dictionary
    result = {}
    for _, row in df_clean.iterrows():
        serial = str(row['Unnamed: 1']).strip().zfill(8)
        description = str(row['Unnamed: 0']).strip()
        if serial.lower() != 'nan' and description.lower() != 'nan':
            result[serial] = description

    # Write to JSON file
    with open(output_json_path, 'w', encoding='utf-8') as f:
        json.dump(result, f, indent=2)

    print(f"✅ JSON file saved to: {output_json_path}")

# Usage example
if __name__ == "__main__":
    input_file = r'C:\Users\William\ProgrammingProjects\DollarDecoder\DOLLARS.xlsx'
    output_file = r'C:\Users\William\ProgrammingProjects\DollarDecoder\DOLLARS.json'
    
    convert_excel_to_json(input_file, output_file)