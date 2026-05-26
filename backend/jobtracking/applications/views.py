
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404

from .models import Application
from .serializers import ApplicationSerializer
from jobs.models import Job


# ==========================
# APPLY JOB
# ==========================

class ApplicationView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):

        data = request.data.copy()

        job_id = data.get("job")

        already_applied = Application.objects.filter(
            user=request.user,
            job_id=job_id
        ).exists()

        if already_applied:

            return Response(
                {
                    "message":
                    "You already applied for this job"
                },
                status=400
            )

        serializer = ApplicationSerializer(
            data=data
        )

        if serializer.is_valid():

            serializer.save(
                user=request.user
            )

            return Response(
                serializer.data,
                status=201
            )

        return Response(
            serializer.errors,
            status=400
        )


# ==========================
# RECRUITER VIEW
# ==========================

class RecruiterApplicantsView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        apps = (
            Application.objects
            .select_related(
                "user",
                "job"
            )
        )

        data = []

        for app in apps:

            data.append({

                "id":
                app.id,

                "name":
                app.user.username,

                "job":
                app.job.title,

                "resume":
                (
                    app.resume.url
                    if app.resume
                    else None
                ),

                "status":
                app.status

            })

        return Response(data)



# ==========================
# UPDATE STATUS
# ==========================

class UpdateStatusView(APIView):

    permission_classes = [IsAuthenticated]

    def put(
        self,
        request,
        id
    ):

        app = get_object_or_404(
            Application,
            id=id
        )

        app.status = request.data.get(
            "status"
        )

        app.save()

        return Response({

            "message":
            "Updated"

        })



# ==========================
# DASHBOARD
# ==========================

class DashboardStatsView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        applications = (

            Application.objects

            .filter(
                user=request.user
            )

        )

        total = applications.count()

        applied = (

            applications.filter(
                status__in=[
                    "pending",
                    "applied"
                ]
            ).count()

        )

        interview = (

            applications.filter(
                status__in=[
                    "review",
                    "interview"
                ]
            ).count()

        )

        rejected = (

            applications.filter(
                status="rejected"
            ).count()

        )

        return Response({

            "total":
            total,

            "applied":
            applied,

            "interview":
            interview,

            "rejected":
            rejected

        })



# ==========================
# MY APPLICATIONS
# ==========================

class MyApplicationsView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        apps = (
            Application.objects
            .filter(user=request.user)
            .select_related("job")
            .order_by("-id")
        )

        data = []

        for app in apps:

            data.append({

                "id": app.id,

                "job_id": app.job.id,

                "job_title": app.job.title,

                "company": app.job.company,

                "status": app.status,

                # ADD THESE
                "interview_date":
                app.interview_date,

                "interview_time":
                str(app.interview_time)
                if app.interview_time
                else None,

                "interview_link":
                app.interview_link

            })

        return Response(data)

# ==========================
# RECRUITER DASHBOARD STATS
# ==========================

class RecruiterStatsView(APIView):

    permission_classes=[IsAuthenticated]

    def get(self,request):

        jobs=(

            Job.objects

            .filter(
                recruiter=request.user
            )

        )

        applications=(

            Application.objects

            .filter(
                job__recruiter=request.user
            )

        )

        jobs_count= jobs.count()

        applications_count=applications.count()

        interview_count=(

            applications.filter(

                status__in=[

                    "review",

                    "interview"

                ]

            ).count()

        )

        accepted_count=(

            applications.filter(

                status="accepted"

            ).count()

        )

        rejected_count=(

            applications.filter(

                status="rejected"

            ).count()

        )

        return Response({

            "jobs":
            jobs_count,

            "applications":
            applications_count,

            "interviews":
            interview_count,

            "accepted":
            accepted_count,

            "rejected":
            rejected_count

        })

from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Application


class ScheduleInterviewView(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request, id):

        app = get_object_or_404(
            Application,
            id=id
        )

        app.status = "interview"

        app.interview_date = request.data.get(
            "interview_date"
        )

        app.interview_time = request.data.get(
            "interview_time"
        )

        app.interview_link = request.data.get(
            "interview_link"
        )

        app.save()

        return Response({

            "message":
            "Interview Scheduled",

            "status":
            app.status

        })