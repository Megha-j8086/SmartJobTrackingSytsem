from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView

from rest_framework.response import Response

from rest_framework import status

from .serializers import RegisterSerializer


class RegisterView(
    APIView
):

    permission_classes=[]

    def post(
        self,
        request
    ):

        serializer=RegisterSerializer(

            data=request.data

        )

        if serializer.is_valid():

            serializer.save()

            return Response(

                {
                    "message":
                    "Registered Successfully"
                }

            )

        print(serializer.errors)

        return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST
        )

from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate


class LoginView(APIView):

    permission_classes=[]

    authentication_classes=[]

    def post(self,request):

        username=request.data.get(
        "username"
        )

        password=request.data.get(
        "password"
        )

        user=authenticate(

        username=username,
        password=password

        )

        if user:

            refresh= RefreshToken.for_user(user)

            return Response({

            "refresh":
            str(
            refresh
            ),

            "access":
            str(
            refresh.access_token
            ),

            "role":
            user.role,

            "username":
            user.username

            })

        return Response(

        {
        "error":
        "Invalid Credentials"
        },

        status=401

        )

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


class ProfileView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        user = request.user

        return Response({

            "id": user.id,

            "username": user.username,

            "email": user.email,

            "role": user.role,

            "phone": user.phone,

            "linkedin": user.linkedin,

            "experience": user.experience,

            "resume":
            user.resume.url
            if user.resume
            else None

        })


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser

from accounts.models import User
from jobs.models import Job
from applications.models import Application
from accounts.permissions import IsAdmin


class AdminDashboardView(APIView):

    permission_classes = [IsAdmin]

    def get(self, request):

        users = User.objects.filter(role="user").count()
        recruiters = User.objects.filter(role="recruiter").count()
        jobs = Job.objects.count()
        applications = Application.objects.count()

        return Response({
            "users": users,
            "recruiters": recruiters,
            "jobs": jobs,
            "applications": applications
        })


from accounts.permissions import IsAdmin
class AdminUsersView(APIView):

    permission_classes = [IsAdmin]

    def get(self, request):

        users = User.objects.all().values(
            "id",
            "username",
            "email",
            "role"
        )

        return Response(users)

from django.shortcuts import get_object_or_404



from accounts.permissions import IsAdmin
class DeleteUserView(APIView):

    permission_classes = [IsAdmin]

    def delete(self, request, id):

        user = get_object_or_404(User, id=id)
        user.delete()

        return Response({"message": "User deleted"})



from accounts.permissions import IsAdmin
class AdminJobsView(APIView):

    permission_classes = [IsAdmin]

    def get(self, request):

        jobs = Job.objects.all().values(
            "id",
            "title",
            "company",
            "recruiter__username"
        )

        return Response(jobs)



from accounts.permissions import IsAdmin
class AdminDeleteJobView(APIView):

    permission_classes = [IsAdmin]

    def delete(self, request, id):

        job = get_object_or_404(Job, id=id)
        job.delete()

        return Response({"message": "Job deleted"})