from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from django.shortcuts import get_object_or_404

from .models import Job
from .serializers import JobSerializer


# ==========================
# LIST + CREATE JOB
# ==========================

class JobView(APIView):

    permission_classes=[IsAuthenticated]

    def get(self,request):

        jobs=Job.objects.all()

        serializer=JobSerializer(

            jobs,

            many=True

        )

        return Response(

            serializer.data

        )


    def post(self,request):

        data=request.data.copy()

        data["recruiter"]=request.user.id

        serializer=JobSerializer(

            data=data

        )

        if serializer.is_valid():

            serializer.save()

            return Response({

                "message":

                "Job Added"

            })

        return Response(

            serializer.errors,

            status=400

        )



# ==========================
# RECRUITER OWN JOBS
# ==========================

class MyJobsView(APIView):

    permission_classes=[IsAuthenticated]

    def get(self,request):

        jobs=(

            Job.objects

            .filter(

                recruiter=request.user

            )

            .order_by(

                "-id"

            )

        )

        serializer=JobSerializer(

            jobs,

            many=True

        )

        return Response(

            serializer.data

        )



# ==========================
# UPDATE JOB
# ==========================

class UpdateJobView(APIView):

    permission_classes=[IsAuthenticated]

    def put(

        self,

        request,

        id

    ):

        job=get_object_or_404(

            Job,

            id=id,

            recruiter=request.user

        )

        serializer= JobSerializer(

            job,

            data=request.data,

            partial=True

        )

        if serializer.is_valid():

            serializer.save()

            return Response({

                "message":

                "Job Updated",

                "data":

                serializer.data

            })

        return Response(

            serializer.errors,

            status=400

        )



# ==========================
# DELETE JOB
# ==========================

class DeleteJobView(APIView):

    permission_classes=[IsAuthenticated]

    def delete(

        self,

        request,

        id

    ):

        job=get_object_or_404(

            Job,

            id=id,

            recruiter=request.user

        )

        job.delete()

        return Response({

            "message":

            "Job Deleted"

        })