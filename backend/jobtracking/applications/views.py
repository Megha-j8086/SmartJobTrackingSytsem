from rest_framework.views import APIView

from rest_framework.response import Response

from rest_framework.permissions import IsAuthenticated

from .models import Application

from .serializers import ApplicationSerializer


class ApplicationView(APIView):

    permission_classes=[

    IsAuthenticated

    ]

    def post(

    self,

    request

    ):

        data=request.data.copy()

        data["user"]=request.user.id

        job=data.get("job")

        already=Application.objects.filter(

        user=request.user,

        job=job

        ).exists()

        if already:

            return Response(

            {

            "error":

            "Already applied to this job"

            },

            status=400

            )

        serializer=ApplicationSerializer(

        data=data

        )

        if serializer.is_valid():

            serializer.save()

            return Response(

            {

            "message":

            "Application Submitted",

            "data":

            serializer.data

            },

            status=201

            )

        return Response(

        serializer.errors,

        status=400

        )

from django.shortcuts import get_object_or_404


class RecruiterApplicantsView(APIView):

    permission_classes=[

    IsAuthenticated

    ]

    def get(

    self,
    request

    ):

        apps=Application.objects.all()

        data=[]

        for app in apps:

            data.append({

            "id":

            app.id,

            "name":

            app.user.username,

            "job":

            app.job.title,

            "resume":

            app.resume.url
            if app.resume
            else None,

            "status":

            app.status

            })

        return Response(
        data
        )


class UpdateStatusView(APIView):

    permission_classes=[

    IsAuthenticated

    ]

    def put(

    self,
    request,
    id

    ):

        app=get_object_or_404(

        Application,

        id=id

        )

        app.status=request.data.get(
        "status"
        )

        app.save()

        return Response({

        "message":

        "Updated"

        })