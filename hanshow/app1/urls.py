from django.urls import path
from . import views
from .views import contact_view   # <--- вот эту строку ОБЯЗАТЕЛЬНО добавь


    

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('solutions/', views.solutions, name='solutions'),
    path('services/', views.services, name='services'),
    path("contact/", contact_view, name="contact"),
    path('solutions/nebular-pro/', views.nebular_pro, name='nebular_pro'),
    path('solutions/polaris-pro/', views.polaris_pro, name='polaris_pro'),
    path('solutions/hanshow-ap/', views.hanshow_ap, name='hanshow_ap'),
    path('solutions/luminia-aqua/', views.luminia_aqua, name='luminia_aqua'),  
]
