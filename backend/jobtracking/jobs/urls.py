from django.urls import path

from .views import (
JobView,
MyJobsView,
UpdateJobView,
DeleteJobView
)

urlpatterns=[

path(
"jobs/",
JobView.as_view()
),

path(
"my-jobs/",
MyJobsView.as_view()
),

path(
"update-job/<int:id>/",
UpdateJobView.as_view()
),

path(
"delete-job/<int:id>/",
DeleteJobView.as_view()
)

]