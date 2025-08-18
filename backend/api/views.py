from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Task
from .serializers import TaskSerializer
from rest_framework.authentication import SessionAuthentication

class TaskViewSet(viewsets.ModelViewSet):
    authentication_classes = [SessionAuthentication]
    queryset = Task.objects.all()
    serializer_class = TaskSerializer