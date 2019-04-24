from django.contrib.auth.models import User

from rest_framework import serializers

from django.contrib.auth.hashers import BCryptSHA256PasswordHasher


class UserSerializer(serializers.ModelSerializer):

    encoder = BCryptSHA256PasswordHasher()

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'groups', 'is_superuser')

    def create(self, validated_data):
        # pop and encode password
        password = validated_data.pop('password')
        hashed_password = self.encoder.encode(password, salt=self.encoder.salt())

        # pop and assign group
        groups = validated_data.pop('groups')
        user = User.objects.create(password=hashed_password, **validated_data)
        user.groups.set(groups)

        user.save()

        return user
