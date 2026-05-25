from django.db import models

from accounts.models import User
from jobs.models import Job


class Application(models.Model):

    STATUS=[

    ("pending","Pending"),

    ("accepted","Accepted"),

    ("rejected","Rejected")

    ]

    user=models.ForeignKey(

    User,

    on_delete=models.CASCADE

    )

    job=models.ForeignKey(

    Job,

    on_delete=models.CASCADE

    )

    resume=models.FileField(

    upload_to="applications/"

    )

    experience=models.IntegerField(
    default=0
    )

    skills=models.TextField()

    linkedin=models.URLField(
    blank=True
    )

    projects=models.TextField(
    blank=True
    )

    status=models.CharField(

    max_length=20,

    choices=STATUS,

    default="pending"

    )

    created=models.DateTimeField(

    auto_now_add=True

    )

    class Meta:

        unique_together=(

        "user",

        "job"

        )

    def __str__(self):

        return self.user.username