FROM python:3.9-slim

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt
RUN chmod +x start.sh
RUN chmod +x view.sh


CMD ["python", "main.py"]

