from rest_framework import serializers
from .models import User


class RegisterSerializer(
    serializers.ModelSerializer
):

    password = serializers.CharField(
        write_only=True
    )

    class Meta:

        model = User

        fields = [

            "username",

            "email",

            "password",

            "role"

        ]

    def create(

        self,

        validated_data

    ):

        # BLOCK PUBLIC ADMIN CREATION

        role = validated_data.get(
            "role"
        )

        if role == "admin":

            raise serializers.ValidationError({

                "role":

                "Admin registration is not allowed"

            })

        return User.objects.create_user(

            username=
            validated_data["username"],

            email=
            validated_data["email"],

            password=
            validated_data["password"],

            role=
            role

        )


# ==========================
# PROFILE
# ==========================

class ProfileSerializer(
    serializers.ModelSerializer
):

    class Meta:

        model = User

        fields = [

            "username",

            "email",

            "phone",

            "linkedin",

            "experience",

            "resume"

        ]