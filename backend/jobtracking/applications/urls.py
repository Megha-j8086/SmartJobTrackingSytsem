from django.urls import path

from .views import (

RecruiterApplicantsView,

UpdateStatusView,

ApplicationView

)

urlpatterns=[

path(
"apply/",
ApplicationView.as_view()
),

path(
"applicants/",
RecruiterApplicantsView.as_view()
),

path(
"status/<int:id>/",
UpdateStatusView.as_view()
),

]