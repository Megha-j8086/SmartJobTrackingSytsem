from django.urls import path
from .views import (
    ApplicationView,
    MyApplicationsView,
    RecruiterApplicantsView,
    UpdateStatusView,
    DashboardStatsView
)

urlpatterns = [
    path("apply/", ApplicationView.as_view()),
    path("my-applications/", MyApplicationsView.as_view()),  # 🔥 ADD THIS
    path("applicants/", RecruiterApplicantsView.as_view()),
    path("status/<int:id>/", UpdateStatusView.as_view()),
    path("dashboard-stats/", DashboardStatsView.as_view()),
]