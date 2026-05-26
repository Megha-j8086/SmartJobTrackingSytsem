from django.db import models


class Application(models.Model):

    STATUS_CHOICES = [

        ("pending","Pending"),

        ("review","Review"),

        ("interview","Interview"),

        ("accepted","Accepted"),

        ("rejected","Rejected")

    ]

    user=models.ForeignKey(
        "accounts.User",
        on_delete=models.CASCADE
    )

    job=models.ForeignKey(
        "jobs.Job",
        on_delete=models.CASCADE
    )

    resume=models.FileField(
        upload_to="applications/",
        null=True,
        blank=True
    )

    status=models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="pending"
    )

    interview_date=models.DateField(
        null=True,
        blank=True
    )

    interview_time=models.TimeField(
        null=True,
        blank=True
    )

    interview_link=models.URLField(
        blank=True
    )

    created=models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.user.username