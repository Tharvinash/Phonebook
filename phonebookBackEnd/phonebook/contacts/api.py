from contacts.models import Contact
from rest_framework import viewsets, permissions
from .serializers import ContactSerializer


class ContactViewSet(viewsets.ModelViewSet):
    """
    A viewset that provides CRUD (Create, Read, Update, Delete) operations for the Contact model.

    This viewset automatically provides `list`, `create`, `retrieve`, `update`, and `destroy` actions.
    By default, it allows any user to access these endpoints.
    """
    queryset = Contact.objects.all()
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = ContactSerializer
