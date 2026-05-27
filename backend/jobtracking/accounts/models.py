from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):


   

    ROLE_CHOICES = (
        ("user", "User"),
        ("recruiter", "Recruiter"),
        ("admin", "Admin"),
    )

    role = models.CharField(
        max_length=20,
        choices=ROLE_CHOICES,
        default="user"
    )

    phone = models.CharField(
        max_length=20,
        blank=True
    )

    resume = models.FileField(
        upload_to="resume/",
        blank=True,
        null=True
    )

    linkedin = models.URLField(
        blank=True
    )

    experience = models.IntegerField(
        default=0
    )

    def __str__(self):
        return self.username