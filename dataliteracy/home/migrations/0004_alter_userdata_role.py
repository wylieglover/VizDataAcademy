# Generated by Django 4.2.5 on 2023-11-28 16:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_alter_userdata_role'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userdata',
            name='role',
            field=models.CharField(choices=[('STUDENT', 'Student'), ('TEACHER', 'Teacher')], max_length=10),
        ),
    ]
