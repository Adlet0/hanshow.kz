from django.core.mail import send_mail

send_mail(
    subject="Тест Gmail",
    message="Привет! Это тестовое письмо из Django 🚀",
    from_email="adlet0005@gmail.com",
    recipient_list=["perizat0076@gmail.com"],  # можешь отправить сам себе
    fail_silently=False,
)
