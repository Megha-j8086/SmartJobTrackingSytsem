from django.db import models

from accounts.models import User


class Job(models.Model):

    recruiter=models.ForeignKey(

    User,

    on_delete=models.CASCADE,

    limit_choices_to={
    "role":
    "recruiter"
    }

    )

    title= models.CharField(
    max_length=200
    )

    company= models.CharField(
    max_length=200
    )

    location=models.CharField(
    max_length=200
    )

    description=models.TextField()

    deadline=models.DateField()

    created_at=models.DateTimeField(
    auto_now_add=True
    )

    def __str__(self):

        return self.title