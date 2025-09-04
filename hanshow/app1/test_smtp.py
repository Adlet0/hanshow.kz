import smtplib
from email.mime.text import MIMEText

sender = "info@softit.kz"
recipient = "adlet0005@gmail.com"  # укажи свою тестовую
password = "jlgnpzlskdtewasv"

msg = MIMEText("Тестовое письмо от Django через Яндекс 360")
msg["Subject"] = "SMTP Test"
msg["From"] = sender
msg["To"] = recipient

try:
    with smtplib.SMTP_SSL("smtp.yandex.com", 465) as server:
        server.login(sender, password)
        server.sendmail(sender, recipient, msg.as_string())
    print("✅ Письмо успешно отправлено!")
except Exception as e:
    print("❌ Ошибка:", e)
