from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .models import Job
from .serializers import JobSerializer


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