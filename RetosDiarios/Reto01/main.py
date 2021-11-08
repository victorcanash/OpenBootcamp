import pandas as pd

# Establece la ruta del archivo
file_path = "usuarios.xlsx"
# Lee fichero
df = pd.read_excel(file_path)
# Guarda emails únicos
emails = df.email.unique()
# Imprime emails
print(emails)