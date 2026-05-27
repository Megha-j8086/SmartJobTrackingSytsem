from django.urls import path

from .views import (
RegisterView,
ProfileView,
AdminDashboardView,
AdminJobsView,
AdminUsersView,
DeleteUserView,
AdminDeleteJobView
)

from rest_framework_simplejwt.views import (
TokenObtainPairView,
TokenRefreshView
)

urlpatterns=[

path(
"register/",
RegisterView.as_view()
),

path(
"login/",
TokenObtainPairView.as_view()
),

path(
"refresh/",
TokenRefreshView.as_view()
),
path(
"profile/",
ProfileView.as_view()
),
path("admin/dashboard/", AdminDashboardView.as_view()),
path("admin/users/", AdminUsersView.as_view()),
path("admin/users/delete/<int:id>/", DeleteUserView.as_view()),
path("admin/jobs/", AdminJobsView.as_view()),
path("admin/jobs/delete/<int:id>/", AdminDeleteJobView.as_view()),

]